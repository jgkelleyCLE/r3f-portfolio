import { CuboidCollider, RigidBody } from '@react-three/rapier'
import React from 'react'

const RaceDetector = ({ position, name, rotation }) => {
  return (
    <RigidBody type="fixed" colliders={false} sensor name={name} position={position} rotation={rotation} >
            <CuboidCollider args={[2.5, 3, 0.5]} />
        </RigidBody>
  )
}

export default RaceDetector