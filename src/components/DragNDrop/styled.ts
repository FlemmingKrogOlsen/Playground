import styled from "styled-components";

const defaultRadius = 7;

const Container = styled.div<{ count: number; groupWidth: number }>`
  display: grid;
  grid-template-columns: repeat(
    ${({ count }) => count},
    ${({ groupWidth }) => groupWidth + defaultRadius * 2}px
  );
  gap: ${defaultRadius}px;
  align-items: flex-start;
  justify-content: center;
`;

const Group = styled.div`
  background-color: #123456;
  padding: ${defaultRadius}px;
  padding-bottom: 0px;
  box-shadow: 0 15px 30px 0 hsla(0, 0%, 0%, 0.2),
    0 5px 10px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: ${defaultRadius + 3.5}px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  color: black;
  text-align: center;
  margin-bottom: ${defaultRadius}px;
  background: white;
  padding: ${defaultRadius}px 0;
  border-radius: 7px;
  &:only-child {
    background: hsl(0, 0%, 75%);
    color: hsl(0, 0%, 85%);
  }
`;

const Item = styled.div<{ isDrag: boolean }>`
  background-color: ${({ isDrag }) => (isDrag ? "hsl(0, 0%, 75%)" : "white")};
  color: ${({ isDrag }) => (isDrag ? "hsl(0, 0%, 75%)" : "black")};
  padding: 5px;
  border-radius: 7px;
  transform: translateZ(0px);
  margin-bottom: ${defaultRadius}px;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

export { Container, Group, Title, Item };
