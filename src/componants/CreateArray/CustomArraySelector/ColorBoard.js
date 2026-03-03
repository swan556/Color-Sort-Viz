export default function ColorBoard({ colorArray, setColorArray }) {
  function handleAddColor(h) {
    setColorArray((arr) => [...arr, { h: h, s: 100, l: 50 }]);
  }
  return (
    <div className="color-box">
      {Array.from({ length: 361 }, (_, i) => (
        <div
          className="color-box-color"
          style={{ backgroundColor: `hsl(${i}, 100%, 50%)` }}
          onClick={() => handleAddColor(i)}
        />
      ))}
    </div>
  );
}
