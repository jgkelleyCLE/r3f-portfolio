import PageSpinner from '@/Components/PageSpinner';
import ProjectCard from '@/Components/ProjectCard/ProjectCard';
import { ContentContainer, FlexColumn, PageContainer, PageHeader } from '@/Components/UI';
import { useGetAllProjectsQuery } from '@/redux/projectApi';
import React, { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    document.title = 'Jack Kelley | Projects';
  }, []);

  const { data: projects, isLoading, isError, isSuccess, error } = useGetAllProjectsQuery();

  let content;

  if (isLoading) {
    content = (
      <FlexColumn>
        <PageSpinner />
      </FlexColumn>
    );
  } else if (isSuccess) {
    content = projects?.map((item) => <ProjectCard key={item._id} item={item} />);
  }

  return (
    <PageContainer>
      <ContentContainer>
        <PageHeader>Projects</PageHeader>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">{content}</div>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default Projects;
