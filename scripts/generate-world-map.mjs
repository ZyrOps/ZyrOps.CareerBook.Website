// Regenerate with: npm run generate:map
import { writeFileSync, mkdirSync } from "node:fs";
import DottedMap from "dotted-map";

const map = new DottedMap({
  height: 64,
  grid: "diagonal",
  region: { lat: { min: -50, max: 74 }, lng: { min: -168, max: 190 } },
});

const { width, height } = map.image;
const d = map
  .getPoints()
  .map(({ x, y }) => `M${+x.toFixed(2)} ${+y.toFixed(2)}h0`)
  .join("");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><path d="${d}" stroke="#cbc1e2" stroke-width="0.6" stroke-linecap="round"/></svg>`;

mkdirSync("public/maps", { recursive: true });
writeFileSync("public/maps/world-dots.svg", svg);

// Named markets first, then unnamed regions where CareerBook ERP™ serves institutions.
const locations = [
  { id: "IN", lat: 21, lng: 78.5 },
  { id: "SA", lat: 24.2, lng: 45 },
  { id: "AE", lat: 24.4, lng: 54.4 },
  { id: "BH", lat: 26.1, lng: 50.6 },
  { id: "QA", lat: 25.3, lng: 51.2 },
  { id: "KW", lat: 29.3, lng: 47.8 },
  { id: "OM", lat: 21.5, lng: 57 },
  { id: "r1", lat: 27.7, lng: 85.3 },
  { id: "r2", lat: 7.9, lng: 80.7 },
  { id: "r3", lat: 23.7, lng: 90.4 },
  { id: "r4", lat: 1.35, lng: 103.8 },
  { id: "r5", lat: 3.1, lng: 101.7 },
  { id: "r6", lat: -1.3, lng: 36.8 },
  { id: "r7", lat: 9.1, lng: 7.4 },
  { id: "r8", lat: -26.2, lng: 28 },
  { id: "r9", lat: 51.5, lng: -0.1 },
  { id: "r10", lat: 40.7, lng: -74 },
  { id: "r11", lat: -33.9, lng: 151.2 },
];

const pins = locations.map(({ id, lat, lng }) => {
  const { x, y } = map.getPin({ lat, lng });
  return { id, x: +((x / width) * 100).toFixed(2), y: +((y / height) * 100).toFixed(2) };
});

writeFileSync(
  "src/content/map-pins.json",
  JSON.stringify({ aspect: +(width / height).toFixed(4), pins }, null, 2) + "\n",
);

console.log(`world-dots.svg ${width}x${height}, ${(svg.length / 1024).toFixed(1)} KB, ${pins.length} pins`);
