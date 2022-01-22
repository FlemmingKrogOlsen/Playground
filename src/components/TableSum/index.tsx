import setValueFormat from "helpers/setValueFormat";
import { FC, ReactElement } from "react";
import { Table, THead, TBody, TFoot, TotalTd, Title } from "./styled";
import { IProps } from "./types";

const TableWithSum: FC<IProps> = ({ data, sum, total, title }): ReactElement => {
  const ColCount: number = (data && data.headers.length) || 0;

  const getColumnTotal = (id: number) => {
    let sum: number = 0;
    data?.rows.forEach((item) => {
      sum += item.values[id];
    });
    return sum;
  };

  const getRowTotal = (data: Array<number>) => {
    const total = data.reduce(
      (prevValue, currentValue) => prevValue + currentValue,
      0
    );
    return total;
  };

  const getTotalSum = () => {
    let sum: number = 0;
    data.rows.forEach((item) => {
      const totalsum = getRowTotal(item.values);
      sum += totalsum;
    });
    return sum;
  };

  return (
    <Table>
      {title && <Title>{title}</Title>}

      <THead>
        <tr>
          {data?.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          {total && <th>Total</th>}
        </tr>
      </THead>
      <TBody>
        {data?.rows.map((row, index) => (
          <tr key={index}>
            <td>{row.title}</td>
            {row.values.map((cell, cellindex) => {
              return <td key={cellindex}>{setValueFormat(cell || 0, 2)}</td>;
            })}
            {total && <TotalTd>{setValueFormat(getRowTotal(row.values), 2)}</TotalTd>}
          </tr>
        ))}
      </TBody>

      {sum && (
        <TFoot>
          <tr>
            <td>SUM</td>
            {[...Array(ColCount - 1)].map((_, i: number) => (
              <td key={i}>{setValueFormat(getColumnTotal(i), 2)}</td>
            ))}
            {sum && total && <td>{setValueFormat(getTotalSum(), 2)}</td>}
          </tr>
        </TFoot>
      )}
    </Table>
  );
};

export default TableWithSum;
