import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 42,
  height: 42,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 16,
          background: "#FFFFF0",
          width: "100%",
          height: "100%",
          borderRadius: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "gold",
        }}
      >
        PPS
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
