export default function RandomArrayGenerator({
  colorArray,
  setColorArray,
  numColors,
  setNumColors,
}) {
  function handleNumColors(num) {
    setNumColors(num);
    const arrNew = Array.from({ length: num }, () => ({
      h: Math.floor(50 + Math.random() * 170), // Random hue between 0 and 360
      s: 100,
      l: 50,
    }));
    setColorArray((arr) => arrNew);
  }

  return (
    <div className="random-array-selector">
      <input
        value={numColors}
        type="number"
        onChange={(e) => handleNumColors(Number(e.target.value))}
        placeholder="enter number of colors"
        className="num-colors-input"
      />
    </div>
  );
}
