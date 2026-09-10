import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../../data/profile';

const FooterContainer = styled.footer`
  padding: clamp(3rem, 7vw, 5rem) clamp(1rem, 4vw, 2rem) 2rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
`;

const FooterContent = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.3fr repeat(2, minmax(9rem, 0.6fr));
  gap: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 440px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    margin: 0 0 1rem;
    color: ${({ theme }) => theme.text};
    font-size: 0.95rem;
  }

  p {
    max-width: 34ch;
    margin: 0.35rem 0;
    color: ${({ theme }) => theme.textMuted};
    line-height: 1.65;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  background: ${({ theme }) => theme.surfaceSubtle};
  color: ${({ theme }) => theme.text};
  transition: border-color 160ms ease, color 160ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const FooterNav = styled.nav`
  display: grid;
  gap: 0.65rem;

  a {
    width: fit-content;
    color: ${({ theme }) => theme.textMuted};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const FooterBottom = styled.div`
  width: min(1120px, 100%);
  margin: 2.5rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textSubtle};
  font-size: 0.82rem;
`;

const BackToTop = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 30;
  display: grid;
  width: 44px;
  height: 44px;
  padding: 0;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.primaryStrong};
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.onPrimary};
  cursor: pointer;
  box-shadow: 0 8px 25px ${({ theme }) => theme.shadow};

  &:hover {
    background: ${({ theme }) => theme.primaryStrong};
  }
`;

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollTop = () => setShowScroll(window.scrollY > 600);

    checkScrollTop();
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <h3>{profile.name}</h3>
            <p>{profile.tagline}</p>
            <SocialLinks aria-label='Social profiles'>
              <SocialLink
                href={profile.links.github}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Mirul Khanal on GitHub'>
                <FaGithub aria-hidden='true' />
              </SocialLink>
              <SocialLink
                href={profile.links.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Mirul Khanal on LinkedIn'>
                <FaLinkedin aria-hidden='true' />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Explore</h3>
            <FooterNav aria-label='Footer navigation'>
              <Link to='/portfolio'>Projects</Link>
              <Link to='/resume'>Résumé</Link>
              <Link to='/contact'>Contact</Link>
            </FooterNav>
          </FooterSection>

          <FooterSection>
            <h3>Location</h3>
            <p>{profile.location}</p>
            <p>{profile.timezone}</p>
          </FooterSection>
        </FooterContent>
        <FooterBottom>
          © {new Date().getFullYear()} {profile.name}. Built with React.
        </FooterBottom>
      </FooterContainer>

      {showScroll && (
        <BackToTop
          type='button'
          onClick={scrollToTop}
          aria-label='Back to top'>
          <FaArrowUp aria-hidden='true' />
        </BackToTop>
      )}
    </>
  );
};

export default Footer;
