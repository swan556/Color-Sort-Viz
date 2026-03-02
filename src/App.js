import { useState } from "react";
import AlgoSelectionBoard from "./componants/SelectAlgorithms/AlgoSelectionBoard";
import ColorBoard from "./componants/CreateArray/CustomArraySelector/ColorBoard";
import RandomArrayGenerator from "./componants/CreateArray/RandomArrayGenerator";
import Button from "./componants/Button";
import "./index.css";
const sortingAlgorithms = [
  {
    name: "Bubble Sort",
    img: "./static/sortingAlgos/bubble_sort",
    id: 0,
  },
  {
    name: "Selection Sort",
    img: "./static/sortingAlgos/selection_sort",
    id: 1,
  },
  {
    name: "Insertion Sort",
    img: "./static/sortingAlgos/insertion_sort",
    id: 2,
  },
  {
    name: "Merge Sort",
    img: "./static/sortingAlgos/merge_sort",
    id: 3,
  },
  {
    name: "Quick Sort",
    img: "./static/sortingAlgos/quick_sort",
    id: 4,
  },
  {
    name: "Heap Sort",
    img: "./static/sortingAlgos/heap_sort",
    id: 5,
  },
  {
    name: "Counting Sort",
    img: "./static/sortingAlgos/counting_sort",
    id: 6,
  },
  {
    name: "Radix Sort",
    img: "./static/sortingAlgos/radix_sort",
    id: 7,
  },
  {
    name: "Bucket Sort",
    img: "./static/sortingAlgos/bucket_sort",
    id: 8,
  },
];

export default function App() {
  const [algoSelected, setAlgoSelected] = useState(false);
  const [selectedAlgos, setSelectedAlgos] = useState([]);

  function handlePageSelected() {
    setAlgoSelected((al) => !al);
  }

  return (
    <div className="container">
      {!algoSelected ? (
        <>
          <AlgoSelectionBoard
            sortingAlgorithms={sortingAlgorithms}
            selectedAlgos={selectedAlgos}
            setSelectedAlgos={setSelectedAlgos}
          />
          <div className="array-selector">
            <ColorBoard />
            <RandomArrayGenerator />
          </div>
          <Button onClick={handlePageSelected} />
        </>
      ) : (
        <>
          <p>in construction</p>
        </>
      )}
    </div>
  );
}
