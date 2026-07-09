import fs from "fs";
import path from "path";

const site = "site";
const html = fs.readFileSync(path.join(site, "index.html"), "utf8");
const allText = [html];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (/\.(js|css|json)$/i.test(name)) {
      try {
        allText.push(fs.readFileSync(full, "utf8"));
      } catch {}
    }
  }
}
walk(path.join(site, "_nuxt"));

const blob = allText.join("\n");
const refs = new Set();
for (const m of blob.matchAll(/\/(?:videos|images|fonts|pdfs|_nuxt)\/[A-Za-z0-9_./%-]+\.[A-Za-z0-9]+/g)) {
  refs.add(m[0].split("?")[0]);
}
// also scrub paths without extension that have .scrub.mp4 siblings
for (const m of blob.matchAll(/\/videos\/[A-Za-z0-9_./%-]+/g)) {
  refs.add(m[0].split("?")[0]);
}

let ok = 0,
  miss = 0;
const missing = [];
for (const r of [...refs].sort()) {
  const local = path.join(site, r.slice(1));
  if (fs.existsSync(local)) {
    ok++;
  } else {
    // try common extensions
    const candidates = [
      local + ".mp4",
      local + ".webm",
      local + ".scrub.mp4",
      local + ".jpg",
      local + ".webp",
    ];
    if (candidates.some((c) => fs.existsSync(c))) {
      ok++;
    } else {
      miss++;
      missing.push(r);
    }
  }
}
console.log({ ok, miss, missing: missing.slice(0, 50) });
