import React, { useRef } from "react";
import { Edges, Outlines, useGLTF } from "@react-three/drei";
import { Depth, Fresnel, LayerMaterial } from "lamina";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/untitled.glb");

  const ref = useRef()



  // useFrame((state) => {
  //   const sin = Math.sin(state.clock.elapsedTime / 2)
  //   const cos = Math.cos(state.clock.elapsedTime / 2)
  //   ref.current.layers[0].origin.set(cos / 2, 0, 0)
  //   ref.current.layers[1].origin.set(cos, sin, cos)
  //   ref.current.layers[2].origin.set(sin, cos, sin)
  //   ref.current.layers[3].origin.set(cos, sin, cos)
  // })


  return (
    <group {...props} dispose={null} rotation={[.4,.5,.3]} position={[0,0,-1.2]}>
      <mesh
        castShadow
        
        geometry={nodes.Object_5.geometry}
        position={[0, -0.25, 0.293]}
        rotation={[0, -1.571, 0]}
        scale={0.25}
      >
      
      <LayerMaterial ref={ref} toneMapped={false}>
        <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * .1} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * .2} far={2} origin={[0, 1, 1]} />
        <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 5} far={3} origin={[0, 1, -1]} />

        <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
      </LayerMaterial>
      <Edges color="black" />
       
      {/* <Outlines color={'#0000ff'} /> */}

      </mesh>
    </group>
  );
}

useGLTF.preload("/untitled.glb");

