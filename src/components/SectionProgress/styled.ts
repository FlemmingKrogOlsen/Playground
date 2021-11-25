import styled from "styled-components";

const colors = {
  primary: "#123456",
  secondary: "#ffffff",
  text: "#123456",
  headerText: "#ffffff",
  border: "gray",
  sliderBackground: "#eeeeee"
};

const Container = styled.div`
  border: 5px solid ${colors.primary};
  margin-bottom: 10px;
  background: ${colors.secondary};
`;

const Header = styled.div`
  position: relative;
  text-align: center;
  border-bottom: 5px solid ${colors.primary};
  h2 {
    position: relative;
    z-index: 100;
    color: ${colors.headerText};
  }
`;

const Content = styled.div<{ height: number }>`
  padding: 5px 10px;
  background: ${colors.secondary};
  color: ${colors.text};
  height: ${({ height }) => height}px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 20px;
    background-color: ${colors.sliderBackground};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.primary};

  }
`;

const ProgressContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${colors.border};
`;

interface IProgress {
  progress: number;
}

const ProgressIndicator = styled.div.attrs<IProgress>((props) => ({
  style: {
    width: props.progress + "%",
  },
}))<IProgress>`
  height: 100%;
  background: ${colors.primary};
`;

const Procent = styled.div`
  position: absolute;
  bottom: 2px;
  right: 4px;
  font-size: 0.75rem;
  z-index: 99;
  color: ${colors.headerText};
  span {
    font-size: 0.5rem;
    font-weight: bold;
  }
`;

export {
  Container,
  Header,
  Content,
  ProgressContainer,
  ProgressIndicator,
  Procent,
};
