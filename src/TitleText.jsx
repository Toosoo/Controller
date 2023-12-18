import { useGSAP } from "@gsap/react";
import { Edges, Outlines, Text3D } from "@react-three/drei";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export function TitleText() {
  const ref = useRef();

  const config = {
    font: "./PR.json",
    curveSegments: 50,
    bevelEnabled: true,
    bevelSize: 0.02,
    bevelThickness: 0.05,
    receiveShadow: true,
    castShadow: true,
  };

 

  return (

    
    <group ref={ref} position={[-5, -1, 0]} >


      <Text3D {...config} position={[.5, 0, 0]} size={1.8}>
        P
        <meshBasicMaterial color={"#000"} />
        <Edges color={"#ffff8d"} />
      </Text3D>
    
      <Text3D {...config} position={[2.5, 0, 2.2]} size={1.5}>
        L
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} threshold={20} />
      </Text3D>
   
      <Text3D {...config} position={[3.5, 0, 1.4]} size={1.6}>
        A
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} />
      </Text3D>
   

    
      <Text3D {...config} position={[4.1, 0, -2]} size={1.8}>
        Y
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} />
      </Text3D>
    
      <Text3D {...config} position={[5.5, 0, 1]} size={1}>
        e
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} />
      </Text3D>
    
      <Text3D {...config} position={[7, 0, 1]} size={2}>
        R
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} />
      </Text3D>
 
    </group>



  );
}
