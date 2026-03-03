import { useState } from "react";
import AlgoSelectionBoard from "./componants/SelectAlgorithms/AlgoSelectionBoard";
import ColorBoard from "./componants/CreateArray/CustomArraySelector/ColorBoard";
import RandomArrayGenerator from "./componants/CreateArray/RandomArrayGenerator";
import "./index.css";
import Visualizer from "./componants/Visualizer/Visualizer";
import bubble_sort from "./sortingAlgorithms/bubble_sort";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
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
  const [randomGeneratorActive, setRandomGeneratorActive] = useState(false);
  const [numColors, setNumColors] = useState(null);
  const [selectedAlgos, setSelectedAlgos] = useState([]);
  const [colorArray, setColorArray] = useState([]);
  const [playAction, setPlayAction] = useState(false);

  function handlePageSelected() {
    setAlgoSelected((al) => !al);
  }

  async function animateSort() {
    const animationSteps = bubble_sort(colorArray);
    const delay = 10; // ms

    for (let i = 0; i < animationSteps.length; i++) {
      const { type, indices } = animationSteps[i];
      const [idxA, idxB] = indices;

      if (type === "compare") {
        await sleep(delay);
      } else {
        setColorArray((arr) => {
          const newArr = [...arr];
          let temp = newArr[idxA];
          newArr[idxA] = newArr[idxB];
          newArr[idxB] = temp;
          return newArr;
        });
        await sleep(delay);
      }
    }
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {!randomGeneratorActive ? (
                <ColorBoard
                  colorArray={colorArray}
                  setColorArray={setColorArray}
                />
              ) : (
                <RandomArrayGenerator
                  colorArray={colorArray}
                  setColorArray={setColorArray}
                  numColors={numColors}
                  setNumColors={setNumColors}
                />
              )}
              <button
                className="toggle-method-btn"
                onClick={() => {
                  setRandomGeneratorActive((s) => !s);
                  setColorArray([]);
                  setNumColors(0);
                }}
              >
                Toggle method
              </button>
            </div>
            <Visualizer
              colorArray={colorArray}
              displayHeight={200}
              displayWidth={250}
            />
          </div>
          <button onClick={handlePageSelected} className="next-btn">
            Next
          </button>
        </>
      ) : (
        <>
          <Visualizer
            colorArray={colorArray}
            displayHeight={500}
            displayWidth={700}
            playAction={playAction}
          />
          <button
            onClick={() => {
              animateSort();
            }}
          >
            Play
          </button>
        </>
      )}
    </div>
  );
}
