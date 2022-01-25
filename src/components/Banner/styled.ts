import styled from "styled-components";

export const Container = styled.div<Playground_BannerContainerProps>`
  overflow: hidden;
  position: relative;
  width: 100%;
  aspect-ratio: 4/1;
  background-color: #123456;
  border: 2px solid #123456;
  section {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    aspect-ratio: 4/1;
    opacity: ${(props) => (props.show ? 1 : 0)};
    filter: grayscale(${(props) => (props.show ? "0%" : "100%")});
    transition: opacity 2s ease-in-out, filter 10s ease-in-out;
  }

  footer {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    color: #123456;
    padding: 5px;
    transition: transform 1s ease-in-out;
    transform: translateY(100%);
  }

  &:hover footer {
    transform: translateY(0%);
  }
`;
