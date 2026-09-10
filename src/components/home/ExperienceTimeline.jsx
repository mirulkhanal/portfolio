import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { experience } from '../../data/resume';
import {
  Eyebrow,
  SectionBlock,
  SectionHeader,
  SectionInner,
  SectionIntro,
  SectionTitle,
  SecondaryLink,
} from '../common/Section';

const Timeline = styled.ol`
  position: relative;
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;

  &::before {
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    left: 0.38rem;
    width: 1px;
    background: ${({ theme }) => theme.borderStrong};
    content: '';
  }
`;

const TimelineItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: minmax(8rem, 0.3fr) minmax(0, 1fr);
  gap: clamp(1.25rem, 5vw, 4rem);
  padding: 0 0 2.5rem 2rem;

  &::before {
    position: absolute;
    top: 0.38rem;
    left: 0;
    width: 0.78rem;
    height: 0.78rem;
    border: 3px solid ${({ theme }) => theme.body};
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.primary};
    content: '';
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const Period = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.primary};
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const Role = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: clamp(1.15rem, 3vw, 1.5rem);
`;

const Company = styled.p`
  margin: 0.35rem 0 0;
  color: ${({ theme }) => theme.textMuted};
  font-weight: 650;
`;

const Summary = styled.p`
  margin: 0.85rem 0 0;
  color: ${({ theme }) => theme.textSubtle};
  line-height: 1.7;
`;

const ActionRow = styled.div`
  margin-top: 0.5rem;
`;

const ExperienceTimeline = () => {
  const recentExperience = experience.slice(0, 3);

  return (
    <SectionBlock id='experience' aria-labelledby='experience-title'>
      <SectionInner>
        <SectionHeader>
          <Eyebrow>Experience</Eyebrow>
          <SectionTitle id='experience-title'>
            Engineering across product, platform, and data.
          </SectionTitle>
          <SectionIntro>
            Recent roles have ranged from multi-tenant architecture and applied
            AI to health kiosks, analytics, and large-scale data pipelines.
          </SectionIntro>
        </SectionHeader>
        <Timeline>
          {recentExperience.map((item) => (
            <TimelineItem key={item.id}>
              <Period>{item.period}</Period>
              <div>
                <Role>{item.role}</Role>
                <Company>
                  {item.company} · {item.location}
                </Company>
                <Summary>{item.highlights[0].text}</Summary>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
        <ActionRow>
          <SecondaryLink as={Link} to='/resume'>
            View the complete résumé <FaArrowRight aria-hidden='true' />
          </SecondaryLink>
        </ActionRow>
      </SectionInner>
    </SectionBlock>
  );
};

export default ExperienceTimeline;
