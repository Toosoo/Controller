import { AccumulativeShadows, Environment, OrbitControls, RandomizedLight, Text3D, Wireframe, useGLTF, useHelper, useVideoTexture } from "@react-three/drei";
import "./App.css";
import { Model } from "./Model";
import { TitleText } from "./TitleText";
import { InstancedRigidBodies, Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

export default function App() {
  const [sound] = useState(new Audio("/hit.mp3"));
  const [active, setActive] = useState(true);
  const light = useRef()
  useHelper(light,THREE.DirectionalLightHelper,1)
  const instancesCount = 1000
  const instances = useMemo(()=>{

    const instances = []

    for(let i = 0; i<instancesCount ; i++) {
      instances.push({
        key:'instance' + i,
        position:[
        (Math.random()- .5) * 8,
          6+i*.2,
          (Math.random()- .5) * 8
         ],
        rotation:[0,0,0]
      })
    }

    return instances


  },[])

  const switcher = () => {
    setActive(false);
  };

  const hitSound = () => {
    sound.currentTime = 0;
    sound.volume = Math.random();
    sound.play();
  };
  const { nodes, materials } = useGLTF("/untitled.glb");

  window.addEventListener("click", switcher);
  return (
    <Physics  paused={active}>
      <Perf position="top left" />
      {/* <OrbitControls makeDefault /> */}
      <Environment preset="night" blur={100} />

     
      <directionalLight position={[9, 10, 9]} castShadow shadow-mapSize={[2048, 2048]} scale={10}  />

      <ambientLight   intensity={.5} />


      <color attach="background" args={["#F5E000"]} />


  


      <group position={[0, 1, 0]}>
        <TitleText />
        <Model />


    <InstancedRigidBodies restitution={.5} instances={instances} position={[0,5,0]}>
      <instancedMesh  args={[null,null,instancesCount]} castShadow>
    <sphereGeometry args={[.2]}/>
    <meshBasicMaterial color='#282828'/> 
      </instancedMesh>
    </InstancedRigidBodies>




       
       
        {/*  floor */}
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[20, 20, 10, 20]} />

            <Wireframe simplify={true} fillOpacity={0} stroke={"#000"} fillMix={1} thickness={0.03} />
          </mesh> 
        <RigidBody type="fixed" friction={0} onCollisionEnter={hitSound}>

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]} receiveShadow>
            <boxGeometry args={[20, 20,2]} />
            <shadowMaterial color="#171717"  opacity={.1}  />
          </mesh> 
        </RigidBody>

        {/* back wall */}
        <RigidBody type="fixed">
          <mesh position={[0, 10, -6.5]} receiveShadow>
            <planeGeometry args={[20, 20, 10, 20]} />
            <Wireframe simplify={true} fillOpacity={0} stroke={"#000"} fillMix={1} thickness={0.04} />
          </mesh>
        </RigidBody> 

        {/* front wall */}
         <RigidBody type="fixed">
          <mesh position={[0, 10, 10]} receiveShadow>
            <planeGeometry args={[20, 20, 10, 20]} />
            
          </mesh>
        </RigidBody> 

        {/* left wall */}

        <RigidBody type="fixed">
          <mesh rotation={[0, 1.59, 0]} position={[-10, 10, 0]} receiveShadow>
            <planeGeometry args={[20, 20, 10, 20]} />
            <Wireframe simplify={true} fillOpacity={0} stroke={"#000"} fillMix={1} thickness={0.04} />
          </mesh>
        </RigidBody> 

        {/* right wall */}
      <RigidBody type="fixed">
          <mesh rotation={[0, -1.59, 0]} position={[10, 5, 0]} receiveShadow>
            <planeGeometry args={[20, 20, 10, 20]} />
            <Wireframe simplify={true} fillOpacity={0} stroke={"#000"} fillMix={1} thickness={0.04} />
          </mesh>
        </RigidBody>
        
      </group>

      
    </Physics>
  );
}
