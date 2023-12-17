import { AccumulativeShadows, Center, Environment, Float, Instance, Instances, MeshReflectorMaterial, OrbitControls, PivotControls, PresentationControls, RandomizedLight } from "@react-three/drei";
import "./App.css";
import { Model } from "./Model";
import { TitleText } from "./TitleText";
import { RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import  {Rocks}  from "./Rocks";

export default function App() {
  return (
    <>
      <Perf position='top left' />
      <OrbitControls makeDefault />
      <Environment preset="night" blur={100}/>
      <ambientLight intensity={10} />

      <color attach="background" args={["#F5E000"]} />

      <TitleText />

      <Model />

      <Rocks/>

      <mesh rotation={[-Math.PI/2,0,0]} position={[0,-2,0]}>
        <boxGeometry args={[60,60,2]}/>
        <meshBasicMaterial transparent opacity={.9}/>
      </mesh>

    </>
  );
}
