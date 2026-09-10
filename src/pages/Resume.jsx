import styled from 'styled-components';
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';
import { profile, skillGroups } from '../data/profile';
import { education, experience, references } from '../data/resume';
import {
  Eyebrow,
  PrimaryLink,
  SectionBlock,
  SectionHeader,
  SectionInner,
  SectionIntro,
  SectionTitle,
  Tag,
  TagList,
} from '../components/common/Section';

const ResumeHero = styled(SectionBlock)`
  padding-bottom: clamp(3rem, 6vw, 5rem);
`;

const HeaderLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2rem;
  align-items: end;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`;

const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1.2rem;
  margin: 1.8rem 0 0;
  padding: 0;
  list-style: none;

  a,
  span {
    display: inline-flex;
    gap: 0.45rem;
    align-items: center;
    color: ${({ theme }) => theme.textMuted};
    font-size: 0.9rem;
  }

  a:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ResumeSection = styled.section`
  padding: 0 0 clamp(4rem, 8vw, 6rem);
`;

const ResumeSectionTitle = styled.h2`
  margin: 0 0 2rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  letter-spacing: -0.025em;
`;

const ExperienceList = styled.ol`
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ExperienceCard = styled.li`
  padding: clamp(1.25rem, 4vw, 2rem);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  background: ${({ theme }) => theme.surface};
`;

const ExperienceHeading = styled.header`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 560px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

const Role = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: 1.3rem;
`;

const Company = styled.p`
  margin: 0.35rem 0 0;
  color: ${({ theme }) => theme.primary};
  font-weight: 750;
`;

const Meta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSubtle};
  font-size: 0.88rem;
  font-weight: 700;
  text-align: right;

  @media (max-width: 560px) {
    text-align: left;
  }
`;

const HighlightList = styled.ul`
  display: grid;
  gap: 0.75rem;
  margin: 1.4rem 0 0;
  padding-left: 1.15rem;
  color: ${({ theme }) => theme.textMuted};

  li {
    padding-left: 0.25rem;
    line-height: 1.65;
  }

  strong {
    color: ${({ theme }) => theme.text};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.article`
  padding: 1.4rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  background: ${({ theme }) => theme.surface};

  h3 {
    margin: 0 0 1rem;
    color: ${({ theme }) => theme.text};
  }
`;

const SimpleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const SimpleCard = styled.article`
  padding: 1.4rem;
  border-left: 3px solid ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.surfaceSubtle};

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.text};
    font-size: 1.08rem;
  }

  p {
    margin: 0.35rem 0 0;
    color: ${({ theme }) => theme.textMuted};
    line-height: 1.55;
  }

  small {
    display: block;
    margin-top: 0.45rem;
    color: ${({ theme }) => theme.textSubtle};
    font-style: italic;
  }
`;

const Resume = () => (
  <>
    <ResumeHero aria-labelledby='resume-title'>
      <SectionInner>
        <HeaderLayout>
          <SectionHeader style={{ marginBottom: 0 }}>
            <Eyebrow>Résumé</Eyebrow>
            <SectionTitle id='resume-title'>
              {profile.name}, {profile.role}
            </SectionTitle>
            <SectionIntro>{profile.resumeSummary}</SectionIntro>
          </SectionHeader>
          <PrimaryLink href={profile.resumePath} download>
            Download PDF <FaDownload aria-hidden='true' />
          </PrimaryLink>
        </HeaderLayout>
        <ContactList aria-label='Contact details'>
          <li>
            <a href={`mailto:${profile.email}`}>
              <FaEnvelope aria-hidden='true' /> {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.phoneHref}>
              <FaPhone aria-hidden='true' /> {profile.phone}
            </a>
          </li>
          <li>
            <a href={profile.website}>
              <FaGlobe aria-hidden='true' /> mirulkhanal.com.np
            </a>
          </li>
          <li>
            <a href={profile.links.github}>
              <FaGithub aria-hidden='true' /> github.com/mirulkhanal
            </a>
          </li>
          <li>
            <span>
              <FaMapMarkerAlt aria-hidden='true' /> {profile.location}
            </span>
          </li>
        </ContactList>
      </SectionInner>
    </ResumeHero>

    <SectionBlock as='div' $surface>
      <SectionInner>
        <ResumeSection aria-labelledby='resume-experience-title'>
          <ResumeSectionTitle id='resume-experience-title'>
            Experience
          </ResumeSectionTitle>
          <ExperienceList>
            {experience.map((item) => (
              <ExperienceCard key={item.id}>
                <ExperienceHeading>
                  <div>
                    <Role>{item.role}</Role>
                    <Company>{item.company}</Company>
                  </div>
                  <Meta>
                    {item.period}
                    <br />
                    {item.location}
                  </Meta>
                </ExperienceHeading>
                <HighlightList>
                  {item.highlights.map((highlight) => (
                    <li key={highlight.label}>
                      <strong>{highlight.label}:</strong> {highlight.text}
                    </li>
                  ))}
                </HighlightList>
              </ExperienceCard>
            ))}
          </ExperienceList>
        </ResumeSection>

        <ResumeSection aria-labelledby='resume-skills-title'>
          <ResumeSectionTitle id='resume-skills-title'>
            Core skills
          </ResumeSectionTitle>
          <SkillsGrid>
            {skillGroups.map((group) => (
              <SkillCard key={group.id}>
                <h3>{group.title}</h3>
                <TagList aria-label={`${group.title} skills`}>
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </TagList>
              </SkillCard>
            ))}
          </SkillsGrid>
        </ResumeSection>

        <ResumeSection aria-labelledby='resume-education-title'>
          <ResumeSectionTitle id='resume-education-title'>
            Education
          </ResumeSectionTitle>
          <SimpleGrid>
            {education.map((item) => (
              <SimpleCard key={item.id}>
                <h3>{item.qualification}</h3>
                <p>
                  {item.institution} · {item.location}
                </p>
                {item.note && <small>{item.note}</small>}
              </SimpleCard>
            ))}
          </SimpleGrid>
        </ResumeSection>

        <ResumeSection aria-labelledby='resume-references-title'>
          <ResumeSectionTitle id='resume-references-title'>
            References
          </ResumeSectionTitle>
          <SimpleGrid>
            {references.map((reference) => (
              <SimpleCard key={reference.id}>
                <h3>{reference.name}</h3>
                <p>
                  {reference.role}
                  <br />
                  {reference.organization}
                </p>
              </SimpleCard>
            ))}
          </SimpleGrid>
        </ResumeSection>
      </SectionInner>
    </SectionBlock>
  </>
);

export default Resume;
