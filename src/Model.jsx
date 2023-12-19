import React, { useRef } from "react";
import { Edges, Outlines, PivotControls, PresentationControls, useGLTF } from "@react-three/drei";
import { Depth, Fresnel, LayerMaterial } from "lamina";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";


export function Model(props) {
  const { nodes, materials } = useGLTF("/untitled.glb");
  
  return (
    <RigidBody >
    <PresentationControls
      global={false}
      cursor={true}
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      rotation={[0, -0.8, 0]}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >

        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} position={[0, 3, 0]} scale={0.25}>
          <LayerMaterial toneMapped={false}>
            <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * 0.1} far={0.5} origin={[0, 0, 0]} />
            <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * 0.2} far={2} origin={[0, 1, 1]} />
            <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 5} far={3} origin={[0, 1, -1]} />
            <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
          </LayerMaterial>
          <Edges color="black" />
        </mesh>
   

   
  
     </PresentationControls> 
        </RigidBody>
  );
}

useGLTF.preload("/untitled.glb");
