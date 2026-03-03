export default function Visualizer({
  colorArray,
  displayHeight,
  displayWidth,
  playAction,
}) {
  // hsl goes from 0 to 360
  // assuming scale to be: max hsl val in colorArray will be 95% of height var
  const maxHue = colorArray.reduce((max, color) => Math.max(max, color.h), 0);
  if (colorArray.length === 0) {
    return <h2>add colors to see visual</h2>;
  }

  return (
    <div
      style={{
        height: `${displayHeight}px`,
        width: `${displayWidth}px`,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        gap: "0px",
        backgroundColor: "none",
      }}
    >
      {colorArray.map((clr) => (
        <LengthBar
          hue={clr.h}
          height={Math.round((0.95 * displayHeight * clr.h) / maxHue)}
          width={Math.round((0.9 * displayWidth) / colorArray.length)}
        />
      ))}
    </div>
  );
}

function LengthBar({ hue, height, width }) {
  return (
    <div
      style={{
        height: `100%`,
        width: `${width}px`,
        padding: "2px",
        backgroundColor: `hsl(${hue}, 100%, 50%)`,
      }}
    />
  );
}
