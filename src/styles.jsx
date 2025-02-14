import { css } from 'styled-components';

export const mobile = (styles) => css`
  @media (max-width: 768px) {
    ${styles}
  }
`;

export const tablet = (styles) => css`
  @media (max-width: 1024px) {
    ${styles}
  }
`;
