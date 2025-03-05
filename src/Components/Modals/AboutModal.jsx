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

const AboutModal = () => {

    const [imageLoaded, setImageLoaded] = useState(false)

    const aboutGate = useSelector(state => state.gate.aboutGate)
    const dispatch = useDispatch()

    useEffect(() => {
        const img = new Image()
        img.src = "https://firebasestorage.googleapis.com/v0/b/travel-website-28d46.appspot.com/o/Do%20Not%20Delete%2FPortugalWebp.webp?alt=media&token=12d54a59-8aa4-431d-8bc6-81976dc08501"
        img.onload = () => setImageLoaded(true)
      }, [])

  return (
    <Dialog open={aboutGate} onOpenChange={() => dispatch(setAboutGate(false))}>
  <DialogTrigger></DialogTrigger>
  <DialogContent className="min-w-11/12 border-primary">
    <DialogHeader>
      <DialogTitle className="text-primary text-xl md:text-2xl">About Me</DialogTitle>
      <DialogDescription>
        
      </DialogDescription>
      <div className="flex flex-col items-center"> 
      
      {/* Image container with fixed height to prevent layout shift */}
      {/* <div className="w-full md:w-3/4 h-[500px] relative rounded-md overflow-hidden bg-gray-100"> */}
              {/* Loading skeleton */}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse bg-gray-200 w-full h-full"></div>
                </div>
              )}
              
              {/* Image with explicit width, height, and loading="eager" */}
              <img 
                 
                // src="https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/RedFiatWebP.webp?alt=media&token=105d6c1e-b226-436b-8cb2-2cf6b1275b5e" 
                src="https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FPortoJack.webp?alt=media&token=b2c64a37-d338-4cd7-90a3-e88fd4ce7541" 
                className={`w-full max-w-[400px] max-h-[800px] h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity rounded-md duration-300`}
                alt="Profile picture in Portugal" 
                loading="eager"
                onLoad={() => setImageLoaded(true)}
              />
            </div>

                <div className="flex flex-col items-center">
                  {/* //ABOUT ME ----------------------------- */}


                </div>
            <p></p>
        
      
      {/* </div> */}
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default AboutModal