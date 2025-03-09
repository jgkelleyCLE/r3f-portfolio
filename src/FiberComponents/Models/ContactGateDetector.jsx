import React from 'react'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

const ContactGateDetector = ({ position, rotation }) => {
  return (
    <RigidBody type="fixed" colliders={false} sensor name="contactGate" position={position}  rotation={rotation}>
        <CuboidCollider args={[2.5, 3, 0.5]} />
    </RigidBody>
  )
}

export default ContactGateDetector