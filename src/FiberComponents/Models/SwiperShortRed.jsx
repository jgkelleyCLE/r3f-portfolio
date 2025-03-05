
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'


export function SwiperShortRed({props, position, rotation}) {

    const swiperRef = useRef()

  const { nodes, materials } = useGLTF('models/Items/swiper_teamRed.glb')

    // useEffect(()=> {
    //         swiperRef.current.setAngvel({x: 0, y: 3, z: 0}, true)
    //     })

    useEffect(() => {
        // Make sure ref is available and only set once on mount
        if (swiperRef.current) {
            // Lock position to prevent movement
            swiperRef.current.lockTranslations()
            // Only allow rotation on Y axis
            swiperRef.current.setAngvel({x: 0, y: 3, z: 0}, true)
        }
            }, []) 

    

  return (
    <group {...props} dispose={null} position={position} >
         <RigidBody type="kinematicVelocity" colliders={"trimesh"} ref={swiperRef}  restitution={5} name="swiper">
            
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder063.geometry}
        material={materials.Brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder063_1.geometry}
        material={materials.Metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder063_2.geometry}
        material={materials.Red}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder063_3.geometry}
        material={materials.White}
      />
      
      </RigidBody>
    </group>
  )
}

// useGLTF.preload('/swiper_teamRed.gltf.glb')
useGLTF.preload('models/Items/swiper_teamRed.glb')