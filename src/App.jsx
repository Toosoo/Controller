import { AccumulativeShadows, Center, Environment, Float, Instance, Instances, MeshReflectorMaterial, OrbitControls, PivotControls, PresentationControls, RandomizedLight } from "@react-three/drei";
import "./App.css";
import { Model } from "./Model";
import { TitleText } from "./TitleText";
import { RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { useBox, usePlane } from "@react-three/cannon";


export default function App() {
  
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0],position:[0,-1,0]}))


  return (
    <>
      <Perf position='top left' />
      {/* <OrbitControls makeDefault /> */}
      <Environment preset="night" blur={100}/>
      <ambientLight intensity={10} />

      {/* <color attach="background" args={["#F5E000"]} /> */}
      <color attach="background" args={["#000"]} />

      <TitleText />

  
      <Model />
  
    

      
      <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100,100]} />
      <shadowMaterial color="#171717" transparent opacity={0.3} />
      
      </mesh>



    <ambientLight />
    <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
   
    </>
  );
}
