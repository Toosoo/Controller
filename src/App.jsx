import { AccumulativeShadows, Center, Environment, Float, Instance, Instances, MeshReflectorMaterial, OrbitControls, PivotControls, PresentationControls, RandomizedLight } from "@react-three/drei";
import "./App.css";
import { Model } from "./Model";
import { TitleText } from "./TitleText";
import { RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";


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

     <RigidBody type="fixed" colliders='cuboid' position={[0,-6.5,0]}>


      <mesh  >
        <boxGeometry args={[60,10,60]}/>
        <meshBasicMaterial transparent opacity={.9}/>
      </mesh>

     </RigidBody>
    </>
  );
}
