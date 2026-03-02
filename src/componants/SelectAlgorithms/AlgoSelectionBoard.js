import AlgoButton from "./AlgoButton";

export default function AlgoSelectionBoard({
  sortingAlgorithms,
  selectedAlgos,
  setSelectedAlgos,
}) {
  function handleAddAlgo(algo) {
    setSelectedAlgos((cur_algos) => [...cur_algos, algo]);
  }
  function handleRemoveAlgoByID(id) {
    setSelectedAlgos((cur_algos) => cur_algos.filter((algo) => algo.id !== id));
  }
  return (
    <div className="algo-selection-board">
      {sortingAlgorithms.map((algo) => (
        <AlgoButton
          algorithm={algo}
          addThisAlgo={handleAddAlgo}
          removeThisAlgo={handleRemoveAlgoByID}
          key={algo.id}
        />
      ))}
    </div>
  );
}
