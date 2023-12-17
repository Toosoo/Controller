import React, { useRef } from "react";
import { Edges, Instance, Instances, useGLTF } from "@react-three/drei";

function Rock(props) {
  
  return <Instance ref={ref} scale={2} />
}

export function Rocks() {
    const { nodes, materials } = useGLTF("/rock.glb");
  const data = [,,,,,,,]

  console.log(data)
    return(
        // <Instances limit={10} range={10}>
        // </Instances>
    <group>

          <mesh castShadow receiveShadow geometry={nodes.Cube.geometry}>
            <meshBasicMaterial color={"white"} />
            <Edges />
          </mesh>

          </group>
    )
}

useGLTF.preload("/rock.glb");
