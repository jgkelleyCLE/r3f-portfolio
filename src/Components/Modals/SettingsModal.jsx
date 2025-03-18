
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { IoSettingsOutline } from "react-icons/io5";
  import { Switch } from "@/components/ui/switch"
import { useDispatch, useSelector } from 'react-redux';
import { setControls, setLowGravity } from '@/redux/settingsSlice';
import { Keycap } from "keycap";
import { FlexRow } from '../UI';



const SettingsModal = () => {

    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const lowGravity = useSelector(state => state.settings.lowGravity)
    const showControls = useSelector(state => state.settings.controls)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="select-none">
        <div className="bg-white p-2 cursor-pointer hover:bg-gray-200 transition duration-300 rounded-md text-black font-bold flex items-center justify-center gap-2 md:w-36">
        <IoSettingsOutline className="text-2xl" />

            <p className="hidden md:flex">Settings</p>
        </div>
      </DialogTrigger>
      <DialogContent className="[&>button]:text-accent">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl text-primary">Settings</DialogTitle>
          <DialogDescription className="hidden">Choose your character to play with</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-2 mx-auto w-full">
            
          <div className="border border-gray-300 p-2 w-full rounded-md flex items-center justify-between">
            <div className="flex flex-col items-start">
            <h1 className="text-lg font-bold text-primary">Low Gravity</h1>
            <p className="text-xs text-gray-500">Ability to jump higher</p>
            </div>
            <Switch className="data-[state=checked]:bg-accent data-[state=unchecked]:bg-primary" checked={lowGravity} onCheckedChange={(checked)=> dispatch(setLowGravity(checked))} />

          </div>
          <div className="border border-gray-300 p-2 w-full rounded-md flex items-center justify-between">
            <div className="flex flex-col items-start">
            <h1 className="text-lg font-bold text-primary">Show Controls Overlay</h1>
            <p className="text-xs text-gray-500">Desktop only</p>
            </div>
            <Switch className="data-[state=checked]:bg-accent data-[state=unchecked]:bg-primary" checked={showControls} onCheckedChange={(checked)=> dispatch(setControls(checked))} />

          </div>



          <div className="border border-gray-300 p-2 w-full rounded-md flex flex-col gap-2 items-start text-primary">
            <h1 className="text-lg font-bold -mb-1">Controls</h1>

          <FlexRow>
            
            Movement &mdash; 
            <div className="flex flex-col items-center">
                <FlexRow>
                  <Keycap activeKey="W">W</Keycap> <Keycap activeKey="A">A</Keycap> <Keycap activeKey="S">S</Keycap> <Keycap activeKey="D">D</Keycap>
                </FlexRow>
                <h1 className="italic my-2 mx-4 text-accent">OR</h1>
                <FlexRow>
                    <Keycap activeKey="ArrowUp">↑</Keycap> <Keycap activeKey="ArrowLeft">←</Keycap> <Keycap activeKey="ArrowDown">↓</Keycap> <Keycap activeKey="ArrowRight">→</Keycap>
                </FlexRow>
            
            </div>
          </FlexRow>

            <FlexRow>
              <h1 className="mr-3">Jump &mdash;</h1> <Keycap className="" activeKey="Space">Space</Keycap>
            </FlexRow>

            <FlexRow>
              <h1 className="mr-3"> Sprint &mdash;</h1>
              <Keycap activeKey="Shift">Shift</Keycap>
            </FlexRow>

            <FlexRow>
              <h1 className="mr-2">Interact &mdash;</h1>
              <Keycap activeKey="control">ctrl</Keycap>
            </FlexRow>

            <h1 className="text-gray-400 italic text-sm">Rotate and zoom with mouse</h1>

          </div>
            
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SettingsModal