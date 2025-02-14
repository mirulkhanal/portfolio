// src/components/techstack/TechStack.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaPython,
  FaAws,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiGraphql,
  SiDocker,
  SiPostgresql,
  SiRedis,
} from 'react-icons/si';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const TechStackContainer = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.body};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.text};
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CategoryCard = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-out;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const CategoryTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const SkillList = styled.div`
  display: grid;
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.body};
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &::after {
      content: '${(props) => props.$years}';
      position: absolute;
      right: -10px;
      top: -10px;
      background: ${({ theme }) => theme.primary};
      color: white;
      padding: 0.3rem 0.6rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`;

const SkillIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ProgressBar = styled.div`
  height: 4px;
  background: ${({ theme }) => theme.background};
  border-radius: 2px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.$proficiency}%;
  background: ${({ theme }) => theme.primary};
  border-radius: 2px;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

const TechStack = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: <FaReact />,
      skills: [
        {
          name: 'React',
          icon: <FaReact />,
          proficiency: 90,
          years: '3+ years',
        },
        {
          name: 'TypeScript',
          icon: <SiTypescript />,
          proficiency: 85,
          years: '2+ years',
        },
        {
          name: 'Next.js',
          icon: <FaReact />,
          proficiency: 80,
          years: '2 years',
        },
      ],
    },
    {
      title: 'Backend',
      icon: <FaNodeJs />,
      skills: [
        {
          name: 'Node.js',
          icon: <FaNodeJs />,
          proficiency: 88,
          years: '3 years',
        },
        {
          name: 'GraphQL',
          icon: <SiGraphql />,
          proficiency: 75,
          years: '1.5 years',
        },
        {
          name: 'PostgreSQL',
          icon: <SiPostgresql />,
          proficiency: 80,
          years: '2 years',
        },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: <FaTools />,
      skills: [
        {
          name: 'Docker',
          icon: <SiDocker />,
          proficiency: 70,
          years: '1 year',
        },
        { name: 'AWS', icon: <FaAws />, proficiency: 65, years: '1 year' },
        { name: 'Redis', icon: <SiRedis />, proficiency: 70, years: '1 year' },
      ],
    },
  ];

  return (
    <TechStackContainer>
      <SectionTitle>Technical Expertise</SectionTitle>
      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryCard key={index}>
            <CategoryHeader>
              {category.icon}
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryHeader>
            <SkillList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex} $years={skill.years}>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillInfo>
                    <SkillName>{skill.name}</SkillName>
                    <ProgressBar>
                      <Progress $proficiency={skill.proficiency} />
                    </ProgressBar>
                  </SkillInfo>
                </SkillItem>
              ))}
            </SkillList>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </TechStackContainer>
  );
};

export default TechStack;
