// src/components/projects/FeaturedProjects.js
import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { data as companyProjects } from '../../companyProjects';

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

const ViewAllButton = styled.a`
  display: inline-block;
  margin: 2rem auto 0;
  padding: 0.8rem 2rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s, background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.secondary};
    transform: translateY(-2px);
  }
`;

const FeaturedProjects = () => {
  // Select first 3 projects for featured section
  const featuredProjects = companyProjects.slice(0, 3);

  return (
    <ProjectsContainer>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Featured Projects
      </h2>
      <ProjectsGrid>
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage>
              <img src={project.image} alt={project.name} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLinks>
                <ProjectLink
                  href={project.html_url}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FaExternalLinkAlt /> Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      <div style={{ textAlign: 'center' }}>
        <ViewAllButton href='/portfolio'>View All Projects</ViewAllButton>
      </div>
    </ProjectsContainer>
  );
};

export default FeaturedProjects;
