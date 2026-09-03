import { ImageResponse } from "next/og";

export const alt = "Dyt. Buğra Öztürk — Diyetisyen, Aydın";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#f6f1e8",
          color: "#354a3c",
        }}
      >
        <div style={{ fontSize: 28, color: "#4d6b57" }}>Aydın · Efeler</div>
        <div style={{ fontSize: 64, marginTop: 16, fontWeight: 600 }}>
          Dyt. Buğra Öztürk
        </div>
        <div style={{ fontSize: 32, marginTop: 20, color: "#5e6758" }}>
          Yasaksız, kişiye özel beslenme
        </div>
      </div>
    ),
    { ...size },
  );
}
