import PageSpinner from '@/Components/PageSpinner';
import TechCard from '@/Components/ProjectCard/TechCard';
import Slideshow from '@/Components/SlideShow/Slideshow';
import { ContentContainer, FlexColumn, FlexRow, PageContainer, PageHeader } from '@/Components/UI';
import { useGetProjectByIdQuery } from '@/redux/projectApi';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  const { data: project, isLoading, isError, isSuccess, error } = useGetProjectByIdQuery(id);

  return (
    <PageContainer>
      <ContentContainer>
        {isLoading ? (
          <FlexColumn>
            <PageSpinner />{' '}
          </FlexColumn>
        ) : null}
        <PageHeader className="underline underline-offset-3 decoration-accent">{project?.title}</PageHeader>
        <div className="flex flex-col items-center w-full px-2 ">
          <Slideshow photos={project?.images} />
        </div>

        <div className="flex flex-col items-start p-2">
          {/* <h1 className="font-bold text-primary underline underline-offset-3 decoration-accent text-xl md:text-2xl my-2">{project?.title}</h1> */}
          <p className=" text-md text-primary">{project?.description}</p>

          <FlexRow className=" flex-wrap w-full my-8">
            <div className="flex flex-col items-center gap-1 w-full md:flex-row">
              <a
                href={project?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/85 font-bold transition duration-300 text-white p-2 rounded-md flex items-center gap-2 w-full md:max-w-1/3 justify-center"
              >
                <FaExternalLinkAlt className="text-white text-xl" />
                View Project
              </a>
              <div className="flex items-center gap-2 w-full">
                <a
                  href={project?.githubFront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-black/80 font-bold transition duration-300 text-white p-2 rounded-md flex items-center justify-center gap-2 w-full"
                >
                  <FaGithub className="text-2xl text-white" />
                  Frontend
                </a>

                <a
                  href={project?.githubBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-black/80 font-bold transition duration-300 text-white p-2 rounded-md flex items-center justify-center gap-2 w-full"
                >
                  <FaGithub className="text-2xl text-white" />
                  Backend
                </a>
              </div>
            </div>
          </FlexRow>

          <div className="flex justify-center w-full">
            <FlexRow className="flex-wrap">
              {project?.techStack.map((item, index) => (
                <TechCard item={item} key={index} />
              ))}
            </FlexRow>
          </div>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default ProjectDetails;
