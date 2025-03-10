import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useGetScoresQuery } from '@/redux/scoreApi'
import { FlexColumn, FlexRow } from '../UI'
import PageSpinner from '../PageSpinner'
import { GoTrophy } from "react-icons/go";
import { IoDesktopOutline } from "react-icons/io5";
import { ImMobile } from "react-icons/im";



  const LeaderboardModal = () => {

    const [open, setOpen] = useState(false)

    const { data: times, isLoading, isSuccess, isError, error } = useGetScoresQuery()

     // Format time from seconds to minutes:seconds
     const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      };

  


      let content;

      if(isLoading){
        content = <FlexColumn>
            <PageSpinner />
        </FlexColumn>
      }else if(isSuccess){
        const leaderboardSlots = Array(15).fill(null).map((_, index) => {
          // If there's data for this slot, use it; otherwise, use a placeholder
          return times && index < times.length ? times[index] : null;
      })
    
    
     const charIcons = {
      mech: "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/MechIcon.webp?alt=media&token=c6071357-c942-4694-b890-de442a01858a",
      robot: "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/RobotIcon.webp?alt=media&token=2296f3c4-0440-4c86-a4ad-e3a31c83f695",
      robot2: "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/RobIcon.webp?alt=media&token=f99b26f2-8210-461b-923b-0c3f38942710",
      mage: "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/MageIcon.webp?alt=media&token=45585859-aaa5-4b9e-ab32-d3e67cf31aca",
      orc: "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/OrcIcon.webp?alt=media&token=71a0277b-1ad0-4c65-9c8d-4f2dc35729c5",
      paladin: "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/PaladinIcon.webp?alt=media&token=1e9cedab-7cbb-4522-96b5-6ed7aa95b3d3",
      druid: "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/DruidIcon.webp?alt=media&token=c164a075-a5b9-4c38-99c5-b6157c64ef87"
     }

    
      

      content = <FlexColumn>
            {
                leaderboardSlots.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-md border-2 border-primary w-full justify-between my-1">

                  
                      
                        {item ? (
                          <>

                    <FlexRow>
                        <h1 className="mr-1">{index + 1}</h1>
                      <div className="flex flex-col items-start">
                        <FlexRow>
                          <h1 className="font-bold text-primary text-lg md:text-xl">{item?.username}</h1>
                          <h1>{item?.device === 'mobile' ? <ImMobile /> : <IoDesktopOutline />}</h1>
                        </FlexRow>
                        <h1 className="text-xs md:text-sm text-primary line-clamp-1">{new Date(item?.createdAt).toLocaleString()}</h1>
                      </div>
                          
                          <img src={item?.character === "Mech Warrior" ? charIcons.mech : item?.character === "Paladin" ? charIcons.paladin : item?.character === "Mage" ? charIcons.mage : item?.character === "Robot" ? charIcons.robot2 : item?.character === "Orc" ? charIcons.orc : item.character === "Druid" ? charIcons.druid : null} className={`object-contain w-7 h-7 md:w-10 md:h-10`} />
                        </FlexRow>

                      
                      <h1 className="font-mono text-accent font-bold">{formatTime(item?.time)}</h1>

                            </>
                        ) : (
                            <>
                                <h1 className="font-bold text-xl text-gray-400">--</h1>
                                <h1 className="text-sm text-gray-400">--</h1>
                                <h1 className="font-mono font-bold text-gray-400">-:--</h1>
                            </>
                        )}
                    </div>
                ))
            }
        </FlexColumn>
  }
  
    return (
         <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <div className="bg-white p-2 cursor-pointer hover:bg-gray-200 transition duration-300 rounded-md text-black font-bold flex items-center justify-center gap-2 md:w-36">
                <GoTrophy className="text-2xl" />
                <p className="hidden md:flex">Leaderboard</p>
            </div>
          </DialogTrigger>
          <DialogContent className="[&>button]:text-accent">
            <DialogHeader>
              <DialogTitle className="text-primary text-xl md:text-2xl">Top 15 Challenge Times</DialogTitle>
              <DialogDescription className="hidden"></DialogDescription>
            </DialogHeader>
            <div className="h-auto max-h-[400px] overflow-y-scroll">
              {content}
            </div>
          </DialogContent>
        </Dialog>
    )
  }

  export default LeaderboardModal