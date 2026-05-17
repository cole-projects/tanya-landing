/**
 * Regenerate public/tanya.vcf with embedded PHOTO from public/tanya-who.png
 * (JPEG data; keep .png filename for asset URLs). Run: npm run gen:vcf
 *
 * Edit TEL below if the public number changes.
 */
import fs from "fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const TEL = "+15623333333";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pngPath = path.join(root, "public", "tanya-who.png");
const outPath = path.join(root, "public", "tanya.vcf");

/** RFC 2426 folding: max 75 octets per line; continuation lines start with space. */
function foldV3Value(s) {
  const lines = [];
  let i = 0;
  lines.push(s.slice(0, 75));
  i = 75;
  while (i < s.length) {
    lines.push(` ${s.slice(i, i + 74)}`);
    i += 74;
  }
  return lines.join("\r\n");
}

const png = fs.readFileSync(pngPath);
const b64 = png.toString("base64");
const photoLine = `PHOTO;ENCODING=b;TYPE=JPEG:${b64}`;

const vcard = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "FN:Tanya",
  "N:;Tanya;;;",
  foldV3Value(photoLine),
  `TEL;TYPE=CELL:${TEL}`,
  "NOTE:The conversation that changes your day. Add this contact for TanyaTalk.",
  "END:VCARD",
  "",
].join("\r\n");

fs.writeFileSync(outPath, vcard, "utf8");
console.log(`Wrote ${outPath} (${Math.round(vcard.length / 1024)} KB)`);
