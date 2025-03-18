import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export function RedGate({ props, position, rotation, colliderType }) {
  
  const { nodes, materials } = useGLTF('models/Items/gateLargeWide_teamRed.glb')
  const { scene, camera } = useThree()
  const glowRef = useRef()

  // Set the layers for the glowing box
  useEffect(() => {
    if (glowRef.current) {
      glowRef.current.layers.set(1) // Set the glowing object to layer 1
    }
    camera.layers.enable(1) // Make sure the camera renders layer 1
  }, [camera])

  return (
    <>
      <group {...props} dispose={null} position={position} rotation={rotation}>
        <RigidBody type="fixed" name="gate" colliders={"hull"}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.gateLargeWide_teamRed.geometry}
            material={materials.Red}
          />
        </RigidBody>

        {/* Glowing Box */}
        <mesh ref={glowRef} position={[0, 1, 0]}>
          <boxGeometry args={[3.6, 3.6, 0.25]} />
          {/* <meshBasicMaterial color={[1.5, 1, 4]} toneMapped={false} /> */}
          <meshStandardMaterial 
            color={[5, 2, 1]}
            // color="white"
            intensity={1.5}
                emissive="hotpink"
                emissiveIntensity={3} 
                toneMapped={false}  
                />
          <pointLight color="#6f4ee2" intensity={2} distance={12} decay={1} />
        </mesh>
        
      </group>
    </>
  )
}

useGLTF.preload('/gateLargeWide_teamRed.gltf.glb')




