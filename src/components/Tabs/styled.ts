import styled from "styled-components";
import { colors } from "./colors";

const borderSize = "2px";

const Panel = styled.div<{ height: string }>`
  display: none;
  padding: 10px;
  background: ${colors.background};
  order: 99;
  width: 100%;
  color: ${colors.text};
  height: ${({ height }) => height};
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 20px;
    background-color: ${colors.sliderBackground};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.border};
  }
`;

const Label = styled.label`
  flex-grow: 1;
  width: auto;
  padding: 8px 10px;
  background-color: ${colors.state.inactive.background};
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  color: ${colors.state.inactive.color};
  transition: background-color 0.3s, color 0.3s;
  text-align: center;
  border-bottom: ${borderSize} solid ${colors.border};
  border-right: ${borderSize} solid ${colors.border};
  &:last-of-type {
    border-right: none;
  }
  &:hover {
    background-color: ${colors.state.hover.background};
    color: ${colors.state.hover.color};
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
  &:checked + ${Label} {
    background: ${colors.state.active.background};
    color: ${colors.state.active.color};
    border-bottom: 1px solid transparent;
  }
  &:focus + ${Label} {
    z-index: 1;
  }
  &:checked + ${Label} + ${Panel} {
    display: block;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  border: ${borderSize} solid ${colors.border};
  overflow: hidden;
  margin-bottom: 10px;
  align-items: stretch;
  background: ${colors.border};
`;

export { Container, Input, Label, Panel };
