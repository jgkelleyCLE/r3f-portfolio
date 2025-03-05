import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function SpikeRoller({props, position}) {
  const { nodes, materials } = useGLTF('/models/Items/spikeRoller.glb')
  return (
    <group {...props} dispose={null}>
        <RigidBody type="fixed" name="spike" colliders={"hull"} position={position} restitution={3}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder048.geometry}
        material={materials.BrownDark}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder048_1.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder048_2.geometry}
        material={materials.Metal}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/spikeRoller.gltf.glb')