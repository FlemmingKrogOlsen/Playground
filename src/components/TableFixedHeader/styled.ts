import styled from "styled-components";

const tbodyRowHeight: number = 29;
const theadRowHeight: number = tbodyRowHeight + 10;

const Container = styled.div<{ maxRows?: number }>`
  padding-right: 5px;
  background: #123456;

  div {
    height: ${({ maxRows }) =>
    maxRows
      ? maxRows * tbodyRowHeight + theadRowHeight
      : 200}px;
    overflow-y: auto;
    border-bottom: 5px solid #123456;

    &::-webkit-scrollbar {
      width: 10px;
      background-color: #123456;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #123456;
      border: 2px solid white;
    }
  }
`;

const Title = styled.div`
  background: #123456;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  padding: 0 5px;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  padding: 0 5px;
  background: #123456;

  thead {
    top: 0px;
    position: sticky;
    background: white;
    text-align: left;
    color: #123456;
    tr th {
      border-bottom: 5px solid #123456;
      padding: 5px 15px 5px 10px;
    }
  }

  tbody {
    tr {
      td {
        padding: 5px 15px 5px 10px;
      }
      color: black;
      &:nth-child(odd) {
        background-color: lightgray;
      }
      &:nth-child(even) {
        background-color: #dedede;
      }
      &:hover {
        background: gray;
        color: white;
      }
    }
  }

  tfoot {
    width: 100%;
    text-align: right;
    height: 30px;
    padding: 3px 15px 0 5px;
    color: white;
    bottom: 0px;
    position: sticky;
    background: #123456;
  }
`;

export { Table, Container, Title };
