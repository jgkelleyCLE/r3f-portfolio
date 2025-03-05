import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function PineTree({ props, position }) {
  const { nodes, materials } = useGLTF('models/Items/tree_forest.glb')
  return (
    <group {...props} dispose={null} position={position}>
        <RigidBody type="fixed" name="pineTree" colliders={"trimesh"} restitution={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder067.geometry}
        material={materials.GreenDark}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder067_1.geometry}
        material={materials.BrownDark}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/tree_forest.gltf.glb')