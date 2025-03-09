import React from 'react'
import { FlexColumn, FlexRow } from '../UI'
import { 
    SiReact, SiNextdotjs, SiRedux, SiMongodb, 
    SiExpress, SiNodedotjs, SiTailwindcss, SiFirebase,
    SiSocketdotio, SiTypescript, SiJavascript, SiCss3,
    SiHtml5, SiVuedotjs, SiAngular, SiGithub,
    SiVercel, SiNetlify, SiHeroku, SiPostgresql
  } from 'react-icons/si'


const TechCard = ({ item }) => {

    const techIcons = {
        // Frameworks
        'React': <SiReact className="text-blue-400" />,
        'NextJS': <SiNextdotjs className="text-black" />,
        
        
        // State Management
        'Redux': <SiRedux className="text-purple-600" />,
        'Redux Toolkit': <SiRedux className="text-purple-600" />,
        
        // Backend & Databases
        'MongoDB': <SiMongodb className="text-green-600" />,
        'PostgreSQL': <SiPostgresql className="text-[#336791]" />,
        'Express': <SiExpress className="text-fallback" />,
        'NodeJS': <SiNodedotjs className="text-green-500" />,
        'Firebase': <SiFirebase className="text-yellow-500" />,
        'Socket.io': <SiSocketdotio className="text-black" />,

        
        // Styling
        'TailwindCSS': <SiTailwindcss className="text-blue-400" />,
        'CSS': <SiCss3 className="text-blue-600" />,
        'HTML': <SiHtml5 className="text-orange-500" />,
        
        // Languages
        'TypeScript': <SiTypescript className="text-blue-600" />,
        'JavaScript': <SiJavascript className="text-yellow-400" />,
        
        // Deployment
        'GitHub': <SiGithub className="text-black" />,
        'Netlify': <SiNetlify className="text-blue-400" />,
        
        
        // Default for unknown tech
        'default': <div className="w-5 h-5 bg-gray-300 rounded-full" />
      }

      // Get the icon for this tech item, or use default if not found
  const Icon = techIcons[item] || techIcons.default

  return (
    <FlexRow className="">
        <FlexColumn>
            <p className="text-3xl">{Icon}</p>
            <p className="text-xs text-primary">{item}</p>

        </FlexColumn>
    </FlexRow>
  )
}

export default TechCard