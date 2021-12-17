import styled from "styled-components";

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

export const Editor = styled.div`
  position: absolute;
  top: 0px;
  left: calc(100% + 10px);
  width: 250px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  color: ${({ theme }) => theme.COLOR.TEXT};
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  border-radius: 0.5rem;
`;

export const EditorItem = styled.div`
  background: ${({ theme }) => theme.COLOR.BACKGROUND};
  color: ${({ theme }) => theme.COLOR.PRIMARY};
  padding: 10px;
  border-radius: 0.25rem;
  text-align: left;
  font-size: 0.7rem;
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
`;