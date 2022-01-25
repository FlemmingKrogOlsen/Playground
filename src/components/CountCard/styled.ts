import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

const Count = styled.div`
  color: #123456;
  text-align: center;
  height: 100%;
  font-size: 2rem;
  font-variant-numeric: tabular-nums;
`;

const Text = styled.div`
  color: #123456;
  font-size: 1.25rem;
  padding: 5px 10px;
  text-align: center;
`;

export { Container, Count, Text };