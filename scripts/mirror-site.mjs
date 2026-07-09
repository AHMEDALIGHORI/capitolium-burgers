import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "site");
const BASE = "https://www.collabcapitolium.fr";
const CONCURRENCY = 8;

const EXTRA = [
  "/",
  "/_payload.json",
  "/favicon.ico",
  "/favicon.svg",
  "/favicon-96x96.png",
  "/apple-touch-icon.png",
  "/site.webmanifest",
  "/pdfs/kirby/mentions_legales.pdf",
  "/fonts/Edwardian-Script-Regular.woff2",
  "/fonts/Times-Regular.woff2",
  "/fonts/Times-RegularItalic.woff2",
];

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function urlToLocal(urlPath) {
  let p = urlPath.split("?")[0].split("#")[0];
  if (!p.startsWith("/")) p = "/" + p;
  if (p === "/") return path.join(OUT, "index.html");
  if (p.endsWith("/")) return path.join(OUT, p.slice(1), "index.html");
  return path.join(OUT, p.slice(1));
}

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const req = lib.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "*/*",
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const next = new URL(res.headers.location, url).href;
          res.resume();
          fetchBuffer(next).then(resolve, reject);
          return;
        }
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      }
    );
    req.on("error", reject);
    req.setTimeout(120000, () => {
      req.destroy(new Error(`Timeout ${url}`));
    });
  });
}

function extractPaths(text) {
  const found = new Set();
  const patterns = [
    /(?:src|href|poster|data-src)=["'](\/[^"']+)["']/gi,
    /url\((['"]?)(\/[^'")]+)\1\)/gi,
    /["'](\/(?:_nuxt|fonts|images|videos|media|pdfs|favicon)[^"']+)["']/gi,
    /\\u002F((?:_nuxt|fonts|images|videos|media|pdfs)[^"\\]*)/gi,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(text))) {
      let p = m[2] || m[1];
      if (!p) continue;
      if (p.startsWith("u002F")) p = "/" + p.slice(5);
      if (!p.startsWith("/")) p = "/" + p;
      p = p.replace(/\\u002F/g, "/").replace(/\\\//g, "/");
      p = p.split("?")[0].split("#")[0];
      if (p.length > 1 && !p.includes(" ") && !p.includes("<")) found.add(p);
    }
  }
  return found;
}

const queue = [];
const seen = new Set();
const failed = [];
let active = 0;
let done = 0;

function enqueue(urlPath) {
  let p = urlPath.split("?")[0].split("#")[0];
  if (!p.startsWith("/")) p = "/" + p;
  if (seen.has(p)) return;
  seen.add(p);
  queue.push(p);
}

async function processOne(urlPath) {
  const local = urlToLocal(urlPath);
  const url = BASE + urlPath;
  try {
    if (fs.existsSync(local) && fs.statSync(local).size > 0) {
      // still parse text assets for more refs
      if (/\.(html?|js|css|json|webmanifest|svg)$/i.test(local) || urlPath === "/") {
        const text = fs.readFileSync(local, "utf8");
        for (const p of extractPaths(text)) enqueue(p);
      }
      return;
    }
    const buf = await fetchBuffer(url);
    ensureDir(local);
    fs.writeFileSync(local, buf);
    const isText =
      /\.(html?|js|css|json|webmanifest|svg|txt|map)$/i.test(local) ||
      urlPath === "/" ||
      urlPath.endsWith("/");
    if (isText) {
      const text = buf.toString("utf8");
      for (const p of extractPaths(text)) enqueue(p);
    }
  } catch (err) {
    failed.push({ urlPath, error: String(err.message || err) });
  }
}

function pump() {
  return new Promise((resolve) => {
    const tick = () => {
      while (active < CONCURRENCY && queue.length) {
        const next = queue.shift();
        active++;
        processOne(next).finally(() => {
          active--;
          done++;
          if (done % 20 === 0 || queue.length === 0) {
            process.stdout.write(
              `\rDownloaded ${done}/${seen.size} | queue ${queue.length} | fail ${failed.length}   `
            );
          }
          tick();
        });
      }
      if (active === 0 && queue.length === 0) resolve();
    };
    tick();
  });
}

fs.mkdirSync(OUT, { recursive: true });

// Seed from existing homepage if present
const homeSrc = path.join(ROOT, "source", "homepage.html");
if (fs.existsSync(homeSrc)) {
  const dest = path.join(OUT, "index.html");
  fs.copyFileSync(homeSrc, dest);
  const text = fs.readFileSync(dest, "utf8");
  for (const p of extractPaths(text)) enqueue(p);
}

for (const p of EXTRA) enqueue(p);

console.log(`Starting mirror of ${BASE}`);
await pump();

// Second pass: parse all downloaded JS/CSS for more assets
const walk = (dir) => {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full);
    else if (/\.(js|css|html|json|webmanifest|svg)$/i.test(name)) {
      try {
        const text = fs.readFileSync(full, "utf8");
        for (const p of extractPaths(text)) enqueue(p);
      } catch {}
    }
  }
};
walk(OUT);
console.log(`\nSecond pass queue: ${queue.length}`);
await pump();

fs.writeFileSync(
  path.join(ROOT, "source", "mirror-report.json"),
  JSON.stringify({ total: seen.size, failed, done }, null, 2)
);
console.log(`\nDone. Files tracked: ${seen.size}. Failed: ${failed.length}`);
if (failed.length) {
  console.log(failed.slice(0, 30));
}
