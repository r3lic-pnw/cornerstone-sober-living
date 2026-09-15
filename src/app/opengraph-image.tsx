import { ImageResponse } from "next/og";
import { ministry } from "@/lib/ministry";

/**
 * The card that shows when someone texts or posts a link to the site — which,
 * for this ministry, is mostly how it travels: a counselor sends it to a case
 * manager, a wife sends it to her husband's mother.
 *
 * Generated rather than a static file because the only logo we have is an SVG,
 * and the opengraph-image convention takes .jpg/.png/.gif only. Rendered to PNG
 * at build time, so it costs nothing at request time and works on static
 * hosting. Swap this file for `opengraph-image.png` if a raster logo lands.
 */

export const alt = `${ministry.name} — Christian-centered sober housing for men in Snohomish County`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      // Brand tokens are inlined: Satori resolves no CSS variables, so these
      // are the literal values from globals.css. Navy carries it, gold is the
      // rule and one word — the same ratio the site holds to.
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#082857",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.02em",
          }}
        >
          CORNERSTONE
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 600,
            color: "#ffd940",
            letterSpacing: "0.08em",
            marginTop: 8,
          }}
        >
          SOBER LIVING
        </div>

        <div
          style={{
            display: "flex",
            width: 640,
            height: 4,
            backgroundColor: "#ffcc00",
            margin: "40px 0",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 600,
            color: "#ffffff",
          }}
        >
          Foundation. Faith. Freedom.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#b8cae4",
            marginTop: 24,
          }}
        >
          {ministry.serviceArea}
        </div>
      </div>
    ),
    size,
  );
}
