import { Environment, OrbitControls, Text3D, Wireframe, useVideoTexture } from "@react-three/drei";
import "./App.css";
import { Model } from "./Model";
import { TitleText } from "./TitleText";
import { InstancedRigidBodies, Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { useMemo, useState } from "react";

export default function App() {
  const [sound] = useState(new Audio("/hit.mp3"));
  const [active, setActive] = useState(true);

  const instancesCount = 100
  const instances = useMemo(()=>{

    const instances = []

    for(let i = 0; i<instancesCount ; i++) {
      instances.push({
        key:'instance' + i,
        position:[0,1,0 ],
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

  window.addEventListener("click", switcher);
  return (
    <Physics paused={active}>
      <Perf position="top left" />
      {/* <OrbitControls makeDefault /> */}
      <Environment preset="night" blur={100} />
      <ambientLight intensity={10} />

      <color attach="background" args={["#4e3534"]} />
      <color attach="background" args={["#F5E000"]} />


  


      <group position={[0, 1, 0]}>
        <TitleText />
        <Model />


    <InstancedRigidBodies instances={instances} position={[0,2,0]}>

      <instancedMesh  args={[null,null,instancesCount]} castShadow>
      <sphereGeometry args={[.3]}/>
      <meshBasicMaterial color='black'/>
      </instancedMesh>
    </InstancedRigidBodies>




        <RigidBody type="fixed">
          <mesh rotation={[0, 0, 0]} position={[0, 0, 10]}>
            <planeGeometry args={[20, 20, 10, 20]} />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed">
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 10, 0]}>
            <planeGeometry args={[20, 20, 10, 20]} />
          </mesh>
        </RigidBody>

        {/*  floor */}
        <RigidBody type="fixed" friction={0} onCollisionEnter={hitSound}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[20, 20, 10, 20]} />

            <Wireframe simplify={true} fillOpacity={0} stroke={"#000"} fillMix={1} thickness={0.03} />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]} receiveShadow>
            <planeGeometry args={[20, 10, 10, 10]} />
            <shadowMaterial color="#171717" transparent opacity={0.3} />
          </mesh>
        </RigidBody>

        {/* back wall */}
        <RigidBody type="fixed">
          <mesh position={[0, 10, -5.8]} receiveShadow>
            <planeGeometry args={[20, 20, 10, 20]} />
            <Wireframe simplify={true} fillOpacity={0} stroke={"#000"} fillMix={1} thickness={0.04} />
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
          <mesh rotation={[0, -1.59, 0]} position={[10, 10, 0]} receiveShadow>
            <planeGeometry args={[20, 20, 10, 20]} />
            <Wireframe simplify={true} fillOpacity={0} stroke={"#000"} fillMix={1} thickness={0.04} />
          </mesh>
        </RigidBody>
      </group>

      <ambientLight />
      <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
    </Physics>
  );
}
