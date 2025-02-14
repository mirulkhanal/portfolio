// src/components/layout/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { useEffect } from 'react';
import { useState } from 'react';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.background};
  padding: 4rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.primary}20;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const BackToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: ${({ theme }) => theme.secondary};
  }
`;

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 0) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset === 0) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <h3>Mirul Khanal</h3>
            <p>Modern web solutions for websites, mobile apps and API's</p>
          </FooterSection>

          <FooterSection>
            <h3>Connect</h3>
            <SocialLinks>
              <SocialLink href='https://github.com/mirulkhanal' target='_blank'>
                <FaGithub />
              </SocialLink>
              <SocialLink
                href='https://linkedin.com/in/mirulkhanal'
                target='_blank'>
                <FaLinkedin />
              </SocialLink>
              <SocialLink
                href='https://twitter.com/mirulkhanal'
                target='_blank'>
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Location</h3>
            <p>Kathmandu, Nepal</p>
            <p>GMT +5:45</p>
          </FooterSection>
        </FooterContent>
      </FooterContainer>

      {showScroll && (
        <BackToTop onClick={scrollToTop}>
          <FaArrowUp />
        </BackToTop>
      )}
    </>
  );
};

export default Footer;
