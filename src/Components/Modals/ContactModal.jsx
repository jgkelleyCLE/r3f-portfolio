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
import { setContactGate } from '@/redux/gateSlice'
import { FlexRow } from '../UI'
import ContactForm from '../Contact/ContactForm'
import ContactCanvas from '../Contact/ContactCanvas'

const ContactModal = () => {


    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const contactGate = useSelector(state => state.gate.contactGate)
  
    

  return (
    <Dialog open={contactGate} onOpenChange={()=> dispatch(setContactGate(false))}>
              <DialogTrigger className="select-none">
                
              </DialogTrigger>
              <DialogContent className="[&>button]:text-accent">
                <DialogHeader>
                  <DialogTitle className="text-primary text-xl md:text-2xl">
                    <div className="-mb-2">Contact Me</div> 
                    <span className="italic text-sm -mt-2">john.gerard.kelley@gmail.com</span>
                    </DialogTitle>
                  <DialogDescription className="hidden">Send me an email</DialogDescription>
                </DialogHeader>
                {/* <div className="flex items-center gap-2 mx-auto"> */}
                    
                    <FlexRow className="w-full flex flex-col md:flex-row md:gap-4">

                    {/* LEFT SIDE */}
                    <div className="w-full md:w-1/2 h-1/4 md:h-[500px] rounded-md" >
                    <ContactCanvas />
                    </div>

                      {/* RIGHT SIDE  */}
                      <div className="w-full md:w-1/2 h-3/4 md:h-[500px]" >
                        
                        <ContactForm />

                      </div>


                    </FlexRow>
                    
                {/* </div> */}
              </DialogContent>
            </Dialog>
  )
}

export default ContactModal