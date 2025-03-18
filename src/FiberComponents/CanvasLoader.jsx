import { useProgress, Html } from '@react-three/drei';
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';

function RotatingCube() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.02;
      ref.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshNormalMaterial  />
    </mesh>
  );
}

const CanvasLoader = () => {

    const { progress } = useProgress();


  return (
    <>
    <directionalLight intensity={1.5} />
    <ambientLight intensity={0.5} />
      <RotatingCube />
    <Html center>
      <div className="flex flex-col items-center justify-center h-screen">
        
        <h1 className="text-white text-3xl">Loading... </h1>
      </div>
    </Html>
    </>
  )
}

export default CanvasLoader


