import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#f7f9fb',
  surface: '#ffffff',
  surfaceSubtle: '#eef3f5',
  text: '#132238',
  textMuted: '#41556b',
  textSubtle: '#64748b',
  primary: '#0f766e',
  primaryStrong: '#0a5c56',
  primarySoft: 'rgba(15, 118, 110, 0.12)',
  secondary: '#2563eb',
  success: '#15803d',
  successSoft: 'rgba(21, 128, 61, 0.12)',
  border: '#dce4e8',
  borderStrong: '#b9c6cc',
  focus: 'rgba(37, 99, 235, 0.3)',
  shadow: 'rgba(15, 23, 42, 0.12)',
  onPrimary: '#ffffff',
  onPrimaryMuted: 'rgba(255, 255, 255, 0.82)',
  onPrimaryBorder: 'rgba(255, 255, 255, 0.62)',
  onPrimarySoft: 'rgba(255, 255, 255, 0.12)',
  visualSurface: 'rgba(255, 255, 255, 0.72)',
  visualBorder: 'rgba(15, 23, 42, 0.12)',
  visualText: '#132238',
  warningSoft: '#fff7ed',
  warningBorder: '#fdba74',
  projectTones: {
    teal: '#cce9e3',
    blue: '#dce9fb',
    amber: '#f8e7bf',
    violet: '#e8def8',
    rose: '#f5dce3',
    slate: '#dde5ea',
  },
};

export const darkTheme = {
  body: '#0b1117',
  surface: '#121b24',
  surfaceSubtle: '#17232d',
  text: '#f4f7f8',
  textMuted: '#c5d0d7',
  textSubtle: '#91a3af',
  primary: '#5eead4',
  primaryStrong: '#2dd4bf',
  primarySoft: 'rgba(94, 234, 212, 0.11)',
  secondary: '#93c5fd',
  success: '#86efac',
  successSoft: 'rgba(134, 239, 172, 0.12)',
  border: '#263640',
  borderStrong: '#40535f',
  focus: 'rgba(147, 197, 253, 0.35)',
  shadow: 'rgba(0, 0, 0, 0.32)',
  onPrimary: '#062c29',
  onPrimaryMuted: 'rgba(6, 44, 41, 0.8)',
  onPrimaryBorder: 'rgba(6, 44, 41, 0.5)',
  onPrimarySoft: 'rgba(6, 44, 41, 0.1)',
  visualSurface: 'rgba(5, 15, 22, 0.66)',
  visualBorder: 'rgba(255, 255, 255, 0.16)',
  visualText: '#f8fafc',
  warningSoft: 'rgba(180, 83, 9, 0.13)',
  warningBorder: '#b45309',
  projectTones: {
    teal: '#164e4a',
    blue: '#1e3a5f',
    amber: '#594018',
    violet: '#3d2b57',
    rose: '#542b39',
    slate: '#2b3a44',
  },
};

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    color-scheme: ${({ theme }) =>
      theme === darkTheme ? 'dark' : 'light'};
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    margin: 0;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", sans-serif;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    transition: background-color 180ms ease, color 180ms ease;
  }

  button, input, select, textarea {
    font-family: inherit;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration-thickness: 0.08em;
    text-underline-offset: 0.18em;
  }

  button, a, input, select, textarea {
    &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.focus};
      outline-offset: 3px;
    }
  }

  ::selection {
    background: ${({ theme }) => theme.primarySoft};
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
