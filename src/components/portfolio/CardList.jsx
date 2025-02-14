// src/components/portfolio/CardList.js
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const SectionHeader = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  margin: 0;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
`;

const CardList = ({ repos, title, btnTitle }) => {
  return (
    <div>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
      </SectionHeader>
      <CardGrid>
        {repos &&
          repos.map((repo) => (
            <Card repo={repo} key={repo.id} btnTitle={btnTitle} />
          ))}
      </CardGrid>
    </div>
  );
};

export default CardList;
