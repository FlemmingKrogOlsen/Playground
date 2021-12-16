import styled from "styled-components";

interface ContainerProps {
  direction: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 200px;
  padding: 10px;
  gap: 5px;
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;
