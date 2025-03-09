import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Mech(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/CombatMech.glb')
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
          castShadow
            name="CombatMech_ArmLeft"
            geometry={nodes.CombatMech_ArmLeft.geometry}
            material={materials.combatMech}
            skeleton={nodes.CombatMech_ArmLeft.skeleton}
          />
          <skinnedMesh
          castShadow
            name="CombatMech_ArmRight"
            geometry={nodes.CombatMech_ArmRight.geometry}
            material={materials.combatMech}
            skeleton={nodes.CombatMech_ArmRight.skeleton}
          />
          <skinnedMesh
          castShadow
            name="CombatMech_Body"
            geometry={nodes.CombatMech_Body.geometry}
            material={materials.combatMech}
            skeleton={nodes.CombatMech_Body.skeleton}
          />
          <skinnedMesh
          castShadow
            name="CombatMech_Head"
            geometry={nodes.CombatMech_Head.geometry}
            material={materials.combatMech}
            skeleton={nodes.CombatMech_Head.skeleton}
          />
          <skinnedMesh
          castShadow
            name="CombatMech_LegLeft"
            geometry={nodes.CombatMech_LegLeft.geometry}
            material={materials.combatMech}
            skeleton={nodes.CombatMech_LegLeft.skeleton}
          />
          <skinnedMesh
          castShadow
            name="CombatMech_LegRight"
            geometry={nodes.CombatMech_LegRight.geometry}
            material={materials.combatMech}
            skeleton={nodes.CombatMech_LegRight.skeleton}
          />
          <skinnedMesh
          castShadow
            name="CombatMech_ShoulderLeft"
            geometry={nodes.CombatMech_ShoulderLeft.geometry}
            material={materials.combatMech}
            skeleton={nodes.CombatMech_ShoulderLeft.skeleton}
          />
          <skinnedMesh
          castShadow
            name="CombatMech_ShoulderRight"
            geometry={nodes.CombatMech_ShoulderRight.geometry}
            material={materials.combatMech}
            skeleton={nodes.CombatMech_ShoulderRight.skeleton}
          />
          <primitive object={nodes.root} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/CombatMech.glb')
