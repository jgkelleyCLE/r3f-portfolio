import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Robot(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Robot_Two.glb')
  const { actions } = useAnimations(animations, group)


// Use the animation prop to play the correct animation
      useEffect(() => {
        // Stop all current animations
        Object.values(actions).forEach(action => action.stop())
        
        // Play the requested animation if it exists
        if (actions[props.animation]) {
          actions[props.animation].play()
          actions[props.animation].reset().fadeIn(0.2)
        } else {
          console.warn(`Animation "${props.animation}" not found in model`)
        }
        
        return () => {
          // Cleanup: fade out current animation on unmount or animation change
          if (actions[props.animation]) {
            actions[props.animation].fadeOut(0.2)
          }
        }
      }, [props.animation, actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Rig">
          <skinnedMesh
            name="Robot_Two_ArmLeft"
            geometry={nodes.Robot_Two_ArmLeft.geometry}
            material={materials.robot}
            skeleton={nodes.Robot_Two_ArmLeft.skeleton}
          />
          <skinnedMesh
            name="Robot_Two_ArmRight"
            geometry={nodes.Robot_Two_ArmRight.geometry}
            material={materials.robot}
            skeleton={nodes.Robot_Two_ArmRight.skeleton}
          />
          <skinnedMesh
            name="Robot_Two_Body"
            geometry={nodes.Robot_Two_Body.geometry}
            material={materials.robot}
            skeleton={nodes.Robot_Two_Body.skeleton}
          />
          <group name="Robot_Two_Head">
            <skinnedMesh
              name="Robot_Two_Head_1"
              geometry={nodes.Robot_Two_Head_1.geometry}
              material={materials.robot}
              skeleton={nodes.Robot_Two_Head_1.skeleton}
            />
            <skinnedMesh
              name="Robot_Two_Head_2"
              geometry={nodes.Robot_Two_Head_2.geometry}
              material={materials.robot_glow}
              skeleton={nodes.Robot_Two_Head_2.skeleton}
            />
          </group>
          <skinnedMesh
            name="Robot_Two_LegLeft"
            geometry={nodes.Robot_Two_LegLeft.geometry}
            material={materials.robot}
            skeleton={nodes.Robot_Two_LegLeft.skeleton}
          />
          <skinnedMesh
            name="Robot_Two_LegRight"
            geometry={nodes.Robot_Two_LegRight.geometry}
            material={materials.robot}
            skeleton={nodes.Robot_Two_LegRight.skeleton}
          />
          <primitive object={nodes.root} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Robot_Two.glb')
