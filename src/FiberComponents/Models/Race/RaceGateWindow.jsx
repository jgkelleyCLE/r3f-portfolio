
import React from 'react'

const RaceGateWindow = ({ position, color, rotation }) => {
  return (
        <mesh position={position} rotation={rotation}>
            <boxGeometry args={[3.8, 2.9, 0.25]} />
            <meshStandardMaterial color={color} transparent doubleSide opacity={0.5} />
          </mesh>
  )
}

export default RaceGateWindow