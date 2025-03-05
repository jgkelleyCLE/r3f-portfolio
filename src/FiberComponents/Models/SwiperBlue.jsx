import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function SwiperBlue({props, position, rotation, swiperSpeed}) {

    const swiper = useRef()

  const { nodes, materials } = useGLTF('models/Items/swiperDouble_teamBlue.glb')

    useEffect(()=> {
    swiper.current.setAngvel({x: 0, y: swiperSpeed, z: 0}, true)
        })

  return (
    <group {...props} dispose={null} position={position} rotation={rotation}>
        <RigidBody type="kinematicVelocity" colliders={"trimesh"} ref={swiper} restitution={5} name="swiper">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder050.geometry}
        material={materials.Brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder050_1.geometry}
        material={materials.Metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder050_2.geometry}
        material={materials.Blue}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder050_3.geometry}
        material={materials.White}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/swiperDouble_teamBlue.gltf.glb')