// src/components/skills/Skills.js
import React from 'react';
import styled from 'styled-components';
import { FaCode, FaDatabase, FaMobileAlt, FaCloud } from 'react-icons/fa';

const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.body};
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  border-radius: 15px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
  transition: transform 0.2s;

  ${SkillCard}:hover & {
    transform: rotate(15deg);
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: ${({ theme }) => theme.primary};
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
`;

const SkillItem = styled.span`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.primary + '20'};
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => theme.primary + '30'};

  &:hover {
    background: ${({ theme }) => theme.primary + '40'};
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
const Skills = () => {
  const skillsData = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      items: ['React', 'TypeScript', 'Next.js', 'Redux', 'GraphQL'],
    },
    {
      icon: <FaDatabase />,
      title: 'Backend & Databases',
      items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'],
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Development',
      items: ['React Native', 'Android Studio', 'Java', 'Kotlin'],
    },
    {
      icon: <FaCloud />,
      title: 'Cloud & DevOps',
      items: ['AWS S3', 'Docker', 'CI/CD', 'GitHub Actions', 'JIRA'],
    },
  ];

  return (
    <SkillsContainer>
      <SkillGrid>
        {skillsData.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillList>
              {skill.items.map((item, i) => (
                <SkillItem key={i}>{item}</SkillItem>
              ))}
            </SkillList>
          </SkillCard>
        ))}
      </SkillGrid>
    </SkillsContainer>
  );
};

export default Skills;
