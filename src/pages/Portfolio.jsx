import React from 'react';
import { useContext } from 'react';
import CardList from '../components/portfolio/CardList';
import { GithubContext } from '../context/GithubContext';
const Portfolio = () => {
  const { repos } = useContext(GithubContext);
  return (
    <div>
      <CardList repos={repos} />
      {/* <CardList repos={jsonData} /> */}
    </div>
  );
};

export default Portfolio;
