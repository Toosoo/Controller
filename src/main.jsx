import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import App from "./App.jsx";

import { Loader } from "@react-three/drei";
import { Physics } from "@react-three/rapier";





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Canvas shadows camera={{ near: 0.1, far: 50, position: [0, 6, 9], rotation: [-0.3, 0, 0] }} className="r3f">
      <Suspense>
        
          <App />
     
      </Suspense>
    </Canvas>
    <Loader />
  </React.StrictMode>
);
