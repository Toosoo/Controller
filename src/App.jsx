import { AccumulativeShadows, Center, Environment, Float, MeshReflectorMaterial, OrbitControls, PivotControls, PresentationControls, RandomizedLight } from "@react-three/drei";
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

      {/* <AccumulativeShadows temporal scale={20} position={[0, -1.5, 0]} opacity={0.2} color="black">
        <RandomizedLight amount={9} position={[3, 6, -5]} />
      </AccumulativeShadows> */}

      
        <TitleText />
     


    
      <Model />



  
{/* 
    <mesh rotation={[-Math.PI/2,0,0]} position={[0,-2,0]} receiveShadow castShadow>
      <planeGeometry args={[20,20,20]} />
      <meshBasicMaterial transparent opacity={0}/>
    </mesh> */}

  

    </>
  );
}
