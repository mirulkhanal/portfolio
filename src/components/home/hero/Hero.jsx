import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { profile } from '../../../data/profile';
import DynamicTitle from './DynamicTitle';
import {
  Eyebrow,
  PrimaryLink,
  SecondaryLink,
} from '../../common/Section';

const HeroContainer = styled.section`
  min-height: min(820px, calc(100svh - 72px));
  display: grid;
  place-items: center;
  padding: clamp(4rem, 9vw, 8rem) clamp(1rem, 4vw, 2rem);
  background:
    radial-gradient(
      circle at 82% 20%,
      ${({ theme }) => theme.primarySoft},
      transparent 26rem
    ),
    ${({ theme }) => theme.body};
`;

const HeroContent = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(220px, 0.65fr);
  gap: clamp(2.5rem, 7vw, 6rem);
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const HeroImage = styled.img`
  width: min(100%, 330px);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.borderStrong};
  box-shadow: 0 24px 65px ${({ theme }) => theme.shadow};
  object-fit: cover;
  justify-self: end;

  @media (max-width: 760px) {
    grid-row: 1;
    width: 180px;
    justify-self: start;
  }
`;

const HeroText = styled.div`
  max-width: 760px;
`;

const Title = styled.h1`
  max-width: 15ch;
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: clamp(2.8rem, 7vw, 5.6rem);
  line-height: 0.98;
  letter-spacing: -0.065em;
`;

const TitlePrefix = styled.span`
  display: block;
  margin: 0.55em 0 0.18em;
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.44em;
  line-height: 1.1;
  letter-spacing: -0.025em;
`;

const Bio = styled.p`
  max-width: 680px;
  margin: 1.6rem 0 0;
  color: ${({ theme }) => theme.textMuted};
  font-size: clamp(1.05rem, 2.3vw, 1.3rem);
  line-height: 1.7;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
`;

const Availability = styled.p`
  display: flex;
  gap: 0.65rem;
  align-items: center;
  margin: 2rem 0 0;
  color: ${({ theme }) => theme.textSubtle};
  font-size: 0.9rem;

  &::before {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.success};
    content: '';
    box-shadow: 0 0 0 0.3rem ${({ theme }) => theme.successSoft};
  }
`;

const Hero = () => {
  return (
    <HeroContainer aria-labelledby='hero-title'>
      <HeroContent>
        <HeroText>
          <Eyebrow>Full-stack engineer · Kathmandu</Eyebrow>
          <Title id='hero-title'>
            Hi, I’m Mirul.
            <TitlePrefix>I’m a</TitlePrefix>
            <DynamicTitle />
          </Title>
          <Bio>{profile.summary}</Bio>
          <Actions>
            <PrimaryLink as={Link} to='/portfolio'>
              Explore selected work <FaArrowRight aria-hidden='true' />
            </PrimaryLink>
            <SecondaryLink href={profile.resumePath} download>
              Download résumé <FaDownload aria-hidden='true' />
            </SecondaryLink>
          </Actions>
          <Availability>{profile.availability}</Availability>
        </HeroText>
        <HeroImage
          src={profile.avatarPath}
          alt={`${profile.name}, ${profile.role}`}
          width='330'
          height='330'
          fetchPriority='high'
        />
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
