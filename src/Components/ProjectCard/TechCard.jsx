import React from 'react';
import { FlexColumn, FlexRow } from '../UI';
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
  SiFirebase,
  SiSocketdotio,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiGithub,
  SiNetlify,
  SiPostgresql,
  SiThreedotjs,
  SiShadcnui,
  SiSvelte,
  SiReactquery,
  SiMaplibre,
  SiSanity,
  SiVuedotjs,
} from 'react-icons/si';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const TechCard = ({ item }) => {
  const theme = useSelector((state) => state.settings.theme);

  const techIcons = {
    // Frameworks
    React: <SiReact className="text-blue-400" />,
    'React Three Fiber': (
      <SiThreedotjs
        className={`${theme === 'jack-midnight' ? 'text-white' : 'text-black'}`}
      />
    ),
    NextJS: (
      <SiNextdotjs
        className={`${theme === 'jack-midnight' ? 'text-white' : 'text-black'}`}
      />
    ),
    Svelte: <SiSvelte className="text-[#ff3e00]" />,
    Vue: <SiVuedotjs className="text-[#42b883]" />,

    // State Management
    Redux: <SiRedux className="text-purple-600" />,
    'Redux Toolkit': <SiRedux className="text-purple-600" />,
    'Tanstack Query': <SiReactquery className="text-[#FF4154]" />,

    // Backend & Databases
    MongoDB: <SiMongodb className="text-green-600" />,
    PostgreSQL: <SiPostgresql className="text-[#336791]" />,
    Express: <SiExpress className="text-fallback" />,
    NodeJS: <SiNodedotjs className="text-green-500" />,
    Firebase: <SiFirebase className="text-yellow-500" />,
    'Socket.io': <SiSocketdotio className="text-black" />,
    'Sanity.io': <SiSanity className="text-[#f24f1c]" />,

    // Styling
    TailwindCSS: <SiTailwindcss className="text-blue-400" />,
    'Shadcn/ui': (
      <SiShadcnui
        className={`${theme === 'jack-midnight' ? 'text-white' : 'text-black'}`}
      />
    ),
    CSS: <SiCss3 className="text-blue-600" />,
    HTML: <SiHtml5 className="text-orange-500" />,
    MapLibre: <SiMaplibre className="text-[#FF1C60]" />,

    // Languages
    TypeScript: <SiTypescript className="text-blue-600" />,
    JavaScript: <SiJavascript className="text-yellow-400" />,

    // Deployment
    GitHub: <SiGithub className="text-black" />,
    Netlify: <SiNetlify className="text-blue-400" />,

    // Default for unknown tech
    default: <div className="w-5 h-5 bg-gray-300 rounded-full" />,
  };

  // Get the icon for this tech item, or use default if not found
  const Icon = techIcons[item] || techIcons.default;

  const pathname = useLocation().pathname;

  return (
    <FlexRow className="">
      <FlexColumn>
        <p className={`${pathname === '/' ? 'text-4xl' : 'text-3xl'}`}>
          {Icon}
        </p>
        <p
          className={`${
            pathname === '/' ? '' : null
          } text-xs text-primary mt-[2px]`}
        >
          {item}
        </p>
      </FlexColumn>
    </FlexRow>
  );
};

export default TechCard;
