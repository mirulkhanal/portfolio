import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Controls = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(12rem, 0.35fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: grid;
  gap: 0.4rem;
  color: ${({ theme }) => theme.textSubtle};
  font-size: 0.8rem;
  font-weight: 700;
`;

const Control = styled.input`
  width: 100%;
  min-height: 44px;
  padding: 0.7rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.borderStrong};
  border-radius: 0.65rem;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  font: inherit;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: 3px solid ${({ theme }) => theme.focus};
    outline-offset: 1px;
  }
`;

const Select = styled(Control).attrs({ as: 'select' })``;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const ResultsMeta = styled.p`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.textSubtle};
  font-size: 0.85rem;
`;

const EmptyState = styled.p`
  padding: 2rem;
  border: 1px dashed ${({ theme }) => theme.borderStrong};
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.textMuted};
  text-align: center;
`;

const ShowMore = styled.button`
  min-height: 44px;
  margin-top: 1.5rem;
  padding: 0.7rem 1rem;
  border: 1px solid ${({ theme }) => theme.borderStrong};
  border-radius: 0.7rem;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font: inherit;
  font-weight: 750;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const PAGE_SIZE = 9;

const CardList = ({ repos }) => {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const languages = useMemo(
    () =>
      [...new Set(repos.map((repo) => repo.language).filter(Boolean))].sort(),
    [repos]
  );

  const filteredRepos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return repos.filter((repo) => {
      const matchesLanguage =
        language === 'all' || repo.language === language;
      const searchable = [
        repo.name,
        repo.displayName,
        repo.description,
        ...(repo.topics || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return matchesLanguage && searchable.includes(normalizedQuery);
    });
  }, [language, query, repos]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [language, query]);

  return (
    <>
      <Controls>
        <Label>
          Search repositories
          <Control
            type='search'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Search by name, description, or topic'
          />
        </Label>
        <Label>
          Language
          <Select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}>
            <option value='all'>All languages</option>
            {languages.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Label>
      </Controls>
      <ResultsMeta aria-live='polite'>
        Showing {Math.min(visibleCount, filteredRepos.length)} of{' '}
        {filteredRepos.length} repositories
      </ResultsMeta>
      {filteredRepos.length > 0 ? (
        <>
          <CardGrid>
            {filteredRepos.slice(0, visibleCount).map((repo) => (
              <Card repo={repo} key={repo.id} />
            ))}
          </CardGrid>
          {visibleCount < filteredRepos.length && (
            <ShowMore
              type='button'
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
              Show more repositories
            </ShowMore>
          )}
        </>
      ) : (
        <EmptyState>No repositories match these filters.</EmptyState>
      )}
    </>
  );
};

export default CardList;
