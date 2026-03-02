import { useState } from "react";
import "./index.css";

export default function App() {
  const [algoSelected, setAlgoSelected] = useState(false);
  return <>{algoSelected ? <></> : <></>}</>;
}
