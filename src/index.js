import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Visualizer from "./componants/Visualizer/Visualizer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Visualizer displayHeight={400} displayWidth={500} />
  </React.StrictMode>,
);
