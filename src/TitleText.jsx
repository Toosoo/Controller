import { useGSAP } from "@gsap/react";
import { Center, Edges, Outlines, PivotControls, Text3D, useVideoTexture } from "@react-three/drei";
import { RigidBody, useFixedJoint } from "@react-three/rapier";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";


export function TitleText() {
 

  const bodyA = useRef()
  const bodyB = useRef()



  useEffect(() => {
  
   

  }, []);

  const clicked = (e)=>{
    bodyA.current.applyImpulse({ x: 5, y: 10, z: 0 }, true)
    console.log(e)
  }


  const config = {
    font: "./PR.json",
    curveSegments: 50,
    bevelEnabled: true,
    bevelSize: 0.02,
    bevelThickness: 0.05,
    receiveShadow: true,
    castShadow: true,
  }

  // const joint = useFixedJoint(bodyA, bodyB, [

  //   [0, 0, 0],
  
  //   [0, 0, 0, 1],
  
  //   [0, 0, 0],

  //   [0, 0, 0, 1]
  // ]);
 
  return (
    
    <group  position={[-5, 5, 0]} >


    <RigidBody ref={bodyA} >
      <Text3D  {...config}  size={1.8} onClick={clicked}>
        C
        <meshBasicMaterial color={"#000"} />
        <Edges color={"#ffff8d"} />
      </Text3D>
   </RigidBody>




    
   <RigidBody  >

      <Text3D  {...config} position={[2.5, 0, 2.2]} size={1.5} ref={bodyB}>
        a
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} threshold={20} />
      </Text3D>


      </RigidBody>

      <RigidBody>
      <Text3D {...config} position={[3.5, 0, 1.8]} size={1.5}>
        N
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} />
      </Text3D>
      </RigidBody>
  


      <RigidBody  >
      <Text3D {...config} position={[4.1, 0, -2]} size={3}>
        N
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} />
      </Text3D>
      </RigidBody> 

      <RigidBody >
      <Text3D {...config} position={[5.5, 0, 1]} size={1}>
        o
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} />
      </Text3D>
      </RigidBody>

       <RigidBody  >
      <Text3D {...config} position={[7, 0, 1]} size={1.5}>
        N
        <meshBasicMaterial color={"black"} />
        <Edges color={"#ffff8d"} />
      </Text3D>
      </RigidBody> 
    </group>
  );
}
