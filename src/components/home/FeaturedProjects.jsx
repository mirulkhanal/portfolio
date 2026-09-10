import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { curatedProjects } from '../../data/projects';
import {
  Eyebrow,
  SectionBlock,
  SectionHeader,
  SectionInner,
  SectionIntro,
  SectionTitle,
  SecondaryLink,
  Tag,
  TagList,
} from '../common/Section';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  display: grid;
  grid-template-rows: auto 1fr;
  min-width: 0;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1.15rem;
  background: ${({ theme }) => theme.surface};
  overflow: hidden;
  transition: border-color 160ms ease, transform 160ms ease,
    box-shadow 160ms ease;

  &:hover,
  &:focus-within {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 18px 45px ${({ theme }) => theme.shadow};
    transform: translateY(-3px);
  }
`;

const ProjectVisual = styled.div`
  position: relative;
  display: flex;
  min-height: 9rem;
  padding: 1.5rem;
  align-items: flex-end;
  justify-content: space-between;
  background: ${({ $tone, theme }) =>
    theme.projectTones[$tone] || theme.primarySoft};
  color: ${({ theme }) => theme.text};
`;

const ProjectImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 1.15rem;
  background: ${({ theme }) => theme.surface};
  object-fit: contain;
`;

const ProjectMark = styled.span`
  display: grid;
  width: 3.25rem;
  height: 3.25rem;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.visualBorder};
  border-radius: 0.9rem;
  background: ${({ theme }) => theme.visualSurface};
  color: ${({ theme }) => theme.visualText};
  font-size: 1rem;
  font-weight: 850;
  letter-spacing: -0.03em;
`;

const ProjectMeta = styled.span`
  position: relative;
  z-index: 1;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.visualSurface};
  color: ${({ theme }) => theme.visualText};
  font-size: 0.75rem;
  font-weight: 750;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: clamp(1.25rem, 4vw, 1.75rem);
`;

const ProjectEyebrow = styled.p`
  margin: 0 0 0.45rem;
  color: ${({ theme }) => theme.primary};
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: clamp(1.25rem, 3vw, 1.65rem);
`;

const ProjectDescription = styled.p`
  margin: 0.8rem 0 1.25rem;
  color: ${({ theme }) => theme.textMuted};
  line-height: 1.65;
`;

const Detail = styled.p`
  margin: 0 0 0.75rem;
  color: ${({ theme }) => theme.textSubtle};
  font-size: 0.9rem;
  line-height: 1.55;

  strong {
    color: ${({ theme }) => theme.text};
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.35rem;

  a {
    display: inline-flex;
    gap: 0.45rem;
    align-items: center;
    color: ${({ theme }) => theme.primary};
    font-size: 0.88rem;
    font-weight: 750;
  }
`;

const FooterAction = styled.div`
  margin-top: 2rem;
`;

export const CuratedProjectGrid = ({ projects = curatedProjects }) => (
  <ProjectsGrid>
    {projects.map((project) => (
      <ProjectCard key={project.id}>
        <ProjectVisual $tone={project.tone} aria-hidden='true'>
          {project.image ? (
            <ProjectImage
              src={project.image}
              alt=''
              width='640'
              height='360'
              loading='lazy'
            />
          ) : (
            <ProjectMark>
              {project.title
                .split(' ')
                .slice(0, 2)
                .map((word) => word[0])
                .join('')}
            </ProjectMark>
          )}
          <ProjectMeta>{project.year}</ProjectMeta>
        </ProjectVisual>
        <ProjectContent>
          <ProjectEyebrow>
            {project.eyebrow} · {project.kind} · {project.year}
          </ProjectEyebrow>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.summary}</ProjectDescription>
          <Detail>
            <strong>Role:</strong> {project.role}
          </Detail>
          <Detail>
            <strong>Contribution:</strong> {project.contribution}
          </Detail>
          <Detail>
            <strong>Outcome:</strong> {project.outcome}
          </Detail>
          <TagList aria-label={`${project.title} technology`}>
            {project.stack.map((technology) => (
              <Tag key={technology}>{technology}</Tag>
            ))}
          </TagList>
          <ProjectLinks>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'>
                Live project <FaExternalLinkAlt aria-hidden='true' />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target='_blank'
                rel='noopener noreferrer'>
                Source <FaGithub aria-hidden='true' />
              </a>
            )}
            {!project.repoUrl && !project.liveUrl && (
              <ProjectMeta>{project.access}</ProjectMeta>
            )}
          </ProjectLinks>
        </ProjectContent>
      </ProjectCard>
    ))}
  </ProjectsGrid>
);

const FeaturedProjects = ({ limit = 4, showAllLink = true }) => {
  const featuredProjects = curatedProjects
    .filter((project) => project.featured)
    .slice(0, limit || undefined);

  return (
    <SectionBlock id='selected-work' $surface aria-labelledby='projects-title'>
      <SectionInner>
        <SectionHeader>
          <Eyebrow>Selected work</Eyebrow>
          <SectionTitle id='projects-title'>
            Systems built for real operational constraints.
          </SectionTitle>
          <SectionIntro>
            A mix of platform architecture, applied AI, data engineering,
            healthcare interfaces, and open-source product work.
          </SectionIntro>
        </SectionHeader>
        <CuratedProjectGrid projects={featuredProjects} />
        {showAllLink && (
          <FooterAction>
            <SecondaryLink as={Link} to='/portfolio'>
              View all projects <FaArrowRight aria-hidden='true' />
            </SecondaryLink>
          </FooterAction>
        )}
      </SectionInner>
    </SectionBlock>
  );
};

export default FeaturedProjects;
