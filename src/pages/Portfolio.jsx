// src/pages/Portfolio.js
import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import CardList from '../components/portfolio/CardList';
import { GithubContext } from '../context/GithubContext';
import { data as companyProjects } from '../companyProjects';
import { Loading } from '../components/common/Spinner';

const PortfolioContainer = styled.div`
  padding: 2rem;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.accent};
  text-align: center;
  padding: 2rem;
`;

const Portfolio = () => {
  const { repos, loading, error } = useContext(GithubContext);

  if (loading) return <Loading />;
  if (error)
    return <ErrorMessage>Error loading projects: {error}</ErrorMessage>;

  return (
    <PortfolioContainer>
      <CardList
        repos={companyProjects}
        btnTitle='Visit Site'
        title='Professional Projects'
      />
      <CardList repos={repos} btnTitle='View Repo' title='Personal Projects' />
    </PortfolioContainer>
  );
};

export default Portfolio;
