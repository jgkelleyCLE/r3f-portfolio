import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function YellowGate({props, position, bloomPosition, rotation, name}) {
  const { nodes, materials } = useGLTF('models/Items/gateLarge_teamYellow.glb')
  return (
    <group {...props} dispose={null}>
        <RigidBody type="fixed" name={name} colliders={"trimesh"} position={position} restitution={1} rotation={rotation} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gateLarge_teamYellow.geometry}
        material={materials.Yellow}
      />
      </RigidBody>


      <mesh castShadow position={bloomPosition} rotation={rotation}>
             <boxGeometry args={[1.8, 2.7, 0.25]}  />
            
            
            <meshStandardMaterial 
            color={[5, 2, 1]}
            // color="white"
            intensity={0.5}
                emissive="orange"
                emissiveIntensity={3} 
                toneMapped={false}  
                />
                 {/* <meshBasicMaterial color={[1.5, 1, 4]} toneMapped={false} /> */}
                <pointLight 
                    color="#6f4ee2" 
                    intensity={5} 
                    distance={12} 
                    decay={1} 
                />
                
        </mesh>
    </group>
  )
}

useGLTF.preload('/gateLarge_teamYellow.gltf.glb')