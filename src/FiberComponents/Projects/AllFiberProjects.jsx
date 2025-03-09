import PageSpinner from '@/Components/PageSpinner'
import ProjectCard from '@/Components/ProjectCard/ProjectCard'
import { FiberGrid } from '@/Components/UI'
import { useGetAllProjectsQuery } from '@/redux/projectApi'
import { Billboard, Html } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AllFiberProjects = () => {


    const { data: projects, isLoading, isSuccess, isError, error } = useGetAllProjectsQuery()

    const dispatch = useDispatch()

    const showProjects = useSelector(state => state.gate.projectsShow)
    

    let content;

    if(isLoading){
        content = <PageSpinner />
    }else if(isSuccess){
        content = projects.map((item, index) => {
            return (
                <div key={item._id} className="w-full cursor-pointer">
                    <img src={item.images[0].image} alt={item.title} className="w-full h-full object-cover hover:opacity-90 transition duration-300" />
                    <h1 className="text-white">{item.title}</h1>
                </div>
                
            )
        })
    }

  return (
    <>
    {/* <Billboard follow={true} position={[-20, 18, -120]} > */}
        <Html
            position={[0, 16, -100]}
            className="w-[1000px] p-2 select-none"
            transform
            // occlude
            
        >
                
            <FiberGrid className="">
                {
                    showProjects ? content : null
                }
                    
            </FiberGrid>
        </Html>
        {/* </Billboard> */}
    </>
  )
}

export default AllFiberProjects