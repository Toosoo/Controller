import React, { useRef } from "react";
import { Edges, Outlines, useGLTF } from "@react-three/drei";
import { Depth, Fresnel, LayerMaterial } from "lamina";
import { RigidBody } from "@react-three/rapier";

export function Model(props) {
  const { nodes, materials } = useGLTF("/untitled2.glb");
  return (
    <RigidBody colliders='hull'  rotation={[0,Math.PI,0]}>

    <group {...props} dispose={null}  scale={2}>
        <mesh castShadow receiveShadow geometry={nodes.dsada001.geometry} rotation={[-Math.PI / 2, 0, 0]}>
          <LayerMaterial toneMapped={false}>
            <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * 0.1} far={0.5} origin={[0, 0, 0]} />
            <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * 0.2} far={2} origin={[0, 1, 1]} />
            <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 5} far={3} origin={[0, 1, -1]} />

            <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
          </LayerMaterial>
          <Edges color="black" />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.dsad.geometry} rotation={[-Math.PI / 2, 0, 0]}>
          <LayerMaterial toneMapped={false}>
            <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * 0.1} far={0.5} origin={[0, 0, 0]} />
            <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * 0.2} far={2} origin={[0, 1, 1]} />
            <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 5} far={3} origin={[0, 1, -1]} />

            <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
          </LayerMaterial>
          <Edges color="black" />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.sadasd.geometry} rotation={[-Math.PI / 2, 0, 0]}>
          <LayerMaterial toneMapped={false}>
            <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * 0.1} far={0.5} origin={[0, 0, 0]} />
            <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * 0.2} far={2} origin={[0, 1, 1]} />
            <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 5} far={3} origin={[0, 1, -1]} />

            <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
          </LayerMaterial>
          <Edges color="black" />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.dsadasd.geometry} rotation={[-Math.PI / 2, 0, 0]}>
          <LayerMaterial toneMapped={false}>
            <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * 0.1} far={0.5} origin={[0, 0, 0]} />
            <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * 0.2} far={2} origin={[0, 1, 1]} />
            <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 5} far={3} origin={[0, 1, -1]} />

            <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
          </LayerMaterial>
          <Edges color="black" />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.dsad001.geometry} rotation={[-Math.PI / 2, 0, -0.917]}>
          <LayerMaterial toneMapped={false}>
            <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * 0.1} far={0.5} origin={[0, 0, 0]} />
            <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * 0.2} far={2} origin={[0, 1, 1]} />
            <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 5} far={3} origin={[0, 1, -1]} />

            <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
          </LayerMaterial>
          <Edges color="black" />
        </mesh>
    </group>
    </RigidBody>

  );
}

useGLTF.preload("/untitled2.glb");

