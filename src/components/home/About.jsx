// src/components/about/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  max-width: 300px;
  img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const AboutText = styled.div`
  flex: 2;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Bio = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;
  hyphens: auto;

  p {
    margin-bottom: 1.2rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    font-size: 1.15rem;
  }
`;

const Traits = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Trait = styled.span`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.primary + '20'};
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.primary + '30'};
`;

const CTAButton = styled.a`
  padding: 0.8rem 2rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s, background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.secondary};
    transform: translateY(-2px);
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutImage>
          <img src={'mirul.png'} alt='Mirul Khanal' />
        </AboutImage>
        <AboutText>
          <h2>About Me</h2>
          <Bio>
            <p>
              Hi there! I'm Mirul, a Full Stack Developer who thrives on
              building solutions that scale. By day, I architect websites,
              mobile apps, and APIs while optimizing deployments for peak
              performance. By night, you'll find me tinkering with new tools or
              working on side projects when inspiration strikes.
            </p>

            <p>
              I pride myself on balancing precision with creativity—whether
              debugging a stubborn API endpoint or brainstorming user-friendly
              dashboards. My approach combines technical excellence with
              collaborative problem-solving, always aiming to transform complex
              requirements into elegant solutions.
            </p>

            <p>
              When not coding, you'll catch me exploring the latest tech trends
              or contributing to open-source projects. Let's build something
              impactful <em>and</em> enjoy the process!
            </p>
          </Bio>
          <Traits>
            <Trait>Table tennis</Trait>
            <Trait>Python Scripting</Trait>
            <Trait>Mobile games</Trait>
            <Trait>Classic Rock & Synthwave Music</Trait>
          </Traits>
          <CTAButton
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'>
            Download Resume
          </CTAButton>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
