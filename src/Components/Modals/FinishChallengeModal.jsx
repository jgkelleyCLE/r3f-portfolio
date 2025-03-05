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
import { setRaceGate } from '@/redux/gateSlice'
import { useLazyGetScoresQuery } from '@/redux/scoreApi'
import SubmitTimeForm from '@/FiberComponents/Models/Race/SubmitTimeForm'
import { FlexColumn } from '../UI'

const FinishChallengeModal = () => {

    
    const [open, setOpen] = useState(false)
    const [qualifiesForLeaderboard, setQualifiesForLeaderboard] = useState(false)
    const [leaderboardPosition, setLeaderboardPosition] = useState(null)

    const [triggerFetch, { data: leaders, isLoading, isSuccess, isError, error }] = useLazyGetScoresQuery()
    

    const dispatch = useDispatch()
    const raceGate = useSelector(state => state.gate.raceGate)
    const elapsedTime = useSelector(state => state.gate.elapsedTime)

    // Format time from seconds to minutes:seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  useEffect(()=> {
    if(raceGate){
        triggerFetch()
    }
  }, [raceGate])

  // Check if time qualifies for leaderboard
useEffect(() => {
  if (isSuccess && leaders) {
    // Create a copy of leaders and sort by time
    const sortedLeaders = [...leaders].sort((a, b) => a.time - b.time);
    
    // Find the position where the user's time would rank
    let position = 1;
    for (let i = 0; i < sortedLeaders.length; i++) {
      if (elapsedTime <= sortedLeaders[i].time) {
        break;
      }
      position++;
    }
    
    // Determine if the time qualifies (either in top 15 or leaderboard isn't full)
    const qualifies = position <= 15 || sortedLeaders.length < 15;
    
    setQualifiesForLeaderboard(qualifies);
    
    setLeaderboardPosition(position);
  }
}, [isSuccess, leaders, elapsedTime])

  return (
    <Dialog open={raceGate} onOpenChange={()=> dispatch(setRaceGate(false))}>
        <DialogTrigger></DialogTrigger>
    <DialogContent onInteractOutside={(e) => {
          e.preventDefault();
        }}
        className="[&>button]:hidden"
        >
                <DialogHeader>
                  <DialogTitle>Challenge Complete</DialogTitle>
                  <DialogDescription className="hidden">Choose your character to play with</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center mx-auto">
                    <h1 className="text-lg md:text-xl">Congratulations on finishing the challenge with a time of <span className="font-bold">{formatTime(elapsedTime)}</span>!</h1>
                    
                    {
                        qualifiesForLeaderboard ? (
                            <FlexColumn>
                            
                            <h1 className="text-green-500 text-lg md:text-xl">You qualify for the leaderboard with the {leaderboardPosition}{leaderboardPosition === 1 ? 'st' : leaderboardPosition === 2 ? 'nd' : leaderboardPosition === 3 ? 'rd' : 'th'} fastest time!</h1>
                            <SubmitTimeForm elapsedTime={elapsedTime} setOpen={setOpen} />
                            </FlexColumn>
                        ) : (
                            <h1 className="text-red-500">You did not qualify for the leaderboard.</h1>
                        )
                    }
                    <DialogClose className="hidden" />
                </div>
              </DialogContent>
            </Dialog>
  )
}

export default FinishChallengeModal