import { Edges, Text3D } from '@react-three/drei'
import React from 'react'

export  function TitleText() {

const config = {
  font:'./PR.json',
  curveSegments:32,
  bevelEnabled:true,
  bevelSize:0.1,
  bevelThickness:0.1,
  receiveShadow:true,
  castShadow:true
}
  return (



    <group >
    <Text3D {...config} position={[1,0,0]} size={1.7}>
     R
     <meshPhongMaterial color={'black'} />
     <Edges color={'#ffff8d'} />
    </Text3D>
    <Text3D {...config} position={[2.5,1,1]} size={1.4}>
     E
     <meshBasicMaterial color={'black'} />
     <Edges color={'#ffff8d'} />

    </Text3D>
    <Text3D {...config} position={[3.5,0,1.4]} size={1.5}>
     A
     <meshBasicMaterial color={'black'} />
     <Edges color={'#ffff8d'} />

    </Text3D>
    <Text3D {...config} position={[5,0,-1]} size={1.5}>
     D
     <meshBasicMaterial color={'black'} />
     <Edges color={'#ffff8d'} />

    </Text3D>
    <Text3D {...config} position={[7,0,0]} size={2.5}>
     Y
     <meshBasicMaterial color={'black'} />
     <Edges color={'#ffff8d'} />

    </Text3D>
    
    </group>


 
  )
}
