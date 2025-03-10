import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Druid(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Druid.glb')
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
            name="Druid_ArmLeft"
            geometry={nodes.Druid_ArmLeft.geometry}
            material={materials.druid_texture}
            skeleton={nodes.Druid_ArmLeft.skeleton}
          />
          <skinnedMesh
            name="Druid_ArmRight"
            geometry={nodes.Druid_ArmRight.geometry}
            material={materials.druid_texture}
            skeleton={nodes.Druid_ArmRight.skeleton}
          />
          <skinnedMesh
            name="Druid_Body"
            geometry={nodes.Druid_Body.geometry}
            material={materials.druid_texture}
            skeleton={nodes.Druid_Body.skeleton}
          />
          <skinnedMesh
            name="Druid_Head"
            geometry={nodes.Druid_Head.geometry}
            material={materials.druid_texture}
            skeleton={nodes.Druid_Head.skeleton}
          />
          <skinnedMesh
            name="Druid_LegLeft"
            geometry={nodes.Druid_LegLeft.geometry}
            material={materials.druid_texture}
            skeleton={nodes.Druid_LegLeft.skeleton}
          />
          <skinnedMesh
            name="Druid_LegRight"
            geometry={nodes.Druid_LegRight.geometry}
            material={materials.druid_texture}
            skeleton={nodes.Druid_LegRight.skeleton}
          />
          <primitive object={nodes.root} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Druid.glb')
