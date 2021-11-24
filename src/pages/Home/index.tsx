import { Main } from "../styled";
import styled from "styled-components";
import FlipCard from "../../components/FlipCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Home = () => {
  return (
    <Main>
      <Container>
        <FlipCard title="Welcome to Component Playground">
          No clue what to put here
        </FlipCard>
      </Container>
    </Main>
  );
};

export default Home;
