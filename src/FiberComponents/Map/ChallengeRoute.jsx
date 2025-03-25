import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { FixedRedTileLarge } from '../Models/FixedRedTileLarge';
import { SpikeRoller } from '../Models/SpikeRoller';
import { StartGate } from '../Models/StartGate';
import { Text3D } from '@react-three/drei';
import { useDispatch, useSelector } from 'react-redux';
import { RigidBody } from '@react-three/rapier';
import { startTimer } from '@/redux/gateSlice';
import RaceDetector from '../Models/RaceDetector';
import Timer from '../Timer';
import RaceGateWindow from '../Models/Race/RaceGateWindow';
import { SmallRedTile } from '../Models/SmallRedTile';
// import { BarrierLarge } from '../Models/BarrierLarge'
// import { YellowSwiper } from '../Models/YellowSwiper'
import { useFrame } from '@react-three/fiber';
import { MovingRedTileLarge } from '../Models/MovingRedTileLarge';
import { BarrierLarge } from '../Models/BarrierLarge';
import { YellowSwiper } from '../Models/YellowSwiper';
import { Beachball } from '../Models/Beachball';

const ChallengeRoute = () => {
  const lowGravity = useSelector((state) => state.settings.lowGravity);

  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const [direction, setDirection] = useState(1);
  const [direction2, setDirection2] = useState(-1);
  const [direction3, setDirection3] = useState(-1);

  const dispatch = useDispatch();
  const timerStarted = useSelector((state) => state.gate.startTimer);
  const startTriggerRef = useRef();

  // Create a function to handle collisions with the start gate
  const onStartCollision = (event) => {
    // Check if collision is with the player
    if (event.colliderObject.name === 'player' && !timerStarted) {
      // Start the timer only if it's not already running
      dispatch(startTimer(true));
    }
  };

  useFrame(({ clock }) => {
    // First platform animation
    if (ref.current) {
      const speed = 3;
      const range = 6;
      const position = ref.current.translation();
      const nextX = position.x + direction * speed * 0.02;

      if (Math.abs(nextX) > range) {
        setDirection((prev) => -prev);
      }

      // Use setNextKinematicTranslation instead of setTranslation
      ref.current.setNextKinematicTranslation({
        x: nextX,
        y: position.y,
        z: position.z,
      });
    }

    // Second platform animation - opposite direction
    if (ref2.current) {
      const speed = 4;
      const range = 2; // Range for upward movement
      const basePosition = 5.5;
      const position = ref2.current.translation();
      const nextY = position.y + direction * speed * 0.02;

      // Change direction if below base position or above max height
      if (nextY < basePosition) {
        // Force direction to be positive (upward) if below base
        setDirection2(1);
        // Force position to be at least the base position
        ref2.current.setNextKinematicTranslation({
          x: position.x,
          y: basePosition,
          z: position.z,
        });
      } else if (nextY > basePosition + range) {
        // Only reverse direction when we hit the upper limit
        setDirection2(-1);
        ref2.current.setNextKinematicTranslation({
          x: position.x,
          y: nextY,
          z: position.z,
        });
      } else {
        // Normal movement within acceptable range
        ref2.current.setNextKinematicTranslation({
          x: position.x,
          y: nextY,
          z: position.z,
        });
      }
    }

    if (ref3.current) {
      const speed = 3;
      const range = 6;
      const position = ref3.current.translation();
      const nextX = position.x + direction * speed * 0.02;

      if (Math.abs(nextX) > range) {
        setDirection3((prev) => -prev);
      }

      // Use setNextKinematicTranslation instead of setTranslation
      ref3.current.setNextKinematicTranslation({
        x: nextX,
        y: position.y,
        z: position.z,
      });
    }
  });

  return (
    <>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        lineHeight={0.25}
        position={[-16, 2.5, -5]}
        rotation={[0, THREE.MathUtils.degToRad(30), 0]}
        color="black"
      >
        {'<'}&mdash; Challenge
      </Text3D>

      {/* Invisible collision sensor for starting the timer */}
      <RigidBody
        type="fixed"
        sensor
        ref={startTriggerRef}
        position={[-8.5, 0, 0]}
        name="start_trigger"
        onIntersectionEnter={onStartCollision}
      >
        <mesh visible={false}>
          <boxGeometry args={[3, 4, 1]} />
        </mesh>
      </RigidBody>

      {/* START GATE */}
      <StartGate position={[-8.5, -1, 0]} rotation={[0, THREE.MathUtils.degToRad(-90), 0]} />

      {lowGravity ? null : (
        <>
          <RaceDetector position={[-9, -1, 0]} name="start_trigger" rotation={[0, THREE.MathUtils.degToRad(-90), 0]} />
          <RaceGateWindow position={[-8.5, 0.35, 0]} color="blue" rotation={[0, THREE.MathUtils.degToRad(-90), 0]} />
        </>
      )}

      {/* END GATE */}
      <StartGate position={[-32, 16.5, 0]} rotation={[0, THREE.MathUtils.degToRad(-90), 0]} />

      <FixedRedTileLarge position={[-32, 15.5, 0]} rotation={[0, 0, 0]} />

      {lowGravity ? null : (
        <>
          <RaceDetector position={[-32, 19, 0]} name="end_trigger" rotation={[0, THREE.MathUtils.degToRad(-90), 0]} />
          <RaceGateWindow position={[-32, 17.8, 0]} color="blue" rotation={[0, THREE.MathUtils.degToRad(-90), 0]} />
        </>
      )}

      {/* END GATE */}

      <FixedRedTileLarge position={[-17, -1.5, 0]} rotation={[0, 0, 0]} />

      {/* <YellowSwiper position={[-25.5, -1.7, 3.1]} rotation={[0, 0, 0]} swiperSpeed={1} /> */}
      {/* <YellowSwiper position={[-25.5, -1.7, -3.1]} rotation={[0, 0, 0]} swiperSpeed={4} /> */}

      {/* <SmallRedTile position={[-40.5, -1.5, 0]} rotation={[0, 0, 0]} /> */}
      {/* <SmallRedTile position={[-41.5, -1.5, 0]} rotation={[0, 0, 0]} />
        <SmallRedTile position={[-45.5, -1.5, 0]} rotation={[0, 0, 0]} /> */}

      <FixedRedTileLarge position={[-43.5, -2, 0]} rotation={[0, 0, 0]} />
      <YellowSwiper position={[-43.5, -1, 0]} rotation={[0, 0, 0]} swiperSpeed={3} />

      <FixedRedTileLarge position={[-43.5, -2, -8.5]} rotation={[0, 0, 0]} />
      <YellowSwiper position={[-43.5, -1, -8.5]} rotation={[0, 0, 0]} swiperSpeed={2} />

      <FixedRedTileLarge position={[-51.5, -2, -8.5]} rotation={[0, 0, 0]} />
      <YellowSwiper position={[-51.5, -1, -8.5]} rotation={[0, 0, 0]} swiperSpeed={3} />

      <FixedRedTileLarge position={[-58.5, -1.5, -8.5]} rotation={[0, 0, 0]} />

      <YellowSwiper position={[-58.5, -1, -8.5]} rotation={[0, 0, 0]} swiperSpeed={-2} />

      <FixedRedTileLarge position={[-58.5, -1, -1.5]} rotation={[0, 0, 0]} />

      {/* DOUBLE PLATFORM */}
      <YellowSwiper position={[-62, 0, -1.5]} rotation={[0, 0, 0]} swiperSpeed={-3} />
      <YellowSwiper position={[-55.5, 0, -1.5]} rotation={[0, 0, 0]} swiperSpeed={1} />

      {/* FINAL STEPS */}
      <FixedRedTileLarge position={[-58.5, -0.5, 5.5]} rotation={[0, 0, 0]} />
      <FixedRedTileLarge position={[-52.5, 0, 5.5]} rotation={[0, 0, 0]} />
      <Beachball position={[-52.5, 0.5, 5.5]} />

      {/* UPLIFT */}
      {/* <YellowSwiper position={[-48.5, 4, 2]} rotation={[0, 0, 0]} swiperSpeed={2} /> */}
      {/* <YellowSwiper position={[-56.5, 4, 2]} rotation={[0, 0, 0]} swiperSpeed={2} /> */}

      {/* ALONG LAST MOVING BLOCK */}
      {/* <YellowSwiper position={[-48.5, 16, 5]} rotation={[0, 0, 0]} swiperSpeed={2} /> */}
      {/* <YellowSwiper position={[-44.5, 17, -4]} rotation={[0, 0, 0]} swiperSpeed={3} /> */}
      <SpikeRoller position={[-8.5, -0.5, -3.25]} />
      <SpikeRoller position={[-8.5, -0.5, -5.25]} />

      <SpikeRoller position={[-8.5, -0.5, 3.25]} />
      <SpikeRoller position={[-8.5, -0.5, 5.25]} />

      <SpikeRoller position={[-18.5, -0.5, 2]} />
      <SpikeRoller position={[-15.5, -0.5, -2]} />

      {/* First moving platform */}
      <RigidBody type="kinematicPosition" name="desertTile" ref={ref}>
        <MovingRedTileLarge position={[-30.5, -2, 0]} rotation={[0, 0, 0]} />
      </RigidBody>

      {/* First moving platform */}
      <RigidBody type="kinematicPosition" name="desertTile" ref={ref2}>
        <MovingRedTileLarge position={[-53.5, -2, 0]} rotation={[0, 0, 0]} />
      </RigidBody>

      {/* third moving platform */}
      <RigidBody type="kinematicPosition" name="desertTile" ref={ref3}>
        <MovingRedTileLarge position={[-48.5, 16, 0]} rotation={[0, 0, 0]} />
      </RigidBody>
    </>
  );
};

export default ChallengeRoute;
