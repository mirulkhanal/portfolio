// src/context/GithubContext.js
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const GithubContext = createContext({
  repos: [],
  user: {},
  loading: true,
  error: null,
});

const GithubProvider = ({ children }) => {
  const [state, setState] = useState({
    repos: [],
    user: {},
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          axios.get('https://api.github.com/users/mirulkhanal'),
          axios.get(
            'https://api.github.com/users/mirulkhanal/repos?page=1&per_page=20'
          ),
        ]);

        setState({
          user: userResponse.data,
          repos: reposResponse.data,
          loading: false,
          error: null,
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          error: error.message,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <GithubContext.Provider value={state}>{children}</GithubContext.Provider>
  );
};

export default GithubProvider;
