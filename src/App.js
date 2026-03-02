import { useState } from "react";
import AlgoSelectionBoard from "./componants/SelectAlgorithms/AlgoSelectionBoard";
import ColorBoard from "./componants/CreateArray/CustomArraySelector/ColorBoard";
import RandomArrayGenerator from "./componants/CreateArray/RandomArrayGenerator";
import Button from "./componants/Button";
import "./index.css";

export default function App() {
  const [algoSelected, setAlgoSelected] = useState(false);

  function handlePageSelected() {
    setAlgoSelected((al) => !al);
  }

  return (
    <>
      {algoSelected ? (
        <>
          <AlgoSelectionBoard />
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
    </>
  );
}
