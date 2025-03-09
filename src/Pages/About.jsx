
import { ContentContainer, FlexRow, PageContainer, PageHeader } from '@/Components/UI'
import React, { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'


const About = () => {




  return (
    <PageContainer >
      <ContentContainer>
      <PageHeader>About</PageHeader>

      {/* <img src="https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/RedFiatWebP.webp?alt=media&token=105d6c1e-b226-436b-8cb2-2cf6b1275b5e" className="w-full h-1/3 object-cover rounded-md mb-5" /> */}
      <div className="w-full flex items-center justify-center">
          <img src="https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/Portugal_Jack.webp?alt=media&token=3d3c93ca-5249-4ad4-b7b3-ee1f15df1dc9" className=" h-full max-h-[400px] object-cover rounded-md mb-5" />

      </div>

      <div className="flex flex-col gap-6">
          <div>
          <p>Hi, I'm Jack, a self-taught web developer with a passion for building modern, interactive web experiences. While my background isn't traditionally in tech, I've always been drawn to problem-solving and creating things from scratch. </p>
          </div>

          <div>
            <h1 className="font-bold text-xl mb-1">My Skills</h1>
            <ul className="ml-2">
              <li>•  Frontend: React, Next.js, ChakraUI, ShadCN, Tailwindcss</li>
              <li>•  Backend: Node.js, Express, MongoDB, PostgreSQL</li>
            </ul>
          </div>

          <div>
          <h1 className="font-bold text-xl mb-1">My Journey</h1>
          <p>Transitioning into tech has been an exciting and fulfilling challenge. What started as tinkering with our family business' Wordpress website, has grown into building large full-stack applications, aimed at streamlining company inefficiencies and smoother daily operations.</p>
          </div>

          <div>
          <h1 className="font-bold text-xl mb-1">What I'm Working On</h1>
          <p>Right now, I'm focused on building dynamic web experiences, exploring 3D interactions with React Three Fiber, and improving my full-stack development skills.</p>
          </div>

          <div>
          <h1 className="font-bold text-xl mb-1">Let's Connect!</h1>
          <p>I'm always open to new opportunities, collaborations, or challenges in the web development space. Feel free to check out my work and reach out!</p>
          </div>

          <FlexRow>
            <a href={'https://github.com/jgkelleyCLE'}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black hover:bg-black/60 font-bold transition duration-300 text-white p-2 rounded-md flex items-center justify-center gap-2 "
              >
              <FaGithub className="text-2xl text-white" />
                Github</a>
          </FlexRow>
      </div>
      </ContentContainer>
    </PageContainer>
  )
}

export default About