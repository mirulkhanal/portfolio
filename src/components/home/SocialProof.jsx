// src/components/socialproof/SocialProof.js
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const SocialProofContainer = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.background};
`;

const ProofGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProofCard = styled.div`
  background: ${({ theme }) => theme.body};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PlatformHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  justify-content: center;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const ContributionGraph = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 1rem;
`;

const StackOverflowFlair = styled.div`
  iframe {
    border: none;
    overflow: hidden;
    margin: 0 auto;
  }
`;

const SocialProof = () => {
  // Replace with your actual Stack Overflow user ID
  const stackOverflowUserId = 'YOUR_USER_ID_HERE';

  return (
    <SocialProofContainer>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Community Presence
      </h2>
      <ProofGrid>
        {/* GitHub Card */}
        <ProofCard>
          <PlatformHeader>
            <FaGithub />
            <h3>GitHub Activity</h3>
          </PlatformHeader>
          <a
            href='https://github.com/mirulkhanal'
            target='_blank'
            rel='noopener noreferrer'>
            <ContributionGraph
              src='https://ghchart.rshadow.tech/mirulkhanal'
              alt="Mirul's GitHub Contributions"
            />
          </a>
        </ProofCard>

        {/* Stack Overflow Card */}
        <ProofCard>
          <PlatformHeader>
            <FaStackOverflow />
            <h3>Stack Overflow</h3>
          </PlatformHeader>
          <StackOverflowFlair>
            <a
              href={`https://stackoverflow.com/users/${stackOverflowUserId}`}
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src={`https://stackoverflow.com/users/flair/${stackOverflowUserId}.png`}
                alt='Stack Overflow profile'
              />
            </a>
          </StackOverflowFlair>
        </ProofCard>

        {/* LinkedIn Card */}
        <ProofCard>
          <PlatformHeader>
            <FaLinkedin />
            <h3>LinkedIn Recommendations</h3>
          </PlatformHeader>
          <div style={{ textAlign: 'left' }}>
            <blockquote>
              "Mirul demonstrated exceptional technical skills and
              professionalism..."
              <cite>- Shashank Adhikari, CEO at TechTemple</cite>
            </blockquote>
            <a
              href='YOUR_LINKEDIN_PROFILE'
              target='_blank'
              rel='noopener noreferrer'
              style={{ display: 'block', marginTop: '1rem' }}>
              View Profile →
            </a>
          </div>
        </ProofCard>
      </ProofGrid>
    </SocialProofContainer>
  );
};

export default SocialProof;
