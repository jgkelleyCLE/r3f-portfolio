import { CapsuleCollider, euler, quat, RigidBody, vec3 } from '@react-three/rapier'
import React, { useEffect, useRef, useState } from 'react'
import { PerspectiveCamera, useKeyboardControls } from '@react-three/drei';
import { Vector3 } from "three";
import { Controls } from '../../../FiberApp';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three'

import { Mage } from './Mage';
import { useDispatch, useSelector } from 'react-redux';
import { setAboutGate, setChallengeComplete, setContactGate, setProjectGate, setProjectsShow, setRaceGate, startTimer } from '@/redux/gateSlice';


const MOVEMENT_SPEED = 5;
const JUMP_FORCE = 8;
const ROTATION_SPEED = 3;
const SPRINT_MULTIPLIER = 2

const MageController = ({ isJumping, setIsJumping, movement }) => {

   const rb = useRef();
  
    
  
          const gravityVal = useSelector(state => state.settings.gravity)
          const lowGravity = useSelector(state => state.settings.lowGravity)
       const dispatch = useDispatch()
                  const aboutGate = useSelector(state => state.gate.aboutGate)
      
                  const isTimerRunning = useSelector(state => state.gate.startTimer)
  
                  const isClicking = useRef(false)
  
                  
      
                  // DISABLE MOVEMENT WHEN FINISH MODAL IS UP
                  const raceGate = useSelector(state => state.gate.raceGate)
                  const contactGate = useSelector(state => state.gate.contactGate)
              
                   
                            const camera = useRef();
                            const cameraTarget = useRef(new Vector3(0, 0, 0));
                            const [, get] = useKeyboardControls();
                            const inTheAir = useRef(false);
                            const punched = useRef(false);
                            const vel = new Vector3();
                      
                            const [animation, setAnimation] = useState("Idle")
                            
                      
                            useFrame(() => {
                            
                              //DISABLE MOVEMENT IN THESE MODALS:
                              if(raceGate || contactGate) {
                                return
                              }
                              cameraTarget?.current?.lerp(vec3(rb.current.translation()), 0.5);
                              camera.current.lookAt(cameraTarget.current);
                              
                              const curVel = rb.current.linvel();
                              vel.x = 0;
                              vel.y = 0;
                              vel.z = 0;
                              
                              const rotVel = {
                                x: 0,
                                y: 0,
                                z: 0,
                              };
                                // Set a flag for movement
                                  let isMoving = false;
                                  let pickingUp = false;
                                  let isSprinting = false
                                  let isAttacking = false

                                  if(movement.right){
                                    rotVel.y -= ROTATION_SPEED * 0.675;
                                  }

                                  if (movement.left) {
                                    rotVel.y += ROTATION_SPEED * 0.675;
                                  }
                      
                      
                                if (get()[Controls.forward] || movement.back) {
                                  vel.z -= MOVEMENT_SPEED;
                                  isMoving = true;
                                  // setAnimation("walk");
                                }
                                if (get()[Controls.back] || movement.forward) {
                                  vel.z += MOVEMENT_SPEED;
                                  isMoving = true;
                                }
                                if(get()[Controls.duck]){
                                 
                                  pickingUp = true;
                                }
                                if(get()[Controls.attack]){
                                 
                                  isAttacking = true;
                                }
                                // if (get()[Controls.left] || movement.left) {
                                //   rotVel.y += ROTATION_SPEED;
                                // }
                                // if (get()[Controls.right] || movement.right) {
                                //   rotVel.y -= ROTATION_SPEED;
                                // }
                                if (get()[Controls.left]) {
                                  rotVel.y += ROTATION_SPEED;
                                }
                                if (get()[Controls.right]) {
                                  rotVel.y -= ROTATION_SPEED;
                                }

                                if (vel.length() > 0) {
                                  vel.normalize().multiplyScalar(MOVEMENT_SPEED);
                                
                                }

                                if(get() [Controls.sprint] || movement.sprint){
                                  vel.x *= SPRINT_MULTIPLIER
                                  vel.z *= SPRINT_MULTIPLIER
                                  isSprinting = true
                                }
                      
                                // Set animation based on movement state
                                if (pickingUp) {
                                  setAnimation("Interact");
                                }else if(isAttacking){
                                  setAnimation("Spellcast_Raise")
                                }else if (isMoving && !inTheAir.current && !isSprinting) {
                                      setAnimation("Walking_A");
                                  }else if(isMoving && !inTheAir.current && isSprinting){
                                      setAnimation("Running_A");
                                  } else if (!inTheAir.current) {
                                      setAnimation("Idle");
                                  }else if(isMoving && inTheAir.current){
                                      setAnimation("Jump_Idle");
                                  }
                            
                                rb.current.setAngvel(rotVel, true);
                            
                                // apply rotation to x and z to go in the right direction
                            
                                const eulerRot = euler().setFromQuaternion(quat(rb.current.rotation()));
                                vel.applyEuler(eulerRot);
                            
                                if ((get()[Controls.jump || movement.jump] || isJumping) && !inTheAir.current) {
                                  vel.y += JUMP_FORCE;
                                  inTheAir.current = true;
                                  setIsJumping(false);
                                  setAnimation("Jump_Full_Long");
                                } else {
                                  vel.y = curVel.y;
                                }
              
                                
              
                                if (!punched.current) {
                                  rb.current.setLinvel(vel, true);
                                }
                              });
  
   
                              const respawn = () => {
                                  rb.current.setTranslation({
                                    x: 0,
                                    y: 5,
                                    z: -1,
                                  });
                                };
                              
                                const scene = useThree((state) => state.scene);
              
                                
              
              
                                const teleportHome = () => {
                                  // respawn()
                                  rb.current.setTranslation({
                                    x: 0,
                                    y: 2,
                                    z: -1,
                                  });
                                }
              
                                
              
                                const goToProjects = () => {
                                  rb.current.setTranslation({
                                    x: 5,
                                    y: 14,
                                    z: -76.5,
                                  });
              
                                  // Set rotation - make character face 180 degrees (south)
                                  const rotation = new THREE.Quaternion().setFromEuler(
                                    new THREE.Euler(0, THREE.MathUtils.degToRad(90), 0)
                                  );
                                  rb.current.setRotation(rotation);
              
                                }
              
                                const goToAbout = () => {
                                  rb.current.setTranslation({
                                    x: 7,
                                    y: 5,
                                    z: 74,
                                  });
              
                                  // Set rotation - make character face 180 degrees (south)
                                  const rotation = new THREE.Quaternion().setFromEuler(
                                    new THREE.Euler(0, THREE.MathUtils.degToRad(90), 0)
                                  );
                                  rb.current.setRotation(rotation);
              
                                }
            return (
             <>
                                                  <RigidBody
                                                  colliders="cuboid"
                                                  position={[0, 1, 0]}
                                                  friction={1}
                                                  linearDamping={0.5}
                                                  restitution={0.2}
                                                  angularDamping={0.5}
                                                  ref={rb}
                                                  gravityScale={lowGravity ? gravityVal : 2.5}
                                                  onIntersectionExit={({ other }) => {
                                                    if (other.rigidBodyObject.name === "aboutGate") {
                                                      
                                                      dispatch(setAboutGate(false))
                                                    }
                                                    if (other.rigidBodyObject.name === "projectGate") {
                                                      
                                                      dispatch(setProjectGate(false))
                                                    }
                                                    if (other.rigidBodyObject.name === "projects_show") {
                                                      dispatch(setProjectsShow(false))
                                                      
                                                    }
                                                  }}
                                                  onIntersectionEnter={({ other }) => {
                                                    if (other.rigidBodyObject.name === "space") {
                                                      respawn();
                                                    }
                                                    if (other.rigidBodyObject.name === "projectGate") {
                                                      
                                                      dispatch(setProjectGate(true))
                                                    }
                                                    if (other.rigidBodyObject.name === "aboutGate") {
                                                      
                                                      dispatch(setAboutGate(true))
                                                    }
                                                    if (other.rigidBodyObject.name === "contactGate") {
                                                      
                                                      dispatch(setContactGate(true))
                                                    }
                                             
                                                    if (other.rigidBodyObject.name === "start_trigger") {
                                                      dispatch(startTimer(true))
                                                      
                                                    }
                                                    

                                                    if (other.rigidBodyObject.name === "end_trigger" && isTimerRunning) {
                                                      dispatch(startTimer(false))
                                                      dispatch(setRaceGate(true))
                                                      dispatch(setChallengeComplete(true))
                                                    }

                                                    if (other.rigidBodyObject.name === "projects_show") {
                                                      dispatch(setProjectsShow(true))
                                                      
                                                    }
                                  
                                                    if(other.rigidBodyObject.name === "projects_detector"){
                                                      goToProjects()
                                                    }
                                  
                                                    if(other.rigidBodyObject.name === "about_detector"){
                                                      goToAbout()
                                                    }
                                                    
                                                    if (other.rigidBodyObject.name === "teleport_main_about") {
                                                      
                                                      teleportAbout()
                                                    }
                                  
                                                    if (other.rigidBodyObject.name === "teleport_about_home") {
                                                      
                                                      teleportHome()
                                                    }
                                                    if (other.rigidBodyObject.name === "teleport_projects_home") {
                                                      
                                                      teleportHome()
                                                    }
                                                    if (other.rigidBodyObject.name === "teleport_main_projects") {
                                                      
                                                      teleportProjects()
                                                    }
                                                  }}
                                                  lockRotations
                                                  onCollisionEnter={({ other }) => {
                                                    if (other.rigidBodyObject.name === "ground") {
                                                      inTheAir.current = false;
                                                    }
                                                    if (other.rigidBodyObject.name === "desertTile") {
                                                      inTheAir.current = false;
                                                    }
                                                    if (other.rigidBodyObject.name === "barrier") {
                                                      inTheAir.current = false;
                                                    }
                                                    if (other.rigidBodyObject.name === "gate") {
                                                      inTheAir.current = false;
                                                      punched.current = true;
                                                      setTimeout(() => {
                                                        punched.current = false;
                                                      }, 200);
                                                    }
                                                    if (other.rigidBodyObject.name === "cactus") {
                                                      inTheAir.current = false;
                                                      punched.current = true;
                                                      setTimeout(() => {
                                                        punched.current = false;
                                                      }, 200);
                                                    }
                                                    if (other.rigidBodyObject.name === "spike") {
                                                      inTheAir.current = false;
                                                      punched.current = true;
                                                      setTimeout(() => {
                                                        punched.current = false;
                                                      }, 200);
                                                    }
                                                    if (other.rigidBodyObject.name === "pineTree") {
                                                      inTheAir.current = false;
                                                      punched.current = true;
                                                      setTimeout(() => {
                                                        punched.current = false;
                                                      }, 200);
                                                    }
                                  
                                                    if (other.rigidBodyObject.name === "swiper") {
                                                      punched.current = true;
                                                      setTimeout(() => {
                                                        punched.current = false;
                                                      }, 200);
                                                    }
                                                  }}
                                                  >
                                                      <PerspectiveCamera ref={camera} makeDefault position={[0, 3, 10]} />
                                                      <Mage scale={0.6} position-y={-1.25} rotation={[0, THREE.MathUtils.degToRad(180), 0]} animation={animation} castShadow />
                                                      {/* <CapsuleCollider args={[0.5, 1]} /> */}
                                                  </RigidBody>
                                              </>
  )
}

export default MageController
