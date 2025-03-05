import { Canvas } from '@react-three/fiber'
import React, { useMemo } from 'react'
import Experience from './FiberComponents/Experience'
import { Physics } from '@react-three/rapier'
import { KeyboardControls, OrbitControls, Stats } from '@react-three/drei'
import * as THREE from 'three'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

export const Controls = {
    forward: "forward",
    back: "back",
    left: "left",
    right: "right",
    jump: "jump",
    sprint: "sprint",
    duck: "duck",
    attack: "attack"
  }

const FiberApp = () => {

    const map = useMemo(() => [
        {name: Controls.forward, keys: ["ArrowUp", "KeyW"]},
        {name: Controls.back, keys: ["ArrowDown", "KeyS"]},
        {name: Controls.left, keys: ["ArrowLeft", "KeyA"]},
        {name: Controls.right, keys: ["ArrowRight", "KeyD"]},
        {name: Controls.jump, keys: ["Space"]},
        {name: Controls.sprint, keys: ["ShiftLeft"]},
        {name: Controls.duck, keys: ["ControlLeft", "KeyC"]},
        {name: Controls.attack, keys: ["KeyF"]},
      ], [])

  return (
    <div className="h-screen bg-black">
        <KeyboardControls map={map}>
        <Canvas 
            camera={{ position: [0, 6, 6], fov: 65 }}
            shadows
        >
            
            {/* <OrbitControls />
            
            <mesh>
                <boxGeometry />
                <meshBasicMaterial color="red" />
            </mesh> */}
           
            {/* <Stats /> */}

            <Physics 
                // debug
            >
                <Experience />
            </Physics>

            <EffectComposer>
            <Bloom
                        intensity={0.8} // Lower intensity
                        luminanceThreshold={1} // Increase threshold
                        luminanceSmoothing={0.7} // Adjust smoothing
                        height={300}
                    />
                </EffectComposer>


        </Canvas>
        </KeyboardControls>
     </div>
  )
}

export default FiberApp