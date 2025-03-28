import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function FixedYellowTileLarge({props, position, rotation}) {
  const { nodes, materials } = useGLTF('/models/Items/tileLarge_teamYellow.glb')
  return (
    <group {...props} dispose={null}>
        <RigidBody type="fixed" name="desertTile" colliders={"cuboid"} position={position} rotation={rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube1608.geometry}
        material={materials.Yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube1608_1.geometry}
        material={materials.Metal}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/tileLarge_teamYellow.gltf.glb')