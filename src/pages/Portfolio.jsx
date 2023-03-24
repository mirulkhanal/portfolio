import React from 'react';
import { useContext } from 'react';
import CardList from '../components/portfolio/CardList';
import { GithubContext } from '../context/GithubContext';
import { data } from '../companyProjects';

const Portfolio = () => {
  const { repos } = useContext(GithubContext);

  console.log(repos);
  return (
    <div>
      <CardList
        repos={repos}
        btnTitle='View Repo'
        title={'Personal Projects'}
      />
      <CardList
        repos={data}
        btnTitle='Visit Site'
        title={'Professional Projects'}
      />
    </div>
  );
};

export default Portfolio;
