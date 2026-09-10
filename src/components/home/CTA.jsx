import styled from 'styled-components';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { profile } from '../../data/profile';
import { PrimaryLink, SecondaryLink } from '../common/Section';

const CTAContainer = styled.section`
  padding: clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem);
  background: ${({ theme }) => theme.body};
`;

const ContentWrapper = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: clamp(2rem, 6vw, 4.5rem);
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.onPrimary};
  text-align: center;
`;

const Heading = styled.h2`
  max-width: 16ch;
  margin: 0 auto;
  font-size: clamp(2rem, 5vw, 3.75rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
`;

const SubText = styled.p`
  max-width: 650px;
  margin: 1.25rem auto 0;
  color: ${({ theme }) => theme.onPrimaryMuted};
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.7;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const LightPrimaryLink = styled(PrimaryLink)`
  border-color: ${({ theme }) => theme.onPrimary};
  background: ${({ theme }) => theme.onPrimary};
  color: ${({ theme }) => theme.primaryStrong};

  &:hover {
    border-color: white;
    background: white;
  }
`;

const LightSecondaryLink = styled(SecondaryLink)`
  border-color: ${({ theme }) => theme.onPrimaryBorder};
  color: ${({ theme }) => theme.onPrimary};

  &:hover {
    border-color: ${({ theme }) => theme.onPrimary};
    background: ${({ theme }) => theme.onPrimarySoft};
  }
`;

const CTA = () => {
  return (
    <CTAContainer aria-labelledby='contact-cta-title'>
      <ContentWrapper>
        <Heading id='contact-cta-title'>Have a difficult problem to ship?</Heading>
        <SubText>
          I am open to conversations about full-stack platforms, applied AI,
          mobile products, and engineering roles where broad product ownership
          matters.
        </SubText>
        <ButtonGroup>
          <LightPrimaryLink href={`mailto:${profile.email}`}>
            Email Mirul <FaEnvelope aria-hidden='true' />
          </LightPrimaryLink>
          <LightSecondaryLink as={Link} to='/contact'>
            Contact details <FaArrowRight aria-hidden='true' />
          </LightSecondaryLink>
        </ButtonGroup>
      </ContentWrapper>
    </CTAContainer>
  );
};

export default CTA;
