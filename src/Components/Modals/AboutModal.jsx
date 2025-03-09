import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useDispatch, useSelector } from 'react-redux'
import { setAboutGate } from '@/redux/gateSlice'
import { FlexColumn, FlexRow } from '../UI'
import TechCard from '../ProjectCard/TechCard'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

const AboutModal = () => {

    const [imageLoaded, setImageLoaded] = useState(false)

    const aboutGate = useSelector(state => state.gate.aboutGate)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const frontSkills = [
      "React",
      "NextJS",
      "Redux",
      "TailwindCSS"
    ]

    const backSkills = [
      "NodeJS",
      "Express",
      "MongoDB",
      "PostgreSQL"
    ]


  return (
    <Dialog open={aboutGate} onOpenChange={() => dispatch(setAboutGate(false))}>
  <DialogTrigger></DialogTrigger>
  <DialogContent className="min-w-11/12 border-primary [&>button]:text-accent">
    <DialogHeader>
      <DialogTitle className="text-primary text-xl md:text-2xl">About Me</DialogTitle>
      <DialogDescription>
        
      </DialogDescription>
      <FlexRow className="flex-col md:flex-row gap-4 text-primary"> 
      
      
              <img 
      
                src="https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FPortoJack.webp?alt=media&token=b2c64a37-d338-4cd7-90a3-e88fd4ce7541" 
                className={`w-full max-w-[400px] max-h-[800px] h-[200px] md:h-full object-cover transition-opacity rounded-md duration-300`}
                alt="Profile picture in Portugal" 
                
              />
            

                <div className="flex flex-col items-start">
                 
                 
          <div>
          <p className="text-start">I'm Jack, a self-taught web developer with a passion for building modern, interactive web experiences. While my background isn't traditionally in tech, I've always been drawn to problem-solving and creating things from scratch. </p>
          </div>

          <div className="hidden md:block">
          {/* <h1 className="font-bold text-xl my-2">My Journey</h1> */}
          <p className="my-4">Transitioning into tech has been an exciting and fulfilling challenge. What started as tinkering with our family business' Wordpress website, has grown into building large full-stack applications, aimed at streamlining company inefficiencies and smoother daily operations.</p>
          </div>

          
          <h1 className="text-xl font-bold my-4">Preferred Technologies</h1>
            <FlexColumn className="gap-1">
          <FlexRow className="mx-auto gap-4">
          {
            frontSkills.map((item, index) => (
              <TechCard item={item} key={index} />
            ))
          }
          </FlexRow>
          <FlexRow className="mx-auto gap-4">
          {
            backSkills.map((item, index) => (
              <TechCard item={item} key={index} />
            ))
          }
          </FlexRow>
          </FlexColumn>
          <Button onClick={()=> navigate('/about')} className="w-full mt-2 font-bold text-lg hover:bg-primary/80 cursor-pointer transition duration-300">About Me Page</Button>
        
      </div>
            </FlexRow>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default AboutModal