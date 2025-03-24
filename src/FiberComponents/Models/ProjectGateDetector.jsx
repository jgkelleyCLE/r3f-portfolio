import { CuboidCollider, RigidBody } from '@react-three/rapier'
import React from 'react'

const ProjectGateDetector = ({ position }) => {
  return (
    <RigidBody type="fixed" colliders={false} sensor name="projectGate" position={position} >
            <CuboidCollider args={[2.5, 3, 1]} />
        </RigidBody>
  )
}

export default ProjectGateDetector