import ButtonSpinner from '@/Components/ButtonSpinner'
import { Button } from '@/Components/ui/button'
import { setElapsedTime, setRaceGate } from '@/redux/gateSlice'
import { usePostScoreMutation } from '@/redux/scoreApi'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'

const SubmitTimeForm = ({ elapsedTime, setOpen }) => {

    
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [isTouch, setIsTouch] = useState(false)
    const character = useSelector(state => state.settings.character)
    console.log("CHARACTER: ", character)

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(pointer: coarse)");
        setIsTouch(mediaQuery.matches);
      }, []);

    
      const device = isTouch ? "mobile" : "desktop"
      

    const [submitTime, { data: timeData, isSuccess, isLoading, isError, error }] = usePostScoreMutation()

    const timeHandler = (e) => {
        e.preventDefault()

        if(username.trim() === ""){
            toast.error("Username cannot be empty!")
            return
        }else if(username.length > 15){
            toast.error("Username must be less than 15 characters!")
            return
        }else {
            submitTime({ username, time: elapsedTime, device, character })
        }
        

    }

    

    useEffect(()=> {
        if(isSuccess){
            toast.success("Time submitted successfully!")
            dispatch(setRaceGate(false))
            dispatch(setElapsedTime(0))
            
        }

        if(isError){
            toast.error("Error submitting time!")
            // console.log("Error submitting time: ", error)
        }
    }, [isSuccess, isError])

  return (
    <form className="w-full flex justify-center items-center" onSubmit={timeHandler}>
        <input className="p-2 rounded-l-md border-2 border-primary text-lg text-primary focus:outline-none" 
        placeholder="Username" 
        value={username} 
        onChange={(e)=> setUsername(e.target.value)}
        autoFocus={false}
        />
        
        <button type="submit" className="bg-accent border-2 border-accent hover:bg-accent/90 cursor-pointer transition duration-300 text-white p-2 text-lg rounded-r-md" >{isLoading ? <ButtonSpinner /> : "Submit"}</button>
    </form>
  )
}

export default SubmitTimeForm