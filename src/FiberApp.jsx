import { Canvas } from '@react-three/fiber';
import React, { useMemo, useState, useEffect, useRef, Suspense } from 'react';
import Experience from './FiberComponents/Experience';
import { Physics } from '@react-three/rapier';
import { KeyboardControls } from '@react-three/drei';
import * as THREE from 'three';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import nipplejs from 'nipplejs';
import { useSelector } from 'react-redux';
import CanvasLoader from './FiberComponents/CanvasLoader';

export const Controls = {
  forward: 'forward',
  back: 'back',
  left: 'left',
  right: 'right',
  jump: 'jump',
  sprint: 'sprint',
  duck: 'duck',
  attack: 'attack',
};

const FiberApp = () => {
  useEffect(() => {
    document.title = 'Jack Kelley | Sandbox';
  }, []);

  const showControls = useSelector((state) => state.settings.controls);

  const [isTouch, setIsTouch] = useState(false);
  const joystickRef = useRef(null);

  // Detect touch devices
  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setIsTouch(mediaQuery.matches);
  }, []);

  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
      { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
      { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
      { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
      { name: Controls.jump, keys: ['Space'] },
      { name: Controls.sprint, keys: ['ShiftLeft'] },
      { name: Controls.duck, keys: ['ControlLeft', 'KeyC'] },
      { name: Controls.attack, keys: ['KeyF'] },
    ],
    []
  );

  //   MOBILE CONTROLS
  const [isJumping, setIsJumping] = useState(false);
  const [movement, setMovement] = useState({
    forward: false,
    back: false,
    left: false,
    right: false,
    sprint: false,
    jump: false,
  });

  // useEffect(() => {

  //   // INITIATE JOYSTICK
  //   const joystick = nipplejs?.create({
  //     zone: document.getElementById('joystick-container'),
  //     mode: 'static',
  //     position: { left: '50%', bottom: '50px' },
  //     color: 'white'
  //   });

  //       // LOWER VALUE MAKES ROTATION SLOWER
  //     let rotationFactor = 0.0001;

  //   joystick.on('move', (evt, data) => {
  //     const { x, y } = data.vector;

  //     // REVERT HERE
  //     setMovement({
  //       forward: y < -0.075,
  //       back: y > 0.075,
  //       left: x < -0.28,
  //       right: x > 0.28,
  //       sprint: y > 0.9,
  //     });

  //   });

  //   joystick.on('end', () => {
  //     setMovement({
  //       forward: false,
  //       back: false,
  //       left: false,
  //       right: false,
  //       sprint: false
  //     });
  //   });

  //   return () => joystick.destroy();
  // }, []);

  useEffect(() => {
    // Only initialize if touch device
    if (!isTouch) return;

    // Use a small delay to ensure the DOM is ready
    const timer = setTimeout(() => {
      const joystickContainer = document.getElementById('joystick-container');

      // Only create joystick if the container exists
      if (joystickContainer) {
        // Clean up previous instance if exists
        if (joystickRef.current) {
          joystickRef.current.destroy();
        }

        // Create new joystick
        joystickRef.current = nipplejs.create({
          zone: joystickContainer,
          mode: 'static',
          position: { left: '50%', bottom: '50px' },
          color: 'white',
        });

        // Setup event handlers
        joystickRef.current.on('move', (evt, data) => {
          const { x, y } = data.vector;

          setMovement({
            forward: y < -0.075,
            back: y > 0.075,
            left: x < -0.28,
            right: x > 0.28,
            sprint: y > 0.9,
          });
        });

        joystickRef.current.on('end', () => {
          setMovement({
            forward: false,
            back: false,
            left: false,
            right: false,
            sprint: false,
          });
        });
      }
    }, 100); // Small delay to ensure DOM is ready

    // Clean up
    return () => {
      clearTimeout(timer);
      if (joystickRef.current) {
        joystickRef.current.destroy();
        joystickRef.current = null;
      }
    };
  }, [isTouch]); // Re-run when isTouch changes

  return (
    <div className="h-screen bg-black select-none">
      {/* <Loader /> */}
      <KeyboardControls map={map}>
        <Canvas camera={{ position: [0, 6, 6], fov: 65 }} shadows>
          {/* <Stats /> */}

          <Physics
          // debug
          >
            <Suspense fallback={<CanvasLoader />}>
              <Experience isJumping={isJumping} setIsJumping={setIsJumping} movement={movement} />
            </Suspense>
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

      {isTouch ? (
        <>
          <button
            className="bg-white/50 select-none p-2 w-24 h-24 border-3 border-accent rounded-full cursor-pointer hover:bg-white text-gray-800 transition duration-300 font-bold"
            style={{ position: 'absolute', bottom: '80px', right: '30px' }}
            onPointerDown={() => setIsJumping(true)}
          >
            Jump
          </button>
          <div
            className="bg-primary select-none"
            id="joystick-container"
            style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}
          ></div>
        </>
      ) : !isTouch && showControls ? (
        <div className=" items-center justify-center hidden md:flex select-none pointer-events-none">
          <img src="/keyboardMap.png" alt="keyboard" className="absolute bottom-16 z-40 w-1/5" />
        </div>
      ) : null}
    </div>
  );
};

export default FiberApp;
