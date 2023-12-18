import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import App from "./App.jsx";

import { Loader } from "@react-three/drei";
import { Debug, Physics,useBox } from "@react-three/cannon";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Canvas shadows camera={{ near: 0.1, far: 50, position: [0, 4, 7],rotation:[-.6,0,0] }} className="r3f">
    <Suspense>
  <Physics>
  <Debug color="black" scale={1}>

      <App />

  </Debug>
  </Physics>
    </Suspense>
    </Canvas>
    <Loader/>
  </React.StrictMode>
);


// https://dimapatsaraniuk.artstation.com/