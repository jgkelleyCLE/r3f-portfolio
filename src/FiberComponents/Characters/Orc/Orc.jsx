
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Orc(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/OrcRaider.glb')
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
            name="OrcRaider_ArmLeft"
            geometry={nodes.OrcRaider_ArmLeft.geometry}
            material={materials.orc_texture_A}
            skeleton={nodes.OrcRaider_ArmLeft.skeleton}
          />
          <skinnedMesh
          castShadow
            name="OrcRaider_ArmRight"
            geometry={nodes.OrcRaider_ArmRight.geometry}
            material={materials.orc_texture_A}
            skeleton={nodes.OrcRaider_ArmRight.skeleton}
          />
          <skinnedMesh
          castShadow
            name="OrcRaider_Body"
            geometry={nodes.OrcRaider_Body.geometry}
            material={materials.orc_texture_A}
            skeleton={nodes.OrcRaider_Body.skeleton}
          />
          <skinnedMesh
          castShadow
            name="OrcRaider_Head"
            geometry={nodes.OrcRaider_Head.geometry}
            material={materials.orc_texture_A}
            skeleton={nodes.OrcRaider_Head.skeleton}
          />
          <skinnedMesh
          castShadow
            name="OrcRaider_LegLeft"
            geometry={nodes.OrcRaider_LegLeft.geometry}
            material={materials.orc_texture_A}
            skeleton={nodes.OrcRaider_LegLeft.skeleton}
          />
          <skinnedMesh
          castShadow
            name="OrcRaider_LegRight"
            geometry={nodes.OrcRaider_LegRight.geometry}
            material={materials.orc_texture_A}
            skeleton={nodes.OrcRaider_LegRight.skeleton}
          />
          <primitive object={nodes.root} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/OrcRaider.glb')
