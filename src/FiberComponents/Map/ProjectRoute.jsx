import React, { useRef, useState } from 'react';
import { FixedForestTileLarge } from '../Models/FixedForestTileLarge';
import { PineTree } from '../Models/PineTree';
import { RigidBody } from '@react-three/rapier';
import { MovingForestTileLarge } from '../Models/MovingForestTileLarge';
import { useFrame } from '@react-three/fiber';
import { SwiperBlue } from '../Models/SwiperBlue';
import { Billboard, Text3D, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { BlueGate } from '../Models/BlueGate';
import ProjectGateDetector from '../Models/ProjectGateDetector';
import { YellowGate } from '../Models/YellowGate';
import TeleportDetector from '../Models/TeleportDetector';

import ProjectDetector from '../Models/ProjectDetector';

const ProjectRoute = () => {
  const [show, setShow] = useState(false);

  const ref = useRef();
  const finalPlatRef = useRef();

  const ref2 = useRef();
  const [direction, setDirection] = useState(1);
  const [direction2, setDirection2] = useState(-1);

  useFrame(({ clock }) => {
    // First platform animation - UP AND DOWN
    if (ref.current) {
      const speed = 2;
      const range = 5; // Range for upward movement
      const basePosition = -0.75;
      const position = ref.current.translation();
      const nextY = position.y + direction * speed * 0.02;

      // Change direction if below base position or above max height
      if (nextY < basePosition) {
        // Force direction to be positive (upward) if below base
        setDirection(1);
        // Force position to be at least the base position
        ref.current.setNextKinematicTranslation({
          x: position.x,
          y: basePosition,
          z: position.z,
        });
      } else if (nextY > basePosition + range) {
        // Only reverse direction when we hit the upper limit
        setDirection(-1);
        ref.current.setNextKinematicTranslation({
          x: position.x,
          y: nextY,
          z: position.z,
        });
      } else {
        // Normal movement within acceptable range
        ref.current.setNextKinematicTranslation({
          x: position.x,
          y: nextY,
          z: position.z,
        });
      }
    }

    if (ref2.current) {
      const speed = 2;
      const range = 8; // Range for upward movement
      const basePosition = 0.5;
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
  });

  return (
    <>
      <FixedForestTileLarge position={[0, -1.5, -16]} rotation={[0, 0, 0]} />
      <FixedForestTileLarge position={[0, 2.5, -34]} rotation={[0, 0, 0]} />
      <FixedForestTileLarge position={[0, 2.5, -43]} rotation={[0, 0, 0]} />
      <FixedForestTileLarge position={[0, 3.4, -49.1]} rotation={[0.3, 0, 0]} />
      <FixedForestTileLarge position={[0, 4.22, -54.5]} rotation={[0, 0, 0]} />
      <FixedForestTileLarge position={[0, 4.22, -60.5]} rotation={[0, 0, 0]} />

      {/* FINAL PLATFORM */}
      <group ref={finalPlatRef}>
        <FixedForestTileLarge
          position={[0, 9.85, -73.5]}
          rotation={[0, 0, 0]}
        />
        <FixedForestTileLarge
          position={[-5.9, 9.85, -73.5]}
          rotation={[0, 0, 0]}
        />
        <FixedForestTileLarge
          position={[5.9, 9.85, -73.5]}
          rotation={[0, 0, 0]}
        />

        <FixedForestTileLarge
          position={[-5.9, 9.85, -79.5]}
          rotation={[0, 0, 0]}
        />
        <FixedForestTileLarge
          position={[0, 9.85, -79.5]}
          rotation={[0, 0, 0]}
        />
        <FixedForestTileLarge
          position={[5.9, 9.85, -79.5]}
          rotation={[0, 0, 0]}
        />

        {/* <FixedForestTileLarge position={[-5.9, 9.85, -85.5]} rotation={[0, 0, 0]} />
        <FixedForestTileLarge position={[0, 9.85, -85.5]} rotation={[0, 0, 0]} />
        <FixedForestTileLarge position={[5.9, 9.85, -85.5]} rotation={[0, 0, 0]} /> */}

        <YellowGate
          position={[8, 10.5, -76.85]}
          bloomPosition={[8, 12, -76.85]}
          rotation={[0, THREE.MathUtils.degToRad(90), 0]}
          name="projects_home_tele"
        />
        <TeleportDetector
          name="teleport_projects_home"
          position={[8.35, 12, -76.85]}
          rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        />

        <BlueGate position={[0, 9.5, -80.5]} />
        <ProjectGateDetector position={[0, 9.5, -80.1]} />

        {/* <ProjectDetector /> */}
      </group>

      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        lineHeight={0.25}
        size={0.4} // Increased from 0.25 to 0.5
        position={[8, 14, -77.5]}
        rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
        color="black"
      >
        Home
      </Text3D>

      {/* FINAL PLATFORM */}

      <PineTree position={[-1.75, -0.5, -17]} />
      <PineTree position={[1.75, -0.5, -14]} />

      {/* PLATFORM TREES */}

      <PineTree position={[-8, 10.75, -71.5]} />
      <PineTree position={[8, 10.75, -71.5]} />

      <SwiperBlue position={[0, 3.25, -34]} swiperSpeed={1} />
      <SwiperBlue position={[0, 5.22, -54.5]} swiperSpeed={4} />

      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        fontSize={0.5}
        position={[5, 2.5, -17]}
        rotation={[0, THREE.MathUtils.degToRad(-65), 0]}
        color="black"
      >
        {'<'}&mdash; Projects
      </Text3D>

      <RigidBody type="kinematicPosition" name="desertTile" ref={ref}>
        <MovingForestTileLarge
          position={[0, -1.65, -25]}
          rotation={[0, 0, 0]}
        />
      </RigidBody>

      <RigidBody type="kinematicPosition" name="desertTile" ref={ref2}>
        <MovingForestTileLarge
          position={[0, 3.9, -66.5]}
          rotation={[0, 0, 0]}
        />
      </RigidBody>
    </>
  );
};

export default ProjectRoute;
