import styled from 'styled-components';
import { skillGroups } from '../../data/profile';
import {
  Eyebrow,
  SectionBlock,
  SectionHeader,
  SectionInner,
  SectionIntro,
  SectionTitle,
  Tag,
  TagList,
} from '../common/Section';

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.article`
  padding: clamp(1.3rem, 4vw, 2rem);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  background: ${({ theme }) => theme.surface};
`;

const SkillTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
`;

const SkillDescription = styled.p`
  margin: 0.45rem 0 1.25rem;
  color: ${({ theme }) => theme.textSubtle};
  line-height: 1.55;
`;

const Skills = () => {
  return (
    <SectionBlock id='capabilities' $surface aria-labelledby='skills-title'>
      <SectionInner>
        <SectionHeader>
          <Eyebrow>Capabilities</Eyebrow>
          <SectionTitle id='skills-title'>Broad stack, focused delivery.</SectionTitle>
          <SectionIntro>
            Tools matter when they help solve the right problem. These are the
            technologies I use across product interfaces, platforms, data, and
            infrastructure.
          </SectionIntro>
        </SectionHeader>
        <SkillGrid>
          {skillGroups.map((group) => (
            <SkillCard key={group.id}>
              <SkillTitle>{group.title}</SkillTitle>
              <SkillDescription>{group.description}</SkillDescription>
              <TagList aria-label={`${group.title} skills`}>
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </TagList>
            </SkillCard>
          ))}
        </SkillGrid>
      </SectionInner>
    </SectionBlock>
  );
};

export default Skills;
