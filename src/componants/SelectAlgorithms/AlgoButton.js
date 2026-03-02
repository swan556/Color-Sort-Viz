import { useState } from "react";

export default function AlgoButton({ algorithm, addThisAlgo, removeThisAlgo }) {
  const [selected, setSelected] = useState(false);
  function handleSelected() {
    if (selected) {
      removeThisAlgo(algorithm);
    } else {
      addThisAlgo(algorithm.id);
    }
    setSelected((s) => !s);
  }

  return (
    <div className="algo-btn-cover">
      <button
        onClick={handleSelected}
        className={`algo-btn ${selected ? "selected" : "not-selected"}`}
      >
        {algorithm.name}
      </button>
    </div>
  );
}
