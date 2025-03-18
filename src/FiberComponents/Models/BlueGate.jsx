import React, { useEffect, useRef } from 'react'
import { useGLTF, useProgress } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function BlueGate({ props, position }) {
  // const { nodes, materials } = useGLTF('models/Items/gateLargeWide_teamBlue.glb')
  const gltf = useLoader(GLTFLoader, '/models/Items/gateLargeWide_teamBlue.glb')
  const { nodes, materials } = gltf

  const { active, progress, errors, item, loaded, total } = useProgress()
  

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
    <group {...props} dispose={null} position={position}>
        <RigidBody type="fixed" name="gate" colliders={'trimesh'}>
      <mesh
      position={[0, 0.5, 0]}
        castShadow
        receiveShadow
        geometry={nodes.gateLargeWide_teamBlue.geometry}
        material={materials.Blue}
      />
      </RigidBody>

        {/* Glowing Box */}
        <mesh ref={glowRef} position={[0, 2, 0]}>
          <boxGeometry args={[3.7, 2.65, 0.25]} />
          {/* <meshBasicMaterial color={[1.5, 1, 4]} toneMapped={false} /> */}
          <meshStandardMaterial 
            color={[5, 2, 1]}
            // color="white"
            intensity={0.5}
                emissive="mediumpurple"
                emissiveIntensity={3} 
                toneMapped={false}  
                />
          <pointLight color="#6f4ee2" intensity={2} distance={12} decay={1} />
        </mesh>

    </group>
    </>
  )
}

useGLTF.preload('/gateLargeWide_teamBlue.gltf.glb')