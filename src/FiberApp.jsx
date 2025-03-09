import { Canvas } from '@react-three/fiber'
import React, { useMemo, useState, useEffect, useRef } from 'react'
import Experience from './FiberComponents/Experience'
import { Physics, RigidBody } from '@react-three/rapier'
import { Grid, KeyboardControls, OrbitControls, Stats } from '@react-three/drei'
import * as THREE from 'three'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import nipplejs from 'nipplejs';

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

  const DEAD_ZONE = 0.035;
const SPRINT_THRESHOLD = 0.9;
const SMOOTHING = 0.1; // Lerp factor (0.1 for smooth, increase for snappier)

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


    //   MOBILE CONTROLS
      const [isJumping, setIsJumping] = useState(false);
  const [movement, setMovement] = useState({ forward: false, back: false, left: false, right: false, sprint: false, jump: false });

 

  useEffect(() => {

    // INITIATE JOYSTICK
    const joystick = nipplejs?.create({
      zone: document.getElementById('joystick-container'),
      mode: 'static',
      position: { left: '50%', bottom: '50px' },
      color: 'white'
    });

    
        // LOWER VALUE MAKES ROTATION SLOWER
      let rotationFactor = 0.0001;

    joystick.on('move', (evt, data) => {
      const { x, y } = data.vector;

      // REVERT HERE
      setMovement({
        forward: y < -0.075,
        back: y > 0.075,
        left: x < -0.05 ? x * rotationFactor : false,
        right: x > 0.05 ? x * rotationFactor : false,
        sprint: y > 0.9,
      });
      
    });

    

    joystick.on('end', () => {
      setMovement({ 
        forward: false, 
        back: false, 
        left: false, 
        right: false, 
        sprint: false 
      });
    });

   

    return () => joystick.destroy();
  }, []);






  return (
    <div className="h-screen bg-black select-none">
        <KeyboardControls map={map}>
        <Canvas 
            camera={{ position: [0, 6, 6], fov: 65 }}
            shadows
        >
            
            {/* <Stats /> */}

            <Physics 
                // debug
            >
                <Experience isJumping={isJumping} setIsJumping={setIsJumping} movement={movement} />
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

        <button className="bg-white/50 select-none p-2 w-20 h-20 border-3 border-accent rounded-full cursor-pointer hover:bg-white text-gray-800 transition duration-300 font-bold" style={{ position: 'absolute', bottom: '90px', right: '30px' }} onPointerDown={() => setIsJumping(true)}>Jump</button>
        <div className="bg-primary select-none" id="joystick-container" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}></div>
        
     </div>
  )
}

export default FiberApp