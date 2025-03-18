import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { setProjectGate } from '@/redux/gateSlice'
import { Link, useNavigate } from 'react-router-dom'
import { FlexColumn, FlexRow } from '../UI'
import { Button } from '../ui/button'
import { useGetAllProjectsQuery, useLazyGetAllProjectsQuery } from '@/redux/projectApi'
import PageSpinner from '../PageSpinner'

import ModalProjectCard from '../ProjectCard/ModalProjectCard'
import MiniProjectCard from '../ProjectCard/MiniProjectCard'


const ProjectsModal = () => {

  const [open, setOpen] = useState(false)

    const projectGate = useSelector(state => state.gate.projectGate)
    const dispatch = useDispatch()

    const navigate = useNavigate()


    const [triggerFetch, { data: projects, isLoading, isSuccess, isError, error }] = useLazyGetAllProjectsQuery();
    
    useEffect(() => {
      
      if(projectGate){
        triggerFetch()
      }
      
    }, [projectGate])
    
    let content;

    if(isLoading){
      content = <FlexColumn >
        <PageSpinner />
      </FlexColumn>
    }else if(isSuccess){
      content = projects?.map(item => (
        // <ProjectCard item={item} key={item._id} />
        // <ModalProjectCard item={item} key={item._id} />
        <MiniProjectCard item={item} key={item._id} />
      ))
    }

    

  return (
    <Dialog open={projectGate} onOpenChange={() => dispatch(setProjectGate(false))} className="min-w-[1200px] ">
      <DialogTrigger></DialogTrigger>
      <DialogContent className="max-w-3xl md:h-auto h-[85%]  border-primary [&>button]:text-accent overflow-y-scroll scrollbar-themed">
        <DialogHeader className="">
          <DialogTitle className="text-primary text-xl md:text-2xl">Projects</DialogTitle>
          <DialogDescription>
            
          </DialogDescription>
          
          {/* CONTROLS THEMED SCROLLBAR AREA */}
          <div className="flex flex-col items-center max-h-[600px] md:max-h-[800px] overflow-y-scroll scrollbar-themed"> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {content}

            </div>
            
          </div>
        </DialogHeader>
        <DialogFooter className="hidden md:flex">
        <DialogClose className="w-full"><Button className="bg-gray-400 p-2 hover:bg-gray-500 transition duration-300 rounded-md text-white hover font-bold cursor-pointer w-full text-lg">Close</Button></DialogClose>
        <Button className="md:w-1/2 cursor-pointer hover:bg-accent/90 transition duration-300 bg-accent text-lg" onClick={()=> navigate('/projects')}>View All Projects</Button>
        </DialogFooter>
          {/* <FlexRow className="w-full bg-background">
            <DialogClose className="w-full"><Button className="bg-gray-400 p-2 hover:bg-gray-500 transition duration-300 rounded-md text-white hover font-bold cursor-pointer w-full text-lg">Close</Button></DialogClose>
            <Button className="w-1/2 cursor-pointer hover:bg-accent/90 transition duration-300 bg-accent text-lg" onClick={()=> navigate('/projects')}>View All Projects</Button>

          </FlexRow> */}
      </DialogContent>
    </Dialog>
  )
}

export default ProjectsModal