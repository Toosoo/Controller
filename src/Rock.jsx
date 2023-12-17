
import React, { useRef } from "react";
import { Edges, useGLTF } from "@react-three/drei";

export function Rock(props) {
  const { nodes, materials } = useGLTF("/rock.glb");
  return (
    
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
    
      >

        <meshBasicMaterial color={'white'} />
        <Edges/>

        </mesh>
    </group>
  );
}

useGLTF.preload("/rock.glb");
