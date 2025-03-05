import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function SwiperRedLong({props, position}) {

    const swiper = useRef()

  const { nodes, materials } = useGLTF('models/Items/swiperLong_teamRed.glb')

    useEffect(()=> {
      swiper.current.setAngvel({x: 0, y: 3, z: 0}, true)
        })

  return (
      <group {...props} dispose={null} position={position}>
      <RigidBody type="kinematicVelocity" colliders={"trimesh"} ref={swiper} restitution={5} name="swiper">
        <group >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder054.geometry}
        material={materials.Brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder054_1.geometry}
        material={materials.Metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder054_2.geometry}
        material={materials.Red}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder054_3.geometry}
        material={materials.White}
      />
      </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('models/Items/swiperLong_teamRed.glb')
