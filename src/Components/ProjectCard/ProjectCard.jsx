import React, { useState } from 'react'
import { FlexRow } from '../UI'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import SelectedImageModal from '../Modals/SelectedImageModal';
import TechCard from './TechCard';

const ProjectCard = ({ item }) => {

    const [selected, setSelected] = useState(null)
    const [show, setShow] = useState(false)

    const imageHandler = (image) => {

        setSelected(image)
        console.log("SELECTED: ", selected)
        setShow(true)

    }

  return (
    <div key={item._id} className=" flex flex-col items-center p-2 rounded-md border border-primary w-full max-w-[1200px] my-1 ">
              <div className="flex flex-col items-center w-full px-2 ">
              <img className="w-full md:w-[500px] rounded-md" src={item.images[0].image} alt={item?.title}  />
              
              {/* <FlexRow className="w-full mr-4 mx-auto justify-center flex-wrap">
              {
                item.images.slice(1,6).map(image => (
                  <div key={image.id}>
                    <img className="w-20 rounded-md hover:opacity-70 transition duration-300 cursor-pointer" src={image.image} alt={item?.title} onClick={()=> imageHandler(image)}  />
                  </div>
                ))
              }
              </FlexRow> */}
              </div>
              <div className="flex flex-col items-start p-2">
                <h1 className="font-bold text-primary text-lg md:text-2xl mb-2">{item.title}</h1>
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