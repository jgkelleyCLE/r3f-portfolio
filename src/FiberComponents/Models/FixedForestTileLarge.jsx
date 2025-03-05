
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function FixedForestTileLarge({props, position, rotation}) {
  const { nodes, materials } = useGLTF('models/Items/tileLarge_forest.glb')
  return (
    <group {...props} dispose={null} position={position} rotation={rotation}>
         <RigidBody type="fixed" name="desertTile" colliders={"cuboid"}>
      <mesh
        // castShadow
        receiveShadow
        geometry={nodes.Cube1605.geometry}
        material={materials.Green}
      />
      <mesh
        // castShadow
        receiveShadow
        geometry={nodes.Cube1605_1.geometry}
        material={materials.BrownDark}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/tileLarge_forest.gltf.glb')