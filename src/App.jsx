import { AccumulativeShadows, Center, Environment, Float, Instance, Instances, MeshReflectorMaterial, OrbitControls, PivotControls, PresentationControls, RandomizedLight } from "@react-three/drei";
import "./App.css";
import { Model } from "./Model";
import { TitleText } from "./TitleText";
import { RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { Rock } from "./Rock";

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

   {/* 
    <mesh rotation={[-Math.PI/2,0,0]} position={[0,-2,0]} receiveShadow castShadow>
      <planeGeometry args={[20,20,20]} />
      <meshBasicMaterial transparent opacity={0}/>
    </mesh> */}

    


    {/* <Instances
      limit={10} 
      range={10} 
    >

    <Rock/>

       <Instance
    color="red"
    scale={2}
    position={[1, 2, 3]}
    rotation={[Math.PI / 3, 0, 0]}
     /> 



    </Instances> */}

    </>
  );
}
