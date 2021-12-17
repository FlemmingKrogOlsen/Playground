import styled from "styled-components";

interface ContainerProps {
  direction: string;
  gap: number;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 200px;
  padding: 10px;
  gap: ${({ gap }) => gap}px;
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.25rem;
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  color: ${({ theme }) => theme.COLOR.TEXT};
`;
