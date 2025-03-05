import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function StartGate({props, position, rotation}) {
  const { nodes, materials } = useGLTF('models/Items/gateLargeWide_teamYellow.glb')
  return (
    <group {...props} dispose={null}>
        <RigidBody type="fixed" name="gate" colliders={'trimesh'} position={position} rotation={rotation} restitution={0.5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gateLargeWide_teamYellow.geometry}
        material={materials.Yellow}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/gateLargeWide_teamYellow.gltf.glb')