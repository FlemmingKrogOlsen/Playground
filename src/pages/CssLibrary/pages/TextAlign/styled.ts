import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  color: ${({ theme }) => theme.COLOR.TEXT};
  text-align: center;
`;

export const Text = styled.div<{
  align: string;
}>`
  text-align: ${(props) => props.align};
  width: calc(100% - 10px);
  padding: 5px 10px;
  font-size: 1rem;
`;
