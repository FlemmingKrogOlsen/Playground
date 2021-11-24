import styled from "styled-components";

const borderGap: string = "5px";

const colors = {
  primary: "#123456",
  secondary: "#ffffff",
  header: {
    backgroundColor: "#ffffff",
    textColor: "#123456",
},
  body: {
    odd: {
        backgroundColor: "#d3d3d3",
        textColor: "#000000",
    },
    even: {
        backgroundColor: "#dedede",
        textColor: "#000000",
    },
    hover: {
        backgroundColor: "gray",
        textColor: "#ffffff",
    },
},
  sum: "#fafafa",
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 15px 30px 0 hsla(0, 0%, 0%, 0.2), 0 5px 10px 0 hsla(0, 0%, 0%, 0.2);
  margin-bottom: 10px;
  border: ${borderGap} solid ${colors.primary};
  background: ${colors.primary};
`;

const Title = styled.caption`
  background: ${colors.primary};
  color: ${colors.secondary};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 32px;
  margin-bottom: -5px;
`;

const THead = styled.thead`
  border-bottom: ${borderGap} solid ${colors.primary};

  th,
  tr {
    background: ${colors.header.backgroundColor};
    color: ${colors.header.textColor};
    padding: 5px 10px;
    text-align: right;
    text-transform: uppercase;
    &:first-child {
      text-align: left;
    }
  }
`;

const TBody = styled.tbody`
  tr {
    color: ${colors.secondary};
    &:nth-child(even) {
      background-color: ${colors.body.even.backgroundColor};
      color: ${colors.body.even.textColor};
    }
    &:nth-child(odd) {
      background-color: ${colors.body.odd.backgroundColor};
      color: ${colors.body.odd.textColor};

    }
    &:hover {
      background: ${colors.body.hover.backgroundColor};
      color: ${colors.body.hover.textColor};

    }
  }

  tr td {
    padding: 5px 15px 5px 10px;
    text-align: right;
    &:first-child {
      text-align: left;
    }
  }
`;

const TotalTd = styled.td`
  font-weight: bold;
`;

const TFoot = styled.tfoot`
  background: ${colors.primary};
  color: ${colors.secondary};

  tr {
    border-top: ${borderGap} solid ${colors.primary};
  }
  tr td {
    padding: 5px 15px 5px 10px;
    text-align: right;
    font-weight: bold;
    &:first-child {
      text-align: left;
    }
  }
`;

export { Table, THead, TBody, TFoot, TotalTd, Title };
