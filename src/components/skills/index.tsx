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
  border-radius: 10px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin: 0.5rem 0;
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
