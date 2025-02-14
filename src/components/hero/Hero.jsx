// src/components/hero/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import DynamicTitle from './DynamicTitle';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  min-height: 100vh;
  padding: 2rem;
  align-items: center;
  background: ${({ theme }) => theme.background};
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const HeroImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.primary};
  object-fit: cover;
`;

const HeroText = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroImage src='/mirul.png' alt='Mirul Khanal' />
        <HeroText>
          <Title>
            Hi, I'm Mirul Khanal. <br />
            I am a <DynamicTitle />
          </Title>
          <Bio>
            Full Stack MERN Developer with 3+ years of experience building
            scalable web applications. Currently pursuing BSc in Computer
            Science with expertise in React, Node.js, and Machine Learning.
            Passionate about solving complex problems and delivering
            high-quality solutions.
          </Bio>
          <CTAButton to='/portfolio'>View Projects</CTAButton>
        </HeroText>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
