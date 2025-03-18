import React from 'react'
import Slideshow from '../SlideShow/Slideshow'
import TechCard from './TechCard'
import { useNavigate } from 'react-router-dom'

const MiniProjectCard = ({ item }) => {

    const photos = item.images
    const navigate = useNavigate()



  return (
    <div className=" flex flex-col rounded-md border border-primary w-full max-w-[1200px] my-2 h-full cursor-pointer" onClick={()=> navigate(`/project/${item._id}`)}>
            
           <div className="relative">

           
            <img src={item.images[0].image} alt="coverPhoto" className="w-full h-[275px] rounded-t-md object-cover hover:opacity-90 transition duration-300" />
            <div className={`absolute top-2 right-2 bg-white/40 p-1 rounded-lg`}>
                {
                    item.techStack.slice(0, 1).map(item => (
                        <TechCard item={item} />
                    ))
                }
            </div>
            </div>

        
        <div className="flex flex-col items-start  px-2">
            <h1 className="font-bold text-primary text-lg md:text-2xl underline decoration-accent underline-offset-3 ">{item.title}</h1>
            <h1 className="text-primary my-1">{item.shortDescription}</h1>
           
            </div>
    </div>
  )
}

export default MiniProjectCard