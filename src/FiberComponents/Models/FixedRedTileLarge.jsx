import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function FixedRedTileLarge({ props, position, rotation }) {
  const { nodes, materials } = useGLTF('models/Items/tileLarge_teamRed.glb')
  return (
    <group {...props} dispose={null}>
        <RigidBody type="fixed" name="desertTile" colliders={"cuboid"} position={position} rotation={rotation}>
      <mesh castShadow receiveShadow geometry={nodes.Cube1607.geometry} material={materials.Red} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube1607_1.geometry}
        material={materials.Metal}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/tileLarge_teamRed.gltf.glb')