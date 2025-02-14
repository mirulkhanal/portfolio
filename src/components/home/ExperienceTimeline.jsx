import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const TimelineContainer = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.body};
  position: relative;
`;

const TimelineWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  width: 4px;
  background: ${({ theme }) => theme.primary};
  height: 100%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineItem = styled.div`
  width: 50%;
  padding: 0 40px;
  margin: 40px 0;
  position: relative;

  &:nth-child(odd) {
    left: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 0;
    left: 0 !important;

    &:nth-child(odd) {
      padding-left: 70px;
    }
  }
`;

const TimelineContent = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s;

  ${TimelineItem}:not(:nth-child(odd)) & {
    right: -30px;
  }

  ${TimelineItem}:nth-child(odd) & {
    left: -30px;
  }

  @media (max-width: 768px) {
    left: 0 !important;
    right: auto !important;
  }
`;

const TimelineDate = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: block;
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const TimelineDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text + 'cc'};
`;

const ExperienceTimeline = () => {
  const timelineData = [
    {
      title: 'Chief Digital Officer',
      company: 'TechTemple IT Solutions',
      date: '2021 - 2022',
      description:
        'Led client outreach and project management, implemented CI/CD pipelines, and managed monorepos for scalable systems.',
      icon: <FaBriefcase />,
      type: 'work',
    },
    {
      title: 'Full Stack Developer',
      company: 'TechTemple IT Solutions',
      date: '2020 - 2021',
      description:
        'Developed web and mobile applications using MERN stack and React Native. Contributed to projects like GSAthome and MedicosPDF.',
      icon: <FaCode />,
      type: 'work',
    },
    {
      title: "Bachelor's in Computer Science",
      company: 'NAMI College',
      date: '2020 - 2024',
      description:
        'Major degree with focus on web development, system design, and agile methodologies.',
      icon: <FaGraduationCap />,
      type: 'education',
    },
    {
      title: 'Machine Learning Intern',
      company: 'Macquarie Group',
      date: '2017 - 2018',
      description:
        'Developed fraud detection systems using Python, TensorFlow, and Keras. Improved system accuracy by 15%.',
      icon: <FaBriefcase />,
      type: 'work',
    },
  ];

  return (
    <TimelineContainer>
      <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>
        Professional Journey
      </h2>
      <TimelineWrapper>
        <TimelineLine />
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineIcon>{item.icon}</TimelineIcon>
            <TimelineContent>
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineDescription>
                {item.description}
                <br />
                <br />
                <strong>{item.company}</strong>
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineWrapper>
    </TimelineContainer>
  );
};

export default ExperienceTimeline;
