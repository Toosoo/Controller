import { AccumulativeShadows, Center, Edges, Environment, Float, Instance, Instances, MeshReflectorMaterial, OrbitControls, Outlines, PivotControls, PresentationControls, RandomizedLight, Wireframe } from "@react-three/drei";
import "./App.css";
import { Model } from "./Model";
import { TitleText } from "./TitleText";
import { RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { MeshBasicMaterial } from "three";


export default function App() {
  
  


  return (
    <>
      <Perf position='top left' />
      {/* <OrbitControls makeDefault /> */}
      <Environment preset="night" blur={100}/>
      <ambientLight intensity={10} />

      <color attach="background" args={["#F5E000"]} />
      

<group position={[0,1,0]}>
      <TitleText />

      <Model />
  
   <RigidBody type="fixed" >
      <mesh rotation={[-Math.PI/2,0,0]}   >
      <planeGeometry args={[20,20,10,10]} />
     
      <Wireframe
       simplify={false}
        fillOpacity={0}
        stroke={'#000'}
        fillMix={1}
      />
      </mesh>

      <mesh rotation={[-Math.PI/2,0,0]} position={[0,.1,0]}  receiveShadow >
      <planeGeometry args={[20,10,10,10]} />
      <shadowMaterial color="#171717" transparent opacity={0.3} />
      </mesh>

  </RigidBody> 

   <RigidBody type="fixed" >

      <mesh  position={[0,6,-5]} receiveShadow>
      <planeGeometry args={[20,12,10,10]} />
      <Wireframe
       simplify={false}
        fillOpacity={0}
        stroke={'#000'}
        fillMix={1}
      
    
      />

      </mesh>
  

  </RigidBody> 



  
</group>


    <ambientLight />
    <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
   
    </>
  );
}
