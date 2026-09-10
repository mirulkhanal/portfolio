import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { profile } from '../../data/profile';
import {
  Eyebrow,
  SectionBlock,
  SectionInner,
  SectionTitle,
  SecondaryLink,
} from '../common/Section';

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 0.6fr) minmax(0, 1.4fr);
  gap: clamp(2rem, 7vw, 6rem);
  align-items: center;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Portrait = styled.img`
  width: min(100%, 320px);
  aspect-ratio: 4 / 5;
  border-radius: 1.25rem;
  object-fit: cover;
  object-position: center 20%;
  box-shadow: 0 20px 60px ${({ theme }) => theme.shadow};

  @media (max-width: 720px) {
    width: 200px;
  }
`;

const AboutText = styled.div`
  max-width: 720px;
`;

const Bio = styled.div`
  margin: 1.5rem 0 0;
  color: ${({ theme }) => theme.textMuted};
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.8;

  p {
    margin: 0 0 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.75rem;
`;

const PersonalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: clamp(3rem, 7vw, 5rem);

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const PersonalCard = styled.article`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1.15rem;
  background: ${({ theme }) => theme.surface};
  overflow: hidden;
`;

const PersonalImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  background: ${({ theme }) => theme.surfaceSubtle};
  object-fit: ${({ $contain }) => ($contain ? 'contain' : 'cover')};
  object-position: center;
`;

const PersonalContent = styled.div`
  padding: clamp(1.25rem, 4vw, 1.75rem);

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.text};
    font-size: clamp(1.35rem, 3vw, 1.7rem);
  }

  p {
    margin: 0.75rem 0 0;
    color: ${({ theme }) => theme.textMuted};
    line-height: 1.7;
  }
`;

const About = () => {
  return (
    <SectionBlock id='about' $surface aria-labelledby='about-title'>
      <SectionInner>
        <AboutContent>
          <Portrait
            src={profile.avatarPath}
            alt=''
            width='320'
            height='400'
            loading='lazy'
          />
          <AboutText>
            <Eyebrow>About</Eyebrow>
            <SectionTitle id='about-title'>
              Practical engineering, grounded in the product.
            </SectionTitle>
            <Bio>
              <p>
                I work across the stack, but the goal is always the same: turn
                a complex requirement into software that is understandable,
                dependable, and useful to the people operating it.
              </p>
              <p>
                My experience spans SaaS architecture, web and mobile
                interfaces, authentication, data pipelines, applied AI, and
                deployment. That breadth helps me make trade-offs with the
                whole system in mind.
              </p>
              <p>
                I learn new tools quickly, communicate directly, and keep
                business outcomes close to technical decisions.
              </p>
            </Bio>
            <Actions>
              <SecondaryLink as={Link} to='/resume'>
                Read my full experience <FaArrowRight aria-hidden='true' />
              </SecondaryLink>
            </Actions>
          </AboutText>
        </AboutContent>

        <PersonalGrid aria-label='The people and pets closest to me'>
          <PersonalCard>
            <PersonalImage
              src='/wife.jpg'
              alt='Mirul with his wife, Anisa'
              width='1024'
              height='640'
              loading='lazy'
            />
            <PersonalContent>
              <Eyebrow>My better half</Eyebrow>
              <h3>My wife, Anisa</h3>
              <p>
                Anisa aspires to become a nurse and loves settling in for a
                good suspense thriller. She is a huge part of who I am outside
                work.
              </p>
            </PersonalContent>
          </PersonalCard>

          <PersonalCard>
            <PersonalImage
              src='/Django.jpg'
              alt="Django, Mirul's American Bully"
              width='1024'
              height='640'
              loading='lazy'
              $contain
            />
            <PersonalContent>
              <Eyebrow>Our four-legged family</Eyebrow>
              <h3>My dog, Django</h3>
              <p>
                Django is our sweet American Bully. His favorite things are
                playing fetch, spending time with us, and eating rabbit-ear
                treats.
              </p>
            </PersonalContent>
          </PersonalCard>
        </PersonalGrid>
      </SectionInner>
    </SectionBlock>
  );
};

export default About;
