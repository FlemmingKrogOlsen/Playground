import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type IBox = {
  options: {
    boxSizing: string;
  }
};

export const Box = styled.div<IBox>`
  box-sizing: ${(props) => props.options.boxSizing};
  width: 400px;
  height: 100%;
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  color: ${({ theme }) => theme.COLOR.TEXT};
  text-align: center;
  margin: 20px;
  padding: 20px;
`;
