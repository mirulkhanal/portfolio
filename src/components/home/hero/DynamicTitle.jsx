import styled, { keyframes } from 'styled-components';
import useTitle, { Phase } from './useTitle';

const titles = [
  'full-stack engineer',
  'SaaS platform architect',
  'React & Next.js developer',
  'React Native developer',
  'Node.js & FastAPI builder',
  'GraphQL & API developer',
  'OCR & applied AI engineer',
  'PySpark data optimizer',
  'self-hosting enthusiast',
  'open-source tinkerer',
  'table tennis player',
  'classic rock listener',
  'synthwave enjoyer',
  'story-driven game fan',
  'husband to my lovely wife, Anisa',
  'father to my sweet American Bully, Django',
];

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const TypewriterLine = styled.span`
  display: block;
  min-height: 2.05em;
  color: ${({ theme }) => theme.primary};
  font-size: 0.72em;
  line-height: 1.06;
  letter-spacing: -0.045em;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 0.08em;
  height: 0.82em;
  margin-left: 0.08em;
  background: currentColor;
  animation: ${blink} 850ms steps(1, end) infinite;
  vertical-align: -0.02em;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ScreenReaderText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const DynamicTitle = () => {
  const { typedTitle, phase } = useTitle(titles);

  return (
    <>
      <TypewriterLine aria-hidden='true'>
        {typedTitle}
        {phase !== Phase.deleting && <Cursor />}
      </TypewriterLine>
      <ScreenReaderText>
        Full-stack engineer specializing in SaaS platforms, mobile products,
        applied AI, APIs, and data systems.
      </ScreenReaderText>
    </>
  );
};

export default DynamicTitle;
