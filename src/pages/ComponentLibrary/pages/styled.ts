import styled from "styled-components";

export const Editor = styled.div`
  position: absolute;
  top: 0px;
  left: calc(100% + 10px);
  width: 250px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid gray;
  text-align: center;
  color: white;
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  border-radius: 0.5rem;
`;

export const CodeBlock = styled.div`
  background: white;
  color: black;
  padding: 10px;
  border-radius: 0.25rem;
  text-align: left;
  font-size: 0.7rem;
`;

export const SpaceEvenly = styled.div`
  display: flex;
  justify-content: space-evenly;
`;