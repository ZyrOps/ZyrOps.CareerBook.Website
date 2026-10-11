import { ImageResponse } from "next/og";

export const alt = "CareerBook ERP™ — Enterprise Education Operating System (EEOS)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const mark = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M27.5 59C22 46 13 36.5 3 31l1.2-5 5.2 1.4C17.5 34.5 25 45 27.5 59Z" fill="#a21caf"/><path d="M36.5 59C42 46 51 36.5 61 31l-1.2-5-5.2 1.4C46.5 34.5 39 45 36.5 59Z" fill="#a21caf"/><path d="M31 56C26.5 44 18.5 32.5 8.5 24.5L20 18.5c6.5 8 10.5 18 11 30Z" fill="#5b21b6"/><path d="M33 56c4.5-12 12.5-23.5 22.5-31.5L44 18.5c-6.5 8-10.5 18-11 30Z" fill="#5b21b6"/><path d="M28.6 3.5h6.8l-1.5 6.2h-3.8Z" fill="#4c1d95"/><path d="M30 10.6h4l3.2 13.2L32 30.5l-5.2-6.7Z" fill="#6d28d9"/></svg>`,
)}`;

export default function OpengraphImage() {
  const stats = [
    ["1,500+", "Institutions"],
    ["18", "Countries"],
    ["2.2M", "Users"],
    ["150+", "Modules"],
  ];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #f6f3ff 0%, #ffffff 55%, #fff6ed 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={mark} width={64} height={64} />
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800, color: "#1b0a3b" }}>
            CareerBook<span style={{ color: "#5B21B6", marginLeft: 10 }}>ERP™</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 3, color: "#5B21B6" }}>ENTERPRISE EDUCATION OPERATING SYSTEM</div>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 68, fontWeight: 800, color: "#1b0a3b", lineHeight: 1.08, marginTop: 16 }}>
            Run Your Entire Institution from a&nbsp;<span style={{ color: "#F97316" }}>Single Platform</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 56 }}>
          {stats.map(([v, l]) => (
            <div key={l} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 44, fontWeight: 800, color: "#1b0a3b" }}>{v}</div>
              <div style={{ fontSize: 22, color: "#6f6a85" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
