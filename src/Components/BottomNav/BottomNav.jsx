import React from 'react'
import CharacterSelector from '../CharacterSelector/CharacterSelector'
import AboutModal from '../Modals/AboutModal'
import ProjectsModal from '../Modals/ProjectsModal'
import LeaderboardModal from '../Modals/LeaderboardModal'
import SettingsModal from '../Modals/SettingsModal'
import HelpModal from '../Modals/HelpModal'
import { Stats } from '@react-three/drei'
import Timer from '@/FiberComponents/Timer'
import FinishChallengeModal from '../Modals/FinishChallengeModal'

const BottomNav = () => {
  return (
    <div className="bg-blue-950/20 !p-3 h-12 rounded-lg px-4 absolute bottom-1 left-1/2 -translate-x-1/2 w-[95%] max-w-[1800px] flex items-center justify-between z-40">
        
        {/* <div className="flex items-center justify-between"> */}
       
            <CharacterSelector />
            <LeaderboardModal />
            <Timer />
            <SettingsModal />
            <HelpModal />

            {/* //GATE MODALS */}
            <div className="hidden">
            <AboutModal />
            <ProjectsModal />
            <FinishChallengeModal />
            </div>
        {/* </div> */}
    </div>
  )
}

export default BottomNav