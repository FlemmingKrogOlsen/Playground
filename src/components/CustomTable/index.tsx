import React, { ReactElement, FC } from "react";
import {
  TableHeader,
  TableBody,
  RowLayout,
  Cell,
  TDSeperator,
  Table,
  Col,
} from "./styled";
import isMobile from "../../helpers/isMobile";
import type { IProps, IHeader } from "./types";

export const CustomTableHeader = (data: Array<IHeader>): ReactElement => (
  <TableHeader>
    <RowLayout header>
      {data &&
        data.map((item, index: number) => {
          return item.name ? (
            <Cell
              width={item.width}
              align={item.headerAlign as any}
              key={index}
              data-column={item.name}
              dangerouslySetInnerHTML={{
                __html: `${item.title}`,
              }}
            />
          ) : !isMobile() ? (
            <TDSeperator key={index} />
          ) : null;
        })}
    </RowLayout>
  </TableHeader>
);

export const CustomTableContent = (
  data: Array<any>,
  headers: Array<IHeader>
): Array<ReactElement> => {
  return data.map((item, index: number) => (
    <TableBody key={index}>
      <RowLayout>
        {headers.map((header, index: number) => {
          return header.name ? (
            isMobile() && index === 0 ? (
              <Cell key={index} data-column={item[header.name]}>
                &nbsp;
              </Cell>
            ) : (
              <Cell
                key={index}
                align={header.align as any}
                data-column={header.title}
              >
                {item[header.name]}
              </Cell>
            )
          ) : !isMobile() ? (
            <TDSeperator key={index} />
          ) : null;
        })}
      </RowLayout>
    </TableBody>
  ));
};

export const CustomTable: FC<IProps> = ({
  headers,
  data,
  state,
  sortBy,
}): ReactElement => {
  if (sortBy !== null) {
    data.sort((a, b) => {
      if (a[`${sortBy}`] < b[`${sortBy}`]) {
        return -1;
      }
      if (a[`${sortBy}`] > b[`${sortBy}`]) {
        return 1;
      }
      return 0;
    });
    // .reverse();
  }

  return (
    <Table>
      <colgroup>
        {headers &&
          headers.map((item, index: number) => {
            if (item.sortName === "") {
              return <col key={index} />;
            } else {
              return <Col activeCol={sortBy === item.sortName} key={index} />;
            }
          })}
      </colgroup>
      {CustomTableHeader(headers)}
      {!state ? <div>Loading</div> : data && CustomTableContent(data, headers)}
    </Table>
  );
};
