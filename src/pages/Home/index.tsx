import styled from "styled-components";
import FlipCard from "components/FlipCard";
import { Main } from "layout/nested.styled";
import useDoNotTrack from "helpers/useDoNotTrack";
import useDarkMode from "helpers/isDarkMode";

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
          <div>
            <h3>System Settings</h3>
            <br />
            Is 'Do Not Track' enabled
            <br />
            in your browser? {useDoNotTrack() ? "Yes" : `No`}
            <br />
            <br />
            is 'Dark Mode' enabled? {useDarkMode() ? "Yes" : `No`}
          </div>
        </FlipCard>
      </Container>
    </Main>
  );
};

export default Home;
