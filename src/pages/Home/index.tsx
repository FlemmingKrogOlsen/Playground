import styled from "styled-components";
import FlipCard from "components/FlipCard";
import { Main } from "layout/nested.styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Home = () => {
  return (
    <Main color="transparent">
      <Container>
        <FlipCard title="Welcome to My Playground">
          No clue what to put here
          <br />
          <br />
          <br />
          best color #123456
        </FlipCard>
      </Container>
    </Main>
  );
};

export default Home;
