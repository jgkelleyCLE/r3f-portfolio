import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function SmallRedTile({props, position, rotation}) {
  const { nodes, materials } = useGLTF('/models/Items/tileSmall_teamRed.glb')
  return (
    <group {...props} dispose={null}>
        <RigidBody type="fixed" name="ground" colliders={"cuboid"} position={position} rotation={rotation}>
      <mesh castShadow receiveShadow geometry={nodes.Cube1637.geometry} material={materials.Red} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube1637_1.geometry}
        material={materials.Metal}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/tileSmall_teamRed.gltf.glb')
