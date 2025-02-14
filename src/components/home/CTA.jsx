// src/components/cta/CTA.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPaperPlane, FaFolderOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const CTAContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary},
    ${({ theme }) => theme.accent}
  );
  background-size: 400% 400%;
  animation: ${gradientAnimation} 12s ease infinite;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  animation: ${float} 4s ease-in-out infinite;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAButton = styled(Link)`
  padding: 1rem 2rem;
  background: ${(props) =>
    props.primary ? 'white' : 'rgba(255, 255, 255, 0.1)'};
  color: ${(props) => (props.primary ? ({ theme }) => theme.primary : 'white')};
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  border: 2px solid white;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    background: ${(props) =>
      props.primary ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'};
  }
`;

const CTA = () => {
  return (
    <CTAContainer>
      <ContentWrapper>
        <Heading>Let's Build Something Amazing Together!</Heading>
        <SubText>
          Have a project in mind? Whether it's web development, mobile apps, or
          machine learning solutions - I'm ready to bring your ideas to life
          with cutting-edge technology.
        </SubText>
        <ButtonGroup>
          <CTAButton to={'/contact'} primary>
            <FaPaperPlane />
            Contact Me
          </CTAButton>
          <CTAButton to='/portfolio'>
            <FaFolderOpen />
            View Portfolio
          </CTAButton>
        </ButtonGroup>
      </ContentWrapper>
    </CTAContainer>
  );
};

export default CTA;
