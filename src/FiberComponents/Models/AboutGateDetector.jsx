import { CuboidCollider, RigidBody } from '@react-three/rapier'
import React from 'react'

const AboutGateDetector = ({ position }) => {
  return (
    <RigidBody type="fixed" colliders={false} sensor name="aboutGate" position={position} >
        <CuboidCollider args={[2.5, 3, 0.5]} />
    </RigidBody>
  )
}

export default AboutGateDetector