import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Mage(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/Mage.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)  
  

  useEffect(() => {
    // Stop all current animations
    Object.values(actions).forEach(action => action.stop());

    // Play the requested animation if it exists
    if (actions[props.animation]) {
      actions[props.animation].play();
      actions[props.animation].reset().fadeIn(0.2);
    } else {
      console.warn(`Animation "${props.animation}" not found in model`);
    }

    return () => {
      // Cleanup: fade out current animation on unmount or animation change
      if (actions[props.animation]) {
        actions[props.animation].fadeOut(0.2);
      }
    };
  }, [props.animation, actions]);

  return (
    <group ref={group} {...props} dispose={null} >
      <group name="Scene">
        <group name="Rig">
          <primitive object={nodes.root} castShadow />
          <skinnedMesh  name="Mage_ArmLeft" geometry={nodes.Mage_ArmLeft.geometry} material={materials.mage_texture} skeleton={nodes.Mage_ArmLeft.skeleton} />
          <skinnedMesh name="Mage_ArmRight" geometry={nodes.Mage_ArmRight.geometry} material={materials.mage_texture} skeleton={nodes.Mage_ArmRight.skeleton} />
          <skinnedMesh name="Mage_Body" geometry={nodes.Mage_Body.geometry} material={materials.mage_texture} skeleton={nodes.Mage_Body.skeleton} />
          <skinnedMesh name="Mage_Head" geometry={nodes.Mage_Head.geometry} material={materials.mage_texture} skeleton={nodes.Mage_Head.skeleton} />
          <skinnedMesh name="Mage_LegLeft" geometry={nodes.Mage_LegLeft.geometry} material={materials.mage_texture} skeleton={nodes.Mage_LegLeft.skeleton} />
          <skinnedMesh name="Mage_LegRight" geometry={nodes.Mage_LegRight.geometry} material={materials.mage_texture} skeleton={nodes.Mage_LegRight.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Mage.glb')
