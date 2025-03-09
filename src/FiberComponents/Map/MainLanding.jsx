import { RigidBody } from '@react-three/rapier'
import React from 'react'
import AboutRoute from './AboutRoute'
import { MeshReflectorMaterial, Text3D, Float } from '@react-three/drei'
import ProjectRoute from './ProjectRoute'
import { YellowGate } from '../Models/YellowGate'
import * as THREE from 'three'
import { FixedForestTileLarge } from '../Models/FixedForestTileLarge'
import { FixedDesertTileLarge } from '../Models/FixedDesertTileLarge'
import TeleportDetector from '../Models/TeleportDetector'
import { FixedRedTileLarge } from '../Models/FixedRedTileLarge'
import ChallengeRoute from './ChallengeRoute'
import ContactRoute from './ContactRoute'

const MainLanding = () => {
  return (
    <>
    <RigidBody type="fixed" name="ground" colliders={"cuboid"}>

    <FixedForestTileLarge position={[0, -1.5, -3]} rotation={[0, 0, 0]} />
    <FixedForestTileLarge position={[6, -1.5, -3]} rotation={[0, 0, 0]} />
    <FixedForestTileLarge position={[0, -1.5, -9]} rotation={[0, 0, 0]} />
    <FixedForestTileLarge position={[6, -1.5, -9]} rotation={[0, 0, 0]} />

    <FixedDesertTileLarge position={[0, -1.5, 3]} rotation={[0, 0, 0]} />
    <FixedDesertTileLarge position={[6, -1.5, 3]} rotation={[0, 0, 0]} />
    <FixedDesertTileLarge position={[0, -1.5, 9]} rotation={[0, 0, 0]} />
    <FixedDesertTileLarge position={[6, -1.5, 9]} rotation={[0, 0, 0]} />


    <FixedRedTileLarge position={[-6, -1.5, 3]} rotation={[0, 0, 0]} />
    <FixedRedTileLarge position={[-6, -1.5, -3]} rotation={[0, 0, 0]} />
    <FixedRedTileLarge position={[-6, -1.5, -9]} rotation={[0, 0, 0]} />
    <FixedRedTileLarge position={[-6, -1.5, 9]} rotation={[0, 0, 0]} />

    </RigidBody>


    <Text3D
      castShadow
      font="/fonts/helvetiker_regular.typeface.json" 
      lineHeight={0.25} 
      size={0.4} // Increased from 0.25 to 0.5
      position={[8, 2.55, 5.9]} 
      rotation={[0, THREE.MathUtils.degToRad(-90), 0]} 
      color="black"
    >
      About Me
    </Text3D>
    <YellowGate position={[8, -1, 7]} bloomPosition={[8, 0.5, 7]} rotation={[0, THREE.MathUtils.degToRad(90), 0]} name="teleport_main_about" />
    <TeleportDetector name="about_detector" position={[8.25, 0, 7]} rotation={[0, THREE.MathUtils.degToRad(90), 0]} />


      <Text3D 
        font="/fonts/helvetiker_regular.typeface.json" 
        lineHeight={0.25} 
        size={0.4} // Increased from 0.25 to 0.5
        position={[8, 2.55, -8]} 
        rotation={[0, THREE.MathUtils.degToRad(-90), 0]} 
        color="black"
    >
      Projects
    </Text3D>
    <YellowGate position={[8, -1, -7]} bloomPosition={[8, 0.5, -7]} rotation={[0, THREE.MathUtils.degToRad(90), 0]} />
    <TeleportDetector name="projects_detector" position={[8.25, 0, -7]} rotation={[0, THREE.MathUtils.degToRad(90), 0]} />

    
    <ContactRoute />
    <ChallengeRoute />
    <ProjectRoute />
    <AboutRoute />
    </>
  )
}

export default MainLanding