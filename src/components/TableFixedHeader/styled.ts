import styled from "styled-components";
import { configType } from "./types";

const tbodyRowHeight: number = 29;
const theadRowHeight: number = tbodyRowHeight + 10;

const Wrapper = styled.div<{ color: string }>`
  background: ${({ color }) => color};
`;

const Container = styled.div<{ config: configType }>`
  padding-right: 5px;

  div {
    height: ${({ config }) =>
    config.maxRows
      ? (config.maxRows + 1) * tbodyRowHeight + theadRowHeight
      : 200}px;
    overflow-y: auto;
    border-bottom: 5px solid ${({ config }) => config.backgrondColor};

    // Firefox scrollbar support
    scrollbar-color: ${({ config }) => config.header?.backgroundColor} transparent;
    scrollbar-width: thin;

    // Webkit scrollbar support
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      border: 2px solid ${({ config }) => config.header?.backgroundColor};
    }
  }
`;

const Caption = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  padding: 0 5px;
`;

const Table = styled.table<{ config: configType }>`
  width: 100%;
  border-spacing: 0;
  padding: 0 5px;

  thead {
    top: 0px;
    position: sticky;
    background: ${({ config }) => config.header?.backgroundColor};
    text-align: left;
    color: ${({ config }) => config.header?.textColor};
    tr th {
      border-bottom: 5px solid ${({ config }) => config.backgrondColor};
      padding: 5px 15px 5px 10px;
    }
  }

  tbody {
    tr {
      td {
        padding: 5px 15px 5px 10px;
      }
      &:nth-child(odd) {
        color: ${({ config }) => config.body?.odd?.textColor};
        background-color: ${({ config }) => config.body?.odd?.backgroundColor};
      }
      &:nth-child(even) {
        color: ${({ config }) => config.body?.even?.textColor};
        background-color: ${({ config }) => config.body?.even?.backgroundColor};
      }
      &:hover {
        color: ${({ config }) => config.body?.hover?.textColor};
        background-color: ${({ config }) =>
    config.body?.hover?.backgroundColor};
      }
    }
  }

  tfoot {
    width: 100%;
    text-align: right;
    height: 30px;
    padding: 3px 15px 0 5px;
    color: ${({ config }) => config.footer?.textColor};
    bottom: 0px;
    position: sticky;
    background: ${({ config }) => config?.backgrondColor};
  }
`;

export { Table, Container, Caption, Wrapper };
