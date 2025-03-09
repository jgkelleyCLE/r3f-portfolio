import React, { useState } from 'react'
import { FlexRow } from '../UI'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import SelectedImageModal from '../Modals/SelectedImageModal';
import TechCard from './TechCard';
import Slideshow from '../SlideShow/Slideshow';

const ProjectCard = ({ item }) => {

    const [selected, setSelected] = useState(null)
    const [show, setShow] = useState(false)

    console.log("item: ", item)

    const photos = item.images

    console.log("PHOTOS: ", photos)

    const imageHandler = (image) => {

        setSelected(image)
        console.log("SELECTED: ", selected)
        setShow(true)

    }

  return (
    <div key={item._id} className=" flex flex-col items-center p-2 rounded-md border border-primary w-full max-w-[1200px] my-1 ">
              <div className="flex flex-col items-center w-full px-2 ">
              

              <Slideshow photos={photos} />
              
              </div>
              <div className="flex flex-col items-start p-2">
                <h1 className="font-bold text-primary underline underline-offset-3 decoration-accent text-xl md:text-2xl my-2">{item.title}</h1>
                <p className=" text-md text-primary">{item.description}</p>
                
                <FlexRow className="my-2 flex-wrap w-full">

                <div className="flex flex-col items-center gap-1 w-full md:flex-row">
                  <a href={item.link}
                  target="_blank" 
                rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/85 font-bold transition duration-300 text-white p-2 rounded-md flex items-center gap-2 w-full md:max-w-1/3 justify-center"
                  >
                    <FaExternalLinkAlt className="text-white text-xl" />
                    View Project</a>
                <div className="flex items-center gap-2 w-full">
                
                  <a href={item.githubFront}
                  target="_blank" 
                rel="noopener noreferrer"
                  className="bg-black hover:bg-black/80 font-bold transition duration-300 text-white p-2 rounded-md flex items-center justify-center gap-2 w-full"
                  >
                    <FaGithub className="text-2xl text-white" />
                    Frontend</a>

                  <a href={item.githubBack}
                  target="_blank" 
                rel="noopener noreferrer"
                  className="bg-black hover:bg-black/80 font-bold transition duration-300 text-white p-2 rounded-md flex items-center justify-center gap-2 w-full"
                  >
                    <FaGithub className="text-2xl text-white" />
                    Backend</a>
                    </div>
                    </div>
                  </FlexRow>

                <div className="flex justify-center w-full">
                <FlexRow className="flex-wrap">
                {
                    item.techStack.map((item, index) => (
                        <TechCard item={item} key={index} />
                    ))
                }
                </FlexRow>
                </div>
                

              </div>

              {/* {
                open ? <SelectedImageModal selected={selected} setSelected={setSelected} show={show} setSHow={setShow} /> : null
              } */}
              
            </div>
  )
}

export default ProjectCard