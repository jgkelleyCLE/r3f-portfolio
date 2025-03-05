
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function SwiperRed({props, position, rotation, swiperSpeed}) {

    const swiper = useRef()

  const { nodes, materials } = useGLTF('models/Items/swiperDouble_teamRed.glb')

    useEffect(()=> {
        swiper.current.setAngvel({x: 0, y: swiperSpeed, z: 0}, true)
    })

  return (
    <group {...props} dispose={null} position={position} rotation={rotation}>
        <RigidBody type="kinematicVelocity" colliders={"trimesh"} ref={swiper} restitution={5} name="swiper">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder051.geometry}
        material={materials.Brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder051_1.geometry}
        material={materials.Metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder051_2.geometry}
        material={materials.Red}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder051_3.geometry}
        material={materials.White}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/swiperDouble_teamRed.gltf.glb')