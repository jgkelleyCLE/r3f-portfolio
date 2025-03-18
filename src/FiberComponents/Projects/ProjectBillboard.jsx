import ProjectCard from '@/Components/ProjectCard/ProjectCard'
import { Billboard, Html, Text } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import * as THREE from 'three'

const ProjectBillboard = ({ item, position, rotation, finalPlatRef }) => {


    const [occluders, setOccluders] = useState([])
  
  // Find all mesh children from the finalPlatRef
  useEffect(() => {
    if (finalPlatRef?.current) {
      // Collect all mesh objects for occlusion
      const meshes = []
      finalPlatRef.current.traverse((object) => {
        // Only include mesh objects
        if (object.isMesh) {
          meshes.push(object)
        }
      })
      setOccluders(meshes)
    }
  }, [finalPlatRef])

  return (
    <>
     <Html 
        position={position} 
        transform 
        rotation={rotation} 
        occlude={occluders} // Pass array of meshes instead of the ref
        onOcclude={(visible) => {
          // Optional: Add some behavior when occlusion changes
          console.log('HTML visible:', visible)
        }}
      >
        <div 
          className="bg-white p-4 rounded shadow-lg" 
          style={{ 
            width: "800px", 
            maxHeight: "600px", 
            overflow: "auto",
            opacity: 0.95 // Slightly transparent to see occlusion effect better
          }}
        >
          <ProjectCard item={item} key={item._id} />
        </div>
      </Html>
    
    </>
  )
}

export default ProjectBillboard