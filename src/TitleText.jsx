import { useGSAP } from "@gsap/react";
import { Edges, Outlines, Text3D } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
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
    <group ref={ref} position={[-5, 6, 0]} rotation={[-Math.PI/2,0,0]}>
      <Text3D {...config} position={[.5, 0, 0]} size={1.8}>
        C
        <meshBasicMaterial color={"#000"} />
        <Edges color={"#ffff8d"} />
      </Text3D>

      <Text3D {...config} position={[2.5, 0, 2.2]} size={1.5}>
        A
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} threshold={20} />
      </Text3D>

      <Text3D {...config} position={[3.5, 0, 1.4]} size={1.6}>
        s
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} />
      </Text3D>

      <Text3D {...config} position={[4.5, .5, 0]} size={1.8}>
        T
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} />
      </Text3D>

      <Text3D {...config} position={[6, 0, 0]} size={2.6}>
        L
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} />
      </Text3D>

      <Text3D {...config} position={[7, 0, 1]} size={1}>
        e
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} />
      </Text3D>
    </group>
  );
}
