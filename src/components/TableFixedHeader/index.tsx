import React, { FC } from "react";
import { Table, Container, Title } from "./styled";

type row = {
  title: string;
  data: string[];
};

export type tableDataType = {
  headers: string[];
  rows: row[];
};

interface IProps {
  title: string;
  footer?: string;
  data: tableDataType;
  maxRows?: number;
}

const TableFixedHeader: FC<IProps> = ({ title, footer, data, maxRows }) => {
  return (
    <>
      <Title>{title}</Title>
      <Container maxRows={maxRows || 10}>
        <div>
          <Table>
            <thead>
              <tr>
                {data.headers.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.title}</td>
                    {item.data.map((item, index) => {
                      return <td key={index}>{item}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
            {footer && <tfoot><tr><td colSpan={data.headers.length}>{footer}</td></tr></tfoot>}
          </Table>
        </div>
      </Container>
    </>
  );
};

export default TableFixedHeader;
