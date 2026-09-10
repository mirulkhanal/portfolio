import styled from 'styled-components';

export const SectionBlock = styled.section`
  padding: clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem);
  background: ${({ $surface, theme }) =>
    $surface ? theme.surfaceSubtle : theme.body};
`;

export const SectionInner = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
`;

export const SectionHeader = styled.header`
  max-width: 720px;
  margin-bottom: clamp(2rem, 5vw, 3.5rem);

  ${({ $center }) =>
    $center &&
    `
      margin-inline: auto;
      text-align: center;
    `}
`;

export const Eyebrow = styled.p`
  margin: 0 0 0.75rem;
  color: ${({ theme }) => theme.primary};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
`;

export const SectionIntro = styled.p`
  margin: 1rem 0 0;
  color: ${({ theme }) => theme.textMuted};
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.75;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Tag = styled.li`
  padding: 0.42rem 0.72rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 999px;
  background: ${({ theme }) => theme.surfaceSubtle};
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.8rem;
  font-weight: 650;
`;

export const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 44px;
  padding: 0.75rem 1.05rem;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 0.7rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.onPrimary};
  font-weight: 750;
  text-decoration: none;
  transition: transform 160ms ease, background-color 160ms ease,
    border-color 160ms ease;

  &:hover {
    background: ${({ theme }) => theme.primaryStrong};
    border-color: ${({ theme }) => theme.primaryStrong};
    transform: translateY(-2px);
  }
`;

export const SecondaryLink = styled(PrimaryLink)`
  background: transparent;
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.borderStrong};

  &:hover {
    background: ${({ theme }) => theme.surfaceSubtle};
    border-color: ${({ theme }) => theme.primary};
  }
`;
