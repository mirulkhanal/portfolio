import { createContext, useEffect, useMemo, useState } from 'react';
import { githubSettings } from '../data/projects';

export const GithubContext = createContext({
  repos: [],
  loading: true,
  error: null,
});

const CACHE_KEY = `portfolio:github:${githubSettings.username}`;
const CACHE_TTL = 15 * 60 * 1000;

const prepareRepositories = (repositories) =>
  repositories
    .filter(
      (repo) =>
        !repo.fork &&
        !repo.archived &&
        !repo.disabled &&
        !githubSettings.excludedNames.includes(repo.name)
    )
    .map((repo) => ({
      ...repo,
      ...githubSettings.overrides[repo.name],
    }));

const GithubProvider = ({ children }) => {
  const [state, setState] = useState({
    repos: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        let cached;

        try {
          cached = JSON.parse(sessionStorage.getItem(CACHE_KEY));
        } catch {
          cached = null;
        }

        if (cached && Date.now() - cached.savedAt < CACHE_TTL) {
          setState({ repos: cached.repos, loading: false, error: null });
          return;
        }

        const response = await fetch(
          `https://api.github.com/users/${githubSettings.username}/repos?per_page=100&sort=updated&direction=desc&type=owner`,
          {
            headers: { Accept: 'application/vnd.github+json' },
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub returned ${response.status}`);
        }

        const repos = prepareRepositories(await response.json());

        setState({
          repos,
          loading: false,
          error: null,
        });

        try {
          sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ repos, savedAt: Date.now() })
          );
        } catch {
          // The archive still works when browser storage is unavailable.
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          setState((current) => ({
            ...current,
            loading: false,
            error:
              'Open-source projects are temporarily unavailable. You can still view the selected work above.',
          }));
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  const value = useMemo(() => state, [state]);

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
};

export default GithubProvider;
