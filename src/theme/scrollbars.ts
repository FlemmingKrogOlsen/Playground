import { css } from "styled-components";

export const scrollBarsCSS = css`
  overflow-y: auto;

  // Firefox scrollbar support
  scrollbar-color: ${({ theme }) => theme.COLOR.PRIMARY} transparent;
  scrollbar-width: thin;

  // Webkit scrollbar support
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      ${({ theme }) => theme.COLOR.PRIMARY},
      rgba(18, 52, 86, 0.5)
    );
    border-radius: 0.5rem;
    border: 2px solid ${({ theme }) => theme.COLOR.BACKGROUND};
  }
`;
