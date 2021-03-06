import styled, { css } from "styled-components";
import { scrollBarsCSS } from "theme/scrollbars";
import { reduceSize } from "./styled";

export const Url = styled.a.attrs({
  target: "_blank",
  rel: "noreferrer",
})`
  font-weight: bold;
  color: ${({ theme }) => theme.COLOR.TEXT};
  &:before {
    content: "🔗";
    margin-right: 5px;
    font-weight: normal;
  }
`;

export const Editor = styled.div`
  position: absolute;
  top: 0px;
  left: calc(100% + 1rem);
  width: ${({ theme }) => theme.DATA.ASIDE_WIDTH};
  margin: 0 auto;
  padding: 0.5rem;
  text-align: center;
  color: ${({ theme }) => theme.COLOR.TEXT};
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  border-radius: 0.5rem;
  max-height: calc(100vh - ${reduceSize}px);
  overflow-y: auto;
  overflow-x: hidden;
  ${scrollBarsCSS};
  h3 {
    margin-bottom: 10px;
  }
`;

export const EditorItem = styled.div`
  background: ${({ theme }) => theme.COLOR.TEXT};
  color: ${({ theme }) => theme.COLOR.PRIMARY};
  padding: 10px;
  border-radius: 0.25rem;
  text-align: left;
  font-size: 0.7rem;
  margin-bottom: 10px;
`;

export const EditorItemLarge = styled(EditorItem)`
  height: calc(100vh - ${reduceSize}px - 74px);
  overflow-y: auto;
  ${scrollBarsCSS};
`;


const dividerCommon = css`
  content: "";
  position: absolute;
  width: 320px;
  height: 0.5rem;
  transform: translateX(-50%);
  border-radius: 0.5rem;
`;

export const EditorItemDivider = styled.div`
  position: relative;
  background: #181818};
  height: 2rem;
  transform: translateX(-1rem);
  width: calc(100% + 2rem);
  &:before {
    ${dividerCommon};
    top:0;
    background: ${({ theme }) => theme.COLOR.PRIMARY};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  };
  &:after {
    ${dividerCommon};
    bottom:0;
    background: ${({ theme }) => theme.COLOR.PRIMARY};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  };
`;

export const SpaceEvenly = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const PageBanner = styled.header`
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  padding: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.COLOR.TEXT};
  margin-bottom: 10px;
  text-transform: uppercase;
  position: relative;
  a {
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: white;
    font-size: 0.5rem;
  }
`;

export const InputField = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-radius: 0.25rem;
  overflow: hidden;
  color: #123456;
  font-size: 0.75rem;
  background: white;

  label {
    background: lightgray;
    width: 50%;
    text-align: left;
    padding: 5px 5px 5px 10px;
  }

  input,
  select {
    width: 50%;
    border: none;
    outline: none;
  }

  input {
    margin-right: 3px;
    padding-left: 5px;
  }
`;

export enum infoTypes {
  success = "success",
  danger = "danger",
  warning = "warning",
  info = "info",
}

export const Info = styled.div<{
  type: infoTypes;
}>`
  padding: 5px;
  background: ${(props) => {
    switch (props.type) {
      case "success":
        return props.theme.INFO.SUCCESS;
      case "danger":
        return props.theme.INFO.DANGER;
      case "warning":
        return props.theme.INFO.WARNING;
      case "info":
        return props.theme.INFO.INFO;
      default:
        return "transparent";
    }
  }};
  margin: 5px;
  font-size: 0.7rem;
`;
