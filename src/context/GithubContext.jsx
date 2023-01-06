import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const GithubContext = createContext({
  repos: [],
  user: {},
});

const GithubProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        'https://api.github.com/users/mirulkhanal'
      );

      setUser(response.data);
    };
    const fetchRepos = async () => {
      const response = await axios.get(
        'https://api.github.com/users/mirulkhanal/repos?page=1&per_page=20'
      );

      setRepos(response.data);
    };

    fetchUser();
    fetchRepos();
  }, []);
  return (
    <GithubContext.Provider value={{ repos, user }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
