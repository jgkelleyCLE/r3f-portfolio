import { CuboidCollider, RigidBody } from '@react-three/rapier'
import React from 'react'
import * as THREE from 'three'

const TeleportDetector = ({ name, position, rotation }) => {
  return (
    <RigidBody type="fixed" colliders={false} sensor name={name} position={position} rotation={rotation} >
        <CuboidCollider args={[1, 2, 0.5]}  />
    </RigidBody>
  )
}

export default TeleportDetector