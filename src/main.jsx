import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Canvas shadows camera={{ near: 0.1, far: 50, position: [0, 0, 7] }} className="r3f">
      <App />
    </Canvas>
  </React.StrictMode>
);
