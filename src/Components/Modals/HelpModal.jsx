import React, { useState } from 'react'
import { GoInfo } from "react-icons/go";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"




const HelpModal = () => {
    
    const [open, setOpen] = useState(false)

    const technologies = ["Three.js, React, ShadCn, Rapier, Drei, Postprocessing, Redux, TailwindCSS, React-Three-Fiber"]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="select-none">
            <div className="bg-white p-2 cursor-pointer hover:bg-gray-200 transition duration-300 rounded-md text-black font-bold flex items-center justify-center gap-2 md:w-36">
            <GoInfo className="text-2xl" />
    
                <p className="hidden md:flex">Info</p>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-primary text-xl md:text-2xl">Info</DialogTitle>
              <DialogDescription className="hidden">Info about this app</DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2 mx-auto">
                
                
                
            </div>
          </DialogContent>
        </Dialog>
  )
}

export default HelpModal