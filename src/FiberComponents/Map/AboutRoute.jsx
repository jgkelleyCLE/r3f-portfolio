import React, { useRef, useState, useEffect } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Cactus } from '../Models/Cactus';
import { SwiperRed } from '../Models/SwiperRed';
import { useFrame } from '@react-three/fiber';
import { FixedDesertTileLarge } from '../Models/FixedDesertTileLarge';
import { MovingDesertTileLarge } from '../Models/MovingDesertTileLarge';

import * as THREE from 'three';
import { RedGate } from '../Models/RedGate';
import AboutGateDetector from '../Models/AboutGateDetector';
import { Text3D } from '@react-three/drei';
import { YellowGate } from '../Models/YellowGate';
import TeleportDetector from '../Models/TeleportDetector';

const AboutRoute = () => {
  const ref = useRef();
  const ref2 = useRef();
  const [direction, setDirection] = useState(1);
  const [direction2, setDirection2] = useState(-1); // Start in opposite direction

  useFrame(({ clock }) => {
    // First platform animation
    if (ref.current) {
      const speed = 2;
      const range = 5;
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
      const speed = 2;
      const range = 5;
      const position = ref2.current.translation();
      const nextX = position.x + direction2 * speed * 0.02;

      if (Math.abs(nextX) > range) {
        setDirection2((prev) => -prev);
      }

      // Use setNextKinematicTranslation for this one too
      ref2.current.setNextKinematicTranslation({
        x: nextX,
        y: position.y,
        z: position.z,
      });
    }
  });

  return (
    <>
      <FixedDesertTileLarge position={[0, -1.5, 16]} />
      <FixedDesertTileLarge position={[0, -1.65, 25]} />
      <FixedDesertTileLarge position={[0, -1.65, 33]} />
      <FixedDesertTileLarge position={[0, -0.75, 39]} rotation={[-0.3, 0, 0]} />

      {/* <FixedDesertTileLarge position={[0, 1.01, 44.65]} rotation={[-0.3, 0, 0]} /> */}

      <FixedDesertTileLarge position={[0, 0.75, 44.65]} rotation={[0, 0, 0]} />

      <SwiperRed position={[0, 1.75, 44.65]} swiperSpeed={3} />

      {/* FINAL PLATFORM */}
      <FixedDesertTileLarge position={[0, 1.85, 70.15]} rotation={[0, 0, 0]} />
      <FixedDesertTileLarge position={[0, 1.85, 75.85]} rotation={[0, 0, 0]} />
      <FixedDesertTileLarge position={[5.9, 1.85, 70.15]} rotation={[0, 0, 0]} />
      <FixedDesertTileLarge position={[5.9, 1.85, 75.85]} rotation={[0, 0, 0]} />
      <FixedDesertTileLarge position={[-5.9, 1.85, 70.15]} rotation={[0, 0, 0]} />
      <FixedDesertTileLarge position={[-5.9, 1.85, 75.85]} rotation={[0, 0, 0]} />
      <Text3D
        castShadow
        font="/fonts/helvetiker_regular.typeface.json"
        lineHeight={0.25}
        size={0.4} // Increased from 0.25 to 0.5
        position={[8, 6, 72.15]}
        rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
        color="black"
      >
        Home
      </Text3D>

      {/* FINAL PLATFORM */}

      <Cactus position={[-1.75, -0.5, 14]} />
      <Cactus position={[1.75, -0.5, 17]} />

      <Cactus position={[0, 0.05, 38.5]} />
      <Cactus position={[0, 0.05, 38.5]} />
      <Cactus position={[-7.5, 2.85, 68.15]} />
      <Cactus position={[7.5, 2.85, 68.15]} />

      <SwiperRed position={[0, -0.65, 25]} swiperSpeed={1} />
      <SwiperRed position={[0, -0.65, 34]} swiperSpeed={3} />

      <YellowGate
        position={[8, 2.5, 72.85]}
        bloomPosition={[8, 4, 72.85]}
        rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        name="gate_about_tele"
      />
      <TeleportDetector
        name="teleport_about_home"
        position={[8.35, 3.5, 72.85]}
        rotation={[0, THREE.MathUtils.degToRad(90), 0]}
      />

      <RedGate position={[0, 2.5, 76.15]} />
      <AboutGateDetector position={[0, 2.5, 75.75]} />

      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        fontSize={0.5}
        position={[-5, 2.5, 17]}
        rotation={[0, THREE.MathUtils.degToRad(120), 0]}
        color="black"
      >
        {'<'}&mdash; About Me
      </Text3D>

      {/* First moving platform */}
      <RigidBody type="kinematicPosition" name="desertTile" ref={ref}>
        <MovingDesertTileLarge position={[0, 1.5, 52.15]} rotation={[0, 0, 0]} />
      </RigidBody>

      {/* Second moving platform - opposite direction */}
      <RigidBody type="kinematicPosition" name="desertTile" ref={ref2}>
        <MovingDesertTileLarge position={[0, 1.5, 62.15]} rotation={[0, 0, 0]} ref={ref} />
      </RigidBody>
    </>
  );
};

export default AboutRoute;
