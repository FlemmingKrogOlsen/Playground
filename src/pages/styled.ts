import styled from "styled-components";

export const Main = styled.main`
    padding: 1rem;
    width: 100%;
    background-color: ${props => props.color ? props.color : '#fff'};
    height: calc(100vh - 170px); // 90 + 48 + 16 + 16 = 170 (( Header + Footer + MarginTop + MarginBottom ))
    margin: 1rem 0;
    overflow-y: auto;
    border-radius: 0.5rem;

    // Firefox scrollbar support
    scrollbar-color: ${({ theme }) => theme.COLOR.PRIMARY} transparent;
    scrollbar-width: thin;

    // Webkit scrollbar support
    &::-webkit-scrollbar {
      width: 1rem;
    }
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(${({ theme }) => theme.COLOR.PRIMARY}, rgba(18, 52, 86, 0.5));
      border-radius: 0.5rem;
      border: 2px solid white;
    }
`;