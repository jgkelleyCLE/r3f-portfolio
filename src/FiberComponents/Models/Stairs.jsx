import { Gltf } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import React from 'react'

const Stairs = ({ position }) => {
  return (
    <RigidBody type="fixed" position={position}>
        <Gltf src="/models/Items/stairs_wood.gltf" scale={[1,1,1]}  />
        <mesh>
    <boxGeometry args={[4, 4, 4]} />
    <meshStandardMaterial color="red"  />
  </mesh>
    </RigidBody>
  )
}

export default Stairs