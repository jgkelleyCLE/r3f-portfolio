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
    
    
     
      

      content = <FlexColumn>
            {
                leaderboardSlots.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-md border-2 border-primary w-full justify-between my-1">

                  
                      
                        {item ? (
                          <>

                    <FlexRow>
                        <h1 className="mr-1">{index + 1}</h1>
                      <div className="flex flex-col items-start">
                        <h1 className="font-bold text-primary text-lg md:text-xl">{item?.username}</h1>
                        <h1 className="text-xs md:text-sm text-secondary line-clamp-1">{new Date(item?.createdAt).toLocaleString()}</h1>
                      </div>
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
          <DialogContent>
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