import { useGSAP } from "@gsap/react";
import { Center, Edges, Outlines, PivotControls, Text3D, useVideoTexture } from "@react-three/drei";
import { RigidBody, useFixedJoint } from "@react-three/rapier";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export function TitleText() {
  const bodyA = useRef();
  const bodyB = useRef();

  useEffect(() => {}, []);

  const clicked = (e) => {
    bodyA.current.applyImpulse({ x: 5, y: 10, z: 0 }, true);
    console.log(e);
  };

  const config = {
    font: "./PR.json",
    curveSegments: 50,
    bevelEnabled: true,
    bevelSize: 0.02,
    bevelThickness: 0.05,
    receiveShadow: true,
    castShadow: true,
  };

  const RigidBodyConfig = {
    restitution: 1,
  };
  return (
    <group position={[-5, 4, 0]}>
      <RigidBody {...RigidBodyConfig}>
        <Text3D {...config} size={1.8} onClick={clicked}>
          G
          <meshBasicMaterial color={"#000"} />
          <Edges color={"#ffff8d"} />
        </Text3D>
      </RigidBody>

      <RigidBody {...RigidBodyConfig}>
        <Text3D {...config} position={[2.5, 0, 2.2]} size={1.5} ref={bodyB}>
          R
          <meshBasicMaterial color={"black"} />
          <Edges color={"#ffff8d"} threshold={20} />
        </Text3D>
      </RigidBody>

      <RigidBody {...RigidBodyConfig}>
        <Text3D {...config} position={[3.5, 0, 2]} size={1.5}>
          A
          <meshBasicMaterial color={"black"} />
          <Edges color={"#ffff8d"} />
        </Text3D>
      </RigidBody>

      <RigidBody {...RigidBodyConfig}>
        <Text3D {...config} position={[4.1, 0, -2]} size={3}>
          V
          <meshBasicMaterial color={"black"} />
          <Edges color={"#ffff8d"} />
        </Text3D>
      </RigidBody>

      <RigidBody {...RigidBodyConfig}>
        <Text3D {...config} position={[5.5, 0, 2]} size={1}>
          i
          <meshBasicMaterial color={"black"} />
          <Edges color={"#ffff8d"} />
        </Text3D>
      </RigidBody>

      <RigidBody {...RigidBodyConfig}>
        <Text3D {...config} position={[5.5, 0, 1]} size={1.5}>
          T
          <meshBasicMaterial color={"black"} />
          <Edges color={"#ffff8d"} />
        </Text3D>
      </RigidBody>

      <RigidBody {...RigidBodyConfig}>
        <Text3D {...config} position={[6.3, 0, 2]} size={1.5}>
          y
          <meshBasicMaterial color={"black"} />
          <Edges color={"#ffff8d"} />
        </Text3D>
      </RigidBody>
    </group>
  );
}
