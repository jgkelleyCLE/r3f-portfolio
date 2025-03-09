import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Paladin(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Paladin_with_Helmet.glb')
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
          <group name="Paladin_ArmLeft">
            <skinnedMesh
            castShadow
              name="Paladin_ArmLeft_1"
              geometry={nodes.Paladin_ArmLeft_1.geometry}
              material={materials.paladin}
              skeleton={nodes.Paladin_ArmLeft_1.skeleton}
            />
            <skinnedMesh
            castShadow
              name="Paladin_ArmLeft_2"
              geometry={nodes.Paladin_ArmLeft_2.geometry}
              material={materials.paladin_metallic}
              skeleton={nodes.Paladin_ArmLeft_2.skeleton}
            />
          </group>
          <group name="Paladin_ArmRight">
            <skinnedMesh
            castShadow
              name="Paladin_ArmRight_1"
              geometry={nodes.Paladin_ArmRight_1.geometry}
              material={materials.paladin}
              skeleton={nodes.Paladin_ArmRight_1.skeleton}
            />
            <skinnedMesh
            castShadow
              name="Paladin_ArmRight_2"
              geometry={nodes.Paladin_ArmRight_2.geometry}
              material={materials.paladin_metallic}
              skeleton={nodes.Paladin_ArmRight_2.skeleton}
            />
          </group>
          <group name="Paladin_Body">
            <skinnedMesh
            castShadow
              name="Paladin_Body_1"
              geometry={nodes.Paladin_Body_1.geometry}
              material={materials.paladin}
              skeleton={nodes.Paladin_Body_1.skeleton}
            />
            <skinnedMesh
            castShadow
              name="Paladin_Body_2"
              geometry={nodes.Paladin_Body_2.geometry}
              material={materials.paladin_metallic}
              skeleton={nodes.Paladin_Body_2.skeleton}
            />
          </group>
          <group name="Paladin_Helmet">
            <skinnedMesh
            castShadow
              name="Paladin_Helmet_1"
              geometry={nodes.Paladin_Helmet_1.geometry}
              material={materials.paladin}
              skeleton={nodes.Paladin_Helmet_1.skeleton}
            />
            <skinnedMesh
            castShadow
              name="Paladin_Helmet_2"
              geometry={nodes.Paladin_Helmet_2.geometry}
              material={materials.paladin_metallic}
              skeleton={nodes.Paladin_Helmet_2.skeleton}
            />
          </group>
          <group name="Paladin_LegLeft">
            <skinnedMesh
            castShadow
              name="Paladin_LegLeft_1"
              geometry={nodes.Paladin_LegLeft_1.geometry}
              material={materials.paladin}
              skeleton={nodes.Paladin_LegLeft_1.skeleton}
            />
            <skinnedMesh
            castShadow
              name="Paladin_LegLeft_2"
              geometry={nodes.Paladin_LegLeft_2.geometry}
              material={materials.paladin_metallic}
              skeleton={nodes.Paladin_LegLeft_2.skeleton}
            />
          </group>
          <group name="Paladin_LegRight">
            <skinnedMesh
            castShadow
              name="Paladin_LegRight_1"
              geometry={nodes.Paladin_LegRight_1.geometry}
              material={materials.paladin}
              skeleton={nodes.Paladin_LegRight_1.skeleton}
            />
            <skinnedMesh
            castShadow
              name="Paladin_LegRight_2"
              geometry={nodes.Paladin_LegRight_2.geometry}
              material={materials.paladin_metallic}
              skeleton={nodes.Paladin_LegRight_2.skeleton}
            />
          </group>
          <primitive object={nodes.root} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Paladin_with_Helmet.glb')
