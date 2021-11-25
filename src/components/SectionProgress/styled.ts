import styled from "styled-components";

const colors = {
  primary: "#123456",
  secondary: "#ffffff",
  text: "#123456",
  border: "#ccc",
};

const Container = styled.div`
  border: 5px solid ${colors.primary};
  margin-bottom: 10px;
  background: ${colors.secondary};
`;

const Header = styled.div`
  position: relative;
  color: ${colors.text};
  text-align: center;
`;

const Content = styled.div<{ height: number }>`
  padding: 10px;
  background: ${colors.secondary};
  color: ${colors.text};
  height: ${({ height }) => height}px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 20px;
    background-color: ${colors.border};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.primary};
    border-left: 6px solid ${colors.border};
    border-right: 5px solid ${colors.border};
    border-bottom: 5px solid ${colors.border};
  }
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 5px;
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
  height: 5px;
  background: ${colors.primary};
`;

const Procent = styled.div`
  position: absolute;
  bottom: 5px;
  right: 2px;
  font-size: 0.75rem;
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
