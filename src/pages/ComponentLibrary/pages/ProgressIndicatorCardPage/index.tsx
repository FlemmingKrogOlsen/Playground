import ProgressIndicatorCard from "../../../../components/ProgressIndicator";
import styled from "styled-components";

const colors = {
  cardTextColor: "#123456",
  cardBackground: "white",
  barBackground: "#dedede",
  barColor: "#123456",
  barTextColor: "#123456",
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const ProgressIndicatorCardPage = () => {
  return (
    <Container>
      <ProgressIndicatorCard value={75} colors={colors}>
        Progress title
      </ProgressIndicatorCard>
      <ProgressIndicatorCard value={45} colors={colors}>
        Progress title
      </ProgressIndicatorCard>
      <ProgressIndicatorCard value={29} colors={colors}>
        Progress title
      </ProgressIndicatorCard>
    </Container>
  );
};

export default ProgressIndicatorCardPage;
