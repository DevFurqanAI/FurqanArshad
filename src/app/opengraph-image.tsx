import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Muhammad Furqan Arshad — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#22c55e",
            }}
          />
          <div
            style={{
              fontSize: 22,
              color: "#a1a1aa",
              letterSpacing: 4,
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Open to backend & full-stack internships
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Muhammad Furqan Arshad
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#a1a1aa",
              marginTop: 24,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            I build systems, not just interfaces — full-stack apps, database-driven desktop tools, and network infrastructure.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            fontFamily: "monospace",
            fontSize: 20,
            color: "#71717a",
          }}
        >
          <div>MERN</div>
          <div>·</div>
          <div>C# / SQL Server</div>
          <div>·</div>
          <div>Networking</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
