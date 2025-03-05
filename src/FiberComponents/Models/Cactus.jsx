import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function Cactus({props, position}) {
  const { nodes, materials } = useGLTF('models/Items/tree_desert.glb')
  return (
    <group {...props} dispose={null} position={position}>
      <RigidBody type="fixed" name="cactus" colliders={"trimesh"} restitution={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree_desert.geometry}
        material={materials.GreenDark}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/tree_desert.gltf.glb')