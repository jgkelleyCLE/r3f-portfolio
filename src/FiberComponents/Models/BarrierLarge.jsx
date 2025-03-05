import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function BarrierLarge({props, position, rotation}) {
  const { nodes, materials } = useGLTF('/models/Items/barrierLarge.glb')
  return (
    <group {...props} dispose={null}>
        <RigidBody type="fixed" name="barrier" colliders={"trimesh"} position={position} rotation={rotation} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrierLarge.geometry}
        material={materials.Metal}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/barrierLarge.gltf.glb')