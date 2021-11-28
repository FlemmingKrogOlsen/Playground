import styled from "styled-components";
import { colors } from "./colors";

const TitleBarHeight: number = 40;
const PanelHeight: number = 280;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  overflow: hidden;
  border: 2px solid ${colors.primary};
  margin-bottom: 10px;
`;

const Title = styled.div`
  position: relative;
  background-color: ${colors.primary};
  color: ${colors.inactiveText};
  width: 100%;
  height: ${TitleBarHeight}px;
  font-size: 0.75rem;
  transition: background-color 1s ease-in-out;

  @media only screen and (min-width: 600px) {
    font-size: 1rem;
  }

  &:not(:nth-last-child(2))::after {
    content: "";
    position: absolute;
    inset: 0px 0px 0px 0px;
    border: 1px solid transparent;
  }

  &:not(:nth-last-child(2))::after {
    border-right-color: transparent;
  }
`;

const Content = styled.div`
  overflow: auto;
  position: relative;
  transition: margin 0.3s ease 0.1s;
  color: ${colors.primary};
  height: ${PanelHeight}px;
  margin-bottom: -${PanelHeight}px;
  margin-right: 0;
  padding: 5px 10px;
  width: 100%;
  background: ${colors.secondary};
  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${colors.primary};
    border: 2px solid ${colors.secondary};
  }
`;

const Text = styled.span`
  bottom: 0px;
  display: block;
  position: absolute;
  white-space: nowrap;
  width: 100%;
  transform: rotate(0deg);
  writing-mode: lr-tb;
  padding: 0 8px;
  line-height: ${TitleBarHeight + 2}px;
`;

const RadioBtn = styled.input`
  cursor: pointer;
  margin: 0;
  opacity: 0;
  z-index: 1;
  width: 100%;
  height: ${TitleBarHeight}px;
  font-size: 1rem;
  margin-bottom: -${TitleBarHeight}px;
  margin-right: 0;

  &:checked + ${Title} + ${Content} {
    margin-bottom: 0;
    margin-right: 0;
  }

  &:checked + ${Title} {
    background-color: ${colors.primary};
    font-weight: bold;
    color: white;
  }

  &:hover + ${Title} {
    background-color: ${colors.hover};
  }
`;

export { Container, Title, Content, RadioBtn, Text };
