import React, { useState } from 'react';
import { GoInfo } from 'react-icons/go';
import { FaReact, FaCubes } from 'react-icons/fa';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import TechCard from '../ProjectCard/TechCard';
import { FlexRow } from '../UI';

const HelpModal = () => {
  const [open, setOpen] = useState(false);

  const technologies = ['React Three Fiber', 'React', 'Shadcn/ui', 'Redux', 'TailwindCSS', 'Express', 'MongoDB'];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="select-none">
        <div className="bg-white p-2 cursor-pointer hover:bg-gray-200 transition duration-300 rounded-md text-black font-bold flex items-center justify-center gap-2 md:w-36">
          <GoInfo className="text-2xl" />
          <p className="hidden md:flex">Info</p>
        </div>
      </DialogTrigger>
      <DialogContent className="[&>button]:text-accent max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl md:text-2xl">About This Project</DialogTitle>
          <DialogDescription className="hidden">Info about this app</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg text-accent font-semibold mb-2 flex items-center gap-2">
              <FaCubes className="text-accent" /> Interactive 3D Portfolio
            </h3>
            <p className="text-primary">
              Welcome to my interactive 3D portfolio! This project combines traditional web development with modern 3D
              graphics to create an immersive experience. Explore the environment, discover my projects, and learn more
              about my skills as a developer.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"></h3>
            <FlexRow className="flex flex-wrap justify-around gap-2">
              {technologies.map((item, index) => (
                <TechCard key={index} item={item} />
              ))}
            </FlexRow>
          </div>

          <div className="text-sm text-gray-500 pt-2 border-t">
            <p>Created by Jack Kelley &copy; {new Date().getFullYear()}</p>
            <p>Thanks for exploring my interactive portfolio!</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpModal;
