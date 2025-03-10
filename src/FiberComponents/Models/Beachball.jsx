import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function Beachball({props, position}) {
  const { nodes, materials } = useGLTF('/models/Items/ball.glb')
  return (
    <group {...props} dispose={null} position={position}>
        <RigidBody type="fixed" colliders={"trimesh"} restitution={4} name="ball">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere033.geometry}
        material={materials.White}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere033_1.geometry}
        material={materials.Blue}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere033_2.geometry}
        material={materials.Red}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere033_3.geometry}
        material={materials.Yellow}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/ball.gltf.glb')
