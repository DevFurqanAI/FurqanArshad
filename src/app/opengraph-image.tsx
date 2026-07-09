import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Muhammad Furqan Arshad — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Pulled from globals.css design tokens so this actually matches the live site
// instead of using generic dark-mode colors:
// --background (dark): oklch(0.145 0 0)  ≈ #141414
// --brand: oklch(0.62 0.14 175)          ≈ #2dd9bd (teal/cyan)
// --foreground (dark): oklch(0.965 0 0)  ≈ #f5f5f5
// --fg-tertiary: oklch(0.708 0 0)        ≈ #b3b3b3
// --border white/10%                     used for the grid + hairlines

const BG = "#141414";
const BRAND = "#2dd9bd";
const FG_PRIMARY = "#f5f5f5";
const FG_TERTIARY = "#b3b3b3";

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
          backgroundColor: BG,
          position: "relative",
        }}
      >
        {/* fine grid, same treatment as the hero section background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* brand-teal blur glow, same idea as the radial blobs used across sections */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: BRAND,
            opacity: 0.16,
            filter: "blur(120px)",
          }}
        />

        {/* status pill — mirrors the hero's "open to internships" chip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 999,
            padding: "10px 18px",
            width: "fit-content",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: BRAND,
            }}
          />
          <div
            style={{
              fontSize: 20,
              color: FG_PRIMARY,
              letterSpacing: 3,
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
              color: FG_PRIMARY,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Muhammad Furqan Arshad
          </div>
          <div
            style={{
              fontSize: 30,
              color: FG_TERTIARY,
              marginTop: 24,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            I build systems, not just interfaces — full-stack apps, database-driven desktop tools, and network infrastructure.
          </div>
        </div>

        {/* tech chips — same border/mono treatment as the stack tags on project cards */}
        <div style={{ display: "flex", gap: 12 }}>
          {["MERN", "C# / SQL Server", "Networking"].map((tag) => (
            <div
              key={tag}
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 8,
                padding: "8px 14px",
                fontFamily: "monospace",
                fontSize: 18,
                color: FG_TERTIARY,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
