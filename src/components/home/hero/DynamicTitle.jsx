// src/components/hero/DynamicTitle.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import useTitle, { Phase } from './useTitle';

const titles = [
  { title: 'MERN Web Developer' },
  { title: 'Mobile App Developer' },
  { title: 'NestJs w/ Express & GraphQL API Developer' },
  { title: 'Freelance developer' },
  { title: 'Video games enjoyer' },
  { title: 'Occasional Movies, TV Shows and Anime watcher' },
  { title: 'Classic Rock, Indie & Synthwave listener' },
];

const blink = keyframes`
  50% { opacity: 0; }
`;

const TypewriterCursor = styled.span`
  &::after {
    content: '|';
    display: inline-block;
    margin-left: 2px;
    animation: ${blink} 1s step-end infinite;
    color: ${({ theme }) => theme.primary};
  }
`;

const DynamicTitleText = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
`;

const DynamicTitle = () => {
  const { typedTitle, selectedTitle, phase } = useTitle(titles);

  return (
    <DynamicTitleText>
      {typedTitle}
      {phase !== Phase.deleting && <TypewriterCursor />}
    </DynamicTitleText>
  );
};

export default DynamicTitle;
