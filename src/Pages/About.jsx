import TechCard from '@/Components/ProjectCard/TechCard';
import { ContentContainer, FlexRow, PageContainer, PageHeader } from '@/Components/UI';
import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Skeleton } from '@/components/ui/skeleton';

const About = () => {
  useEffect(() => {
    document.title = 'Jack Kelley | About';
  }, []);

  const [imageLoaded, setImageLoaded] = useState(false);

  const frontSkills = ['React', 'NextJS', 'Redux', 'TailwindCSS'];

  const backSkills = ['NodeJS', 'Express', 'MongoDB', 'PostgreSQL'];

  return (
    <PageContainer>
      <ContentContainer>
        <PageHeader>About</PageHeader>

        {/* <div className="h-[400px] w-auto max-w-[500px]">
              <Skeleton className="h-full max-h-[400px] rounded-md" />
            </div> */}
        <div className="w-full flex items-center justify-center">
          {!imageLoaded && (
            <div className="h-[400px] w-auto max-w-[500px]">
              <Skeleton className="h-full max-h-[400px] rounded-md" />
            </div>
          )}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/Portugal_Jack.webp?alt=media&token=3d3c93ca-5249-4ad4-b7b3-ee1f15df1dc9"
            className=" h-full max-h-[400px] object-cover rounded-md mb-5"
            alt="Jack Kelley Portrait"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p>
              My name is Jack, a self-taught web developer with a passion for building modern, interactive web
              experiences. While my background is not traditionally in tech, I have always been drawn to leveraging
              technology to solve everyday challenges.{' '}
            </p>
          </div>

          <div>
            <h1 className="font-bold text-xl mb-1">My Journey</h1>
            <p>
              Transitioning into tech has been an exciting and fulfilling adventure. What started as tinkering with our
              family business' Wordpress website has evolved into building large full-stack applications, aimed at
              streamlining company inefficiencies and refining daily operations.
            </p>
          </div>

          <div>
            <h1 className="font-bold text-xl mb-1">What I'm Working On</h1>
            <p>
              Right now, I'm focused on building dynamic web experiences, exploring 3D interactions with React Three
              Fiber, learning additional frameworks, and improving my full-stack development skills.
            </p>
          </div>

          <h1 className="font-bold text-xl ">Preferred Technologies</h1>

          <div className="w-full">
            {/* FRONTEND */}
            <div className="mb-2">
              <h2 className="text-lg font-medium mb-1">Frontend</h2>
              <FlexRow className="w-4/5 md:w-1/3 justify-between">
                {frontSkills.map((item, index) => (
                  <TechCard item={item} key={index} />
                ))}
              </FlexRow>
            </div>

            {/* {BACKEND} */}
            <div>
              <h2 className="text-lg font-medium mb-1">Backend</h2>
              <FlexRow className="w-4/5 md:w-1/3 justify-between">
                {backSkills.map((item, index) => (
                  <TechCard item={item} key={index} />
                ))}
              </FlexRow>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-xl mb-1">Let's Connect!</h1>
            <p>
              I'm always open to new opportunities, collaborations, or challenges in the web development space. Feel
              free to check out my work and reach out!
            </p>
          </div>

          <FlexRow>
            <a
              href={'https://github.com/jgkelleyCLE'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-black/60 font-bold transition duration-300 text-white p-2 rounded-md flex items-center justify-center gap-2 "
            >
              <FaGithub className="text-2xl text-white" />
              Github
            </a>
          </FlexRow>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default About;
