import React from 'react'
import { FixedYellowTileLarge } from '../Models/FixedYellowTileLarge'
import { Float, Text3D } from '@react-three/drei'
import * as THREE from 'three'
import { RedGate } from '../Models/RedGate'
import ContactGateDetector from '../Models/ContactGateDetector'

const ContactRoute = () => {
  return (
    <>
    
            {/* PATH OUT */}
            <FixedYellowTileLarge position={[12, -1.5, 0]} rotation={[0, 0, 0]} />
            <FixedYellowTileLarge position={[18, -1.5, 0]} rotation={[0, 0, 0]} />
            <FixedYellowTileLarge position={[24, -1.5, 0]} rotation={[0, 0, 0]} />


            {/* FINAL PLATFORM */}
            <FixedYellowTileLarge position={[30, -1.5, 0]} rotation={[0, 0, 0]} />
            <FixedYellowTileLarge position={[30, -1.5, -6]} rotation={[0, 0, 0]} />
            <FixedYellowTileLarge position={[30, -1.5, 6]} rotation={[0, 0, 0]} />
            <FixedYellowTileLarge position={[36, -1.5, 0]} rotation={[0, 0, 0]} />
            <FixedYellowTileLarge position={[36, -1.5, -6]} rotation={[0, 0, 0]} />
            <FixedYellowTileLarge position={[36, -1.5, 6]} rotation={[0, 0, 0]} />


            <RedGate position={[37, -1, 0]} rotation={[0, THREE.MathUtils.degToRad(90), 0]} />

            <ContactGateDetector position={[37, 0, 0]} rotation={[0, THREE.MathUtils.degToRad(90), 0]} />
            
                <Text3D 
                    font="/fonts/helvetiker_regular.typeface.json" 
                    lineHeight={0.25} 
                    size={1.5}
                    position={[37, 4, -5.5]} 
                    rotation={[0, THREE.MathUtils.degToRad(-90), 0]} 
                    color={['#f0db4f', '#f0db4f', '#f0db4f']}
                >
                  Contact Me
                </Text3D>
            
    
    </>
  )
}

export default ContactRoute