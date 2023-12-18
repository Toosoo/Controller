import React, { useRef } from "react";
import { Edges, Outlines, useGLTF } from "@react-three/drei";
import { Depth, Fresnel, LayerMaterial } from "lamina";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { useBox,useCylinder,useTrimesh } from "@react-three/cannon";

export function Model(props) {
  const { nodes, materials } = useGLTF("/untitled.glb");
  const [ref, api] = useBox(() => ({ mass: 1 }))
  // useFrame(({ clock }) => api.position.set(Math.sin(clock.getElapsedTime()) * 5, 0, 0))

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} position={[0, -0.25, 0.293]}  scale={0.2}>
        <LayerMaterial toneMapped={false}>
          <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * 0.1} far={0.5} origin={[0, 0, 0]} />
          <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * 0.2} far={2} origin={[0, 1, 1]} />
          <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 5} far={3} origin={[0, 1, -1]} />
          <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
        </LayerMaterial>
        <Edges color="black" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/untitled.glb");
