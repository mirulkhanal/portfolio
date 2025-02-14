// src/components/hero/DynamicTitle.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import useTitle, { Phase } from './useTitle';

const titles = [
  { title: 'Full Stack Developer' },
  { title: 'Machine Learning Engineer' },
  { title: 'Mobile App Developer' },
  { title: 'Python & TensorFlow Expert' },
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
