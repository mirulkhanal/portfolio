import styled from 'styled-components';
import {
  FaCodeBranch,
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
} from 'react-icons/fa';

const CardContainer = styled.article`
  display: flex;
  min-width: 0;
  min-height: 100%;
  flex-direction: column;
  padding: 1.35rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  background: ${({ theme }) => theme.surface};
  transition: border-color 160ms ease, transform 160ms ease;

  &:hover,
  &:focus-within {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  overflow-wrap: anywhere;
`;

const CardDescription = styled.p`
  display: -webkit-box;
  min-height: 4.65em;
  margin: 0.8rem 0 1rem;
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.9rem;
  line-height: 1.55;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const Metadata = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.9rem;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.textSubtle};
  font-size: 0.78rem;
  list-style: none;

  li {
    display: inline-flex;
    gap: 0.32rem;
    align-items: center;
  }
`;

const LanguageDot = styled.span`
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.secondary};
`;

const CardLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.25rem;

  a {
    display: inline-flex;
    gap: 0.4rem;
    align-items: center;
    color: ${({ theme }) => theme.primary};
    font-size: 0.82rem;
    font-weight: 750;
  }
`;

const Topics = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;

  li {
    padding: 0.25rem 0.45rem;
    border-radius: 999px;
    background: ${({ theme }) => theme.primarySoft};
    color: ${({ theme }) => theme.primary};
    font-size: 0.7rem;
    font-weight: 700;
  }
`;

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));

const Card = ({ repo }) => {
  const {
    name,
    displayName,
    description,
    html_url: repoUrl,
    homepage,
    language,
    stargazers_count: stars,
    forks_count: forks,
    updated_at: updatedAt,
    topics = [],
  } = repo;

  return (
    <CardContainer>
      <CardTitle>{displayName || name}</CardTitle>
      <CardDescription>
        {description || 'Repository details and source are available on GitHub.'}
      </CardDescription>
      <Metadata aria-label='Repository metadata'>
        {language && (
          <li>
            <LanguageDot aria-hidden='true' /> {language}
          </li>
        )}
        <li>
          <FaStar aria-hidden='true' /> {stars}
        </li>
        <li>
          <FaCodeBranch aria-hidden='true' /> {forks}
        </li>
        <li>Updated {formatDate(updatedAt)}</li>
      </Metadata>
      {topics.length > 0 && (
        <Topics aria-label='Repository topics'>
          {topics.slice(0, 3).map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </Topics>
      )}
      <CardLinks>
        <a href={repoUrl} target='_blank' rel='noopener noreferrer'>
          Source <FaGithub aria-hidden='true' />
        </a>
        {homepage && (
          <a
            href={
              homepage.startsWith('http') ? homepage : `https://${homepage}`
            }
            target='_blank'
            rel='noopener noreferrer'>
            Live <FaExternalLinkAlt aria-hidden='true' />
          </a>
        )}
      </CardLinks>
    </CardContainer>
  );
};

export default Card;
