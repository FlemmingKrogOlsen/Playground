import styled from "styled-components";

const border = `2px solid #123456`;

const colors = {
  sort: {
    backgroundColor: "rgba(18, 52, 86, 0.5)", // needs alpha to work
  },
  odd: {
    backgroundColor: "rgba(222, 222, 222, 0.5)", // needs alpha to work
    textColor: "#000000",
  },
  even: {
    backgroundColor: "#123456",
    textColor: "#ffffff",
  },
  hover: {
    backgroundColor: "lightgray",
    textColor: "#ffffff",
  },
};

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: ${border};
  border-top: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const TableHeader = styled.thead`
  tr {
    border-bottom: ${border};
  }

  @media screen and (max-width: 600px) {
    display: block;
    th,
    tr {
      display: block;
    }
    tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
  }
`;

export const RowLayout = styled.tr<Playground_CustumTable_RowLayout>`
  font-weight: ${(props) => (props.header ? "bolder" : "normal")};
  td {
    padding: 10px;
    font-variant-numeric: tabular-nums;

    &:first-child {
      padding-left: 10px;
      @media screen and (max-width: 600px) {
        background: ${colors.even.backgroundColor};
        color: ${colors.even.textColor};
        margin-top: 10px;
      }
    }

    @media screen and (max-width: 600px) {
      font-size: 12px;
      text-align: right;
    }
  }
  @media screen and (max-width: 600px) {
    border-bottom: none;
  }

  &:hover {
    ${(props) =>
      props.header ? null : "background:" + colors.hover.backgroundColor};
    ${(props) => (props.header ? null : "color:" + colors.hover.textColor)};
  }
`;

export const TDSeperator = styled.td`
  width: 50px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const TableBody = styled.tbody`
  td,
  tr {
    padding: 10px;
  }
  &:nth-child(odd) {
    background-color: ${colors.odd.backgroundColor};
    color: ${colors.odd.textColor};
  }
  @media screen and (max-width: 600px) {
    display: block;
    td,
    tr {
      display: block;
    }
    tr {
      padding: 0px;
    }

    td {
      border: none;
      position: relative;
      padding-left: 65%;

      &:last-child {
        border: none;
      }

      &::before {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 65%;
        text-align: left;
        padding-right: 10px;
        white-space: nowrap;
        content: attr(data-column);
        font-weight: bold;
      }
    }
  }
`;

export const Cell = styled.td`
  text-align: ${(props) => props.align};
`;

export const Col = styled.col<Playground_CustumTable_Col>`
  ${(props) =>
    props.activeCol ? "background:" + colors.sort.backgroundColor : null};
`;
