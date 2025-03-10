import { Mech } from '@/FiberComponents/Characters/Mech/Mech'
import { Orc } from '@/FiberComponents/Characters/Orc/Orc'
import { Robot } from '@/FiberComponents/Characters/Robot/Robot'
import { Cactus } from '@/FiberComponents/Models/Cactus'
import { FixedDesertTileLarge } from '@/FiberComponents/Models/FixedDesertTileLarge'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import React from 'react'
import { useSelector } from 'react-redux'
import * as THREE from 'three'

const ContactCanvas = () => {


    const selectedCharacter = useSelector(state => state.settings.character) 
    

  return (
    <>
        <Canvas 
            className="h-full w-full -mt-3 rounded-md"
            camera={{ position: [0, 0, 2.5], fov: 70 }}
            dpr={[1, 2]} 
            shadows
        >

            <directionalLight castShadow position={[-3, 4, 5]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <OrbitControls
                maxAzimuthAngle={THREE.MathUtils.degToRad(25)}
                minAzimuthAngle={THREE.MathUtils.degToRad(-25)}
                maxPolarAngle={THREE.MathUtils.degToRad(90)}
                minPolarAngle={THREE.MathUtils.degToRad(45)}
                minDistance={2}
                maxDistance={3}
            /> 

            <Physics>
            {
                selectedCharacter === "Robot" ? (
                    
                    <Mech
                    animation="Sit_Floor_Idle"
                    pose={true}
                    position={[0, -0.85, 0]}        
                    rotation={[0, 0, 0]} 
                    />
                ) : (
                <Robot
                    animation="Sit_Floor_Idle" 
                    pose={true}
                    position={[0, -0.85, 0]}        
                    rotation={[0, 0, 0]}
                />
                )
            }


            <FixedDesertTileLarge position={[0, -1.75, -2.7]} rotation={[0, 0, 0]} />

            <Cactus position={[-2, -0.75, -2.75]} rotation={[0, 0, 0]} />
            </Physics>
                          
                        
        </Canvas>
    </>
  )
}

export default ContactCanvas