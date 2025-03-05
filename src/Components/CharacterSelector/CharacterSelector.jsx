import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { setCharacter } from '@/redux/settingsSlice'
import { PiUserSwitchLight } from "react-icons/pi";
import { CharacterGrid } from '../UI'


export const characters = [
  {
    id: 1,
    name: "Mage",
    image: "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FMage.jpg?alt=media&token=81552ef6-57e4-49da-a307-cce9c2b74279"
  },
  {
    id: 2,
    name: "Skeleton",
    image: "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FWarriorSkelly.jpg?alt=media&token=4329f710-e88e-469f-bd1c-c895fba17aad"
  },
  {
    id: 3,
    name: "Robot",
    image: "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FRobot.jpg?alt=media&token=3363b4b9-8834-4ac7-90e3-d1b52ac577c4"
  },
  {
    id: 4,
    name: "Paladin",
    image: "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FPaladin.jpg?alt=media&token=489a74d8-3ca6-4b25-86f3-ea37b011251a"
  }
  
]

const CharacterSelector = () => {

  const [open, setOpen] = useState(false)

    const [selected, setSelected] = useState(null)

    const selectedCharacter = useSelector(state => state.settings.character)
    const dispatch = useDispatch()

    

    const characterHandler = (character) => {
      dispatch(setCharacter(character))
      setOpen(false)
    }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger>
    <div className="bg-white p-2 cursor-pointer hover:bg-gray-200 transition duration-300 rounded-md text-black font-bold flex items-center gap-2 md:w-36">
    <PiUserSwitchLight className="text-2xl" />

      <p className="hidden md:flex">Character</p>
    </div>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="text-primary text-xl md:text-2xl">Choose Your Character</DialogTitle>
      <DialogDescription className="hidden">Choose your character to play with</DialogDescription>
    </DialogHeader>
    <CharacterGrid className="">
        
        {
          characters.map(item => (
            <div key={item.id} className={` ${selectedCharacter === item.name ? "border-accent" : 'border-transparent'} flex flex-col items-center border-6 rounded-md `} onClick={() => characterHandler(item.name)}>
              <img src={item.image} className="h-40 w-full md:h-60 md:w-48 object-cover rounded-t-md cursor-pointer hover:opacity-90 transition duration-300 " />
              <h1 className="text-xl text-primary">{item.name}</h1>
          </div>
          ))
        }
        
    </CharacterGrid>
  </DialogContent>
</Dialog>
  )
}

export default CharacterSelector