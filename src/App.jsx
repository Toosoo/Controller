import { AccumulativeShadows, Center, Environment, Float, MeshReflectorMaterial, OrbitControls, PivotControls, PresentationControls, RandomizedLight } from "@react-three/drei";
import "./App.css";
import { Model } from "./Model";
import { TitleText } from "./TitleText";

export default function App() {
  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <Environment preset="night" blur={100}/>
    <ambientLight intensity={10} />

      <color attach="background" args={["#F5E000"]} />

      <AccumulativeShadows temporal scale={20} position={[0, -1.5, 0]} opacity={0.2} color="black">
        <RandomizedLight amount={9} position={[3, 6, -5]} />
      </AccumulativeShadows>

      <Center>
        <TitleText />
      </Center>
      <Float>

      <PresentationControls global>

      <Model />
      </PresentationControls>
      </Float>
    </>
  );
}
