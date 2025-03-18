import { useSendEmailMutation } from '@/redux/emailApi'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ButtonSpinner from '../ButtonSpinner'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setContactGate } from '@/redux/gateSlice'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })



    const pathname = useLocation().pathname
    const dispatch = useDispatch()


    const [sendEmail, { data: emailData, isLoading, isSuccess, isError, error }] = useSendEmailMutation()


    const submitHandler = (e) => {
        e.preventDefault()

    

        if(formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === ''){
            toast.error("Please fill out all fields")
            return
        }else if(!formData.email.includes('@')){
            toast.error("Please enter a valid email")
            return
        }else {
            sendEmail({ ...formData, path: pathname })
        }


        
    }

    useEffect(() => {

        if(isSuccess){
            toast.success("Email sent successfully")

            if(pathname === "/"){
                dispatch(setContactGate(false))
            }

            setFormData({
                name: '',
                email: '',
                message: ''
            })
        }

        if(isError){
            console.log("ERROR: ", error)
            toast.error("Email failed to send")
        }

    }, [isSuccess, isError])


  return (
    <div className="w-full">
    <form className="flex flex-col gap-2 w-full rounded-md" onSubmit={submitHandler}>
        <label htmlFor="name" className="text-primary font-bold -mb-1.5">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={(e)=> setFormData({ ...formData, name: e.target.value })} className="p-2 border-2 text-primary border-foreground rounded-md" />

        <label htmlFor="email" className="text-primary font-bold -mb-1.5">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={(e)=> setFormData({ ...formData, email: e.target.value })} className="p-2 border-2 border-foreground text-primary rounded-md" />

        <label htmlFor="message" className="text-primary font-bold -mb-1.5">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={(e)=> setFormData({ ...formData, message: e.target.value })} className="p-2 border-2 border-foreground text-primary rounded-md h-36"></textarea>

        <button type="submit" className="bg-accent flex items-center justify-center hover:bg-accent/85 text-white font-bold p-2 rounded-md transition duration-300 cursor-pointer">{isLoading ? <ButtonSpinner /> : "Send"}</button>
        </form>
        </div>
  )
}

export default ContactForm