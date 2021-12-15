import { Main } from "pages/styled";
import styled from "styled-components";
import FlipCard from "components/FlipCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Home = () => (
  <Main color="transparent">
    <Container>
      <FlipCard title="Welcome to My Playground">
        No clue what to put here
      </FlipCard>
    </Container>
  </Main>
);

export default Home;
