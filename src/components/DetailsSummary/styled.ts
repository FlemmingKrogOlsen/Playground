import styled from "styled-components";

const colors = {
  primary: "#123456",
  secondary: "#fff",
};

const animSpeed = "0.5s";

const Title = styled.summary`
  padding: 10px 0px;
  display: block;
  position: relative;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  outline: none;

  &::before,
  &::after {
    width: 16px;
    height: 2px;
    position: absolute;
    top: 50%;
    right: 0;
    content: "";
    background-color: currentColor;
    text-align: right;
    transform: translateY(-50%);
  }

  &::after {
    transform: translateY(-50%) rotate(90deg);
  }

  [open] &::after {
    transform: translateY(-50%) rotate(180deg);
  }

  &::-webkit-details-marker {
    display: none;
  }
`;

const Container = styled.details`
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 0 16px;
  width: 100%;
  position: relative;
  border: 1px solid ${colors.primary};
  border-radius: 0.5rem;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  transition: background-color ${animSpeed};

  > :last-child {
    margin-bottom: 16px;
  }

  &[open] {
    background: ${colors.secondary};
    color: ${colors.primary};
  }

  &[open]::before {
    opacity: 0.6;
  }

  &::before {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
    opacity: 0.15;
    pointer-events: none;
    transition: opacity ${animSpeed};
    z-index: -1;
  }
`;

const Content = styled.p`
  margin-bottom: 16px;
  line-height: 1.5;
  color: ${colors.primary};
`;

export { Title, Container, Content };
