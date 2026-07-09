import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SITE = path.join(ROOT, "site");

const NEW_NAME = process.argv[2];
if (!NEW_NAME) {
  console.error("Usage: node scripts/rebrand.mjs \"NEW BRAND NAME\"");
  process.exit(1);
}

const OLD_VARIANTS = [
  "CAPITOLIUM",
  "Capitolium",
  "capitolium",
  "Collab Capitolium",
  "collabcapitolium",
];

function transform(text, newName) {
  const upper = newName.toUpperCase();
  const title =
    newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase();
  const lower = newName.toLowerCase();

  let out = text;
  // Order matters: longest / most specific first
  out = out.replaceAll("Collab Capitolium", newName);
  out = out.replaceAll("collabcapitolium", lower.replace(/\s+/g, ""));
  out = out.replaceAll("CAPITOLIUM", upper);
  out = out.replaceAll("Capitolium", title);
  out = out.replaceAll("capitolium", lower);
  return out;
}

function walk(dir, fn) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, fn);
    else fn(full);
  }
}

let changed = 0;
walk(SITE, (file) => {
  if (!/\.(html?|js|css|json|webmanifest|svg|txt|xml)$/i.test(file)) return;
  const before = fs.readFileSync(file, "utf8");
  if (!OLD_VARIANTS.some((v) => before.includes(v))) return;
  const after = transform(before, NEW_NAME);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
    console.log("updated", path.relative(ROOT, file));
  }
});

console.log(`\nRebranded to "${NEW_NAME}" in ${changed} files.`);
