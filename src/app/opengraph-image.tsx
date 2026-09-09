import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-data";

export const alt = `${siteConfig.name} — nettoyage professionnel à Caen et dans le Calvados`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f3440 0%, #1a5061 55%, #128ba6 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#7fdcf0" }}>
          NETTOYAGE PROFESSIONNEL · CALVADOS
        </div>
        <div style={{ display: "flex", fontSize: 82, fontWeight: 800, marginTop: 24 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            marginTop: 20,
            color: "rgba(255,255,255,0.82)",
            maxWidth: 900,
          }}
        >
          Bureaux, médical, commerces, industrie, fin de chantier — à Caen et dans tout le Calvados.
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 44, color: "#7fdcf0" }}>
          {siteConfig.phone} · Devis gratuit sous 24h
        </div>
      </div>
    ),
    size
  );
}
