import { CuboidCollider, RigidBody } from '@react-three/rapier'
import React from 'react'

const ProjectDetector = () => {
  return (
    
        <RigidBody type="fixed" colliders={false} sensor name="projects_show" position={[0, 16, -95]} >
            <CuboidCollider args={[30, 6, 40]} />
        </RigidBody>

  )
}

export default ProjectDetector