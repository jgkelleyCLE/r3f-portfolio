

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function MovingDesertTileLarge({props, position, rotation}) {
  const { nodes, materials } = useGLTF('models/tileLarge_desert.glb')
  return (
    <group {...props} dispose={null} position={position} rotation={rotation}>
        {/* <RigidBody type="kinematicPosition" name="desertTile" colliders={"cuboid"}> */}
      <mesh
        // castShadow
        receiveShadow
        geometry={nodes.Cube1604.geometry}
        material={materials.Beige}
      />
      <mesh
        // castShadow
        receiveShadow
        geometry={nodes.Cube1604_1.geometry}
        material={materials.BrownDark}
      />
      {/* </RigidBody> */}
    </group>
  )
}

useGLTF.preload('/tileLarge_desert.gltf.glb')