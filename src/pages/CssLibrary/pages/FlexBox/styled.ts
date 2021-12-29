import styled from "styled-components";
import { ContainerProps, IBox } from "./types";

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 225px;
  padding: 10px;
  gap: ${({ gap }) => gap};
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;

export const Box = styled.div<IBox>`
  position: relative;
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width: 100%;
  height: 100%;
  font-size: 1.25rem;
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  color: ${({ theme }) => theme.COLOR.TEXT};

  &:nth-child(2) {
    flex-direction: column;
  }
  &:nth-child(3) {
    flex-direction: row;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  color: ${({ theme }) => theme.COLOR.TEXT};
  padding: 5px;
  border-radius: 0.25rem;
  width: 35px;
  aspect-ratio: 1;
  border: 2px solid white;
  margin: 1px;
`;

export const TextInfo = styled.div`
  position: absolute;
  top: 0;
  left: 3px;
  font-size: 0.75rem;
`;
