import { Gltf, Grid, OrbitControls, PerspectiveCamera, useHelper } from '@react-three/drei'
import React, { useRef } from 'react'
import Map from './Map/Map'
import MageController from './Characters/Mage/MageController'
import WarriorSkeletonController from './Characters/WarriorSkeleton/WarriorSkeletonController'
import { useSelector } from 'react-redux'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { DirectionalLightHelper } from 'three'
import * as THREE from 'three'
import { Perf } from 'r3f-perf'
import RobotController from './Characters/Robot/RobotController'
import PaladinController from './Characters/Paladin/PaladinController'
import MechController from './Characters/Mech/MechController'
import OrcController from './Characters/Orc/OrcController'

const Experience = () => {

  const selectedCharacter = useSelector(state => state.settings.character)

  const shadowCameraRef = useRef()

  // useHelper(shadowCameraRef, THREE.CameraHelper, 5, 'red')


  return (
    <>

        <ambientLight intensity={0.5} />
        <directionalLight  
        position={[-50, 50, 25]} 
        intensity={2.5} 
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        
        >
          <PerspectiveCamera ref={shadowCameraRef} attach={"shadow-camera"} near={25} far={120} fov={120} />
          </directionalLight>
        
        <OrbitControls 
           // minAzimuthAngle={-Math.PI / 8}
          // maxAzimuthAngle={Math.PI / 8}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minDistance={6}
          maxDistance={45}
          // enableZoom={false}
          // enablePan={false}
        />
        
        {/* <Perf /> */}

        {
          selectedCharacter === "Mage" ? <MageController /> : selectedCharacter === "Skeleton" ?  <WarriorSkeletonController /> : selectedCharacter === "Robot" ? <RobotController /> : selectedCharacter === "Paladin" ? <PaladinController /> : selectedCharacter === "Mech Warrior" ? <MechController /> : selectedCharacter === "Orc" ? <OrcController /> :  null
        }

        <Map />


        {/* //RESPAWN DETECTOR */}
        <RigidBody type="fixed" colliders={false} sensor name="space" position-y={-8} >
              <CuboidCollider args={[100, 0.5, 100]} />
        </RigidBody>

       

        <Grid
        position={[0, -1, 0]}
        sectionSize={3}
        sectionColor={"white"}
        sectionThickness={1}
        cellSize={1}
        cellColor={"#ececec"}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={175}
        fadeStrength={8}
      />

    </>
  )
}

export default Experience