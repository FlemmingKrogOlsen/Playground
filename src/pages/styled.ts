import styled from "styled-components";

export const Main = styled.main`
    padding: 1rem;
    width: 100%;
    background-color: white;
    height: calc(100vh - 170px); // 90 + 48 + 16 + 16 = 170 (( Header + Footer + MarginTop + MarginBottom ))
    margin: 1rem 0;
    /* box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 10px 0px inset,rgba(0, 0, 0, 0.3) 0px -5px 10px 0px inset;  */
    overflow-y: auto;
    border-radius: 12px;

    // Firefox scrollbar support
    scrollbar-color: ${({ theme }) => theme.COLOR.PRIMARY} transparent;
    scrollbar-width: thin;

    // Webkit scrollbar support
    &::-webkit-scrollbar {
      width: 0.5rem;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(${({ theme }) => theme.COLOR.PRIMARY}, rgba(18, 52, 86, 0.5));
    }
`;