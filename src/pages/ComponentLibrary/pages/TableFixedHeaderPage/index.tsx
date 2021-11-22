import { TableFixedHeader } from "../../../../components";
import type { tableDataType } from "../../../../components/TableFixedHeader";

const data: tableDataType = {
  headers: ["Make", "Model", "Color", "Year"],
  rows: [
    {
      title: "Ford",
      data: ["Escort", "Blue", "1999"],
    },
    {
      title: "Ford",
      data: ["Escort", "Blue", "2000"],
    },
    {
      title: "Ford",
      data: ["Escort", "Blue", "2000"],
    },
    {
      title: "Ford",
      data: ["Escort", "Blue", "2000"],
    },
    {
      title: "Ford",
      data: ["Escort", "Blue", "2000"],
    },
    {
      title: "Ford",
      data: ["Escort", "Blue", "2000"],
    },
    {
      title: "Ford",
      data: ["Escort", "Blue", "2000"],
    },
    {
      title: "Ford",
      data: ["Escort", "Blue", "2000"],
    },
    {
      title: "Ford",
      data: ["Escort", "Blue", "2000"],
    },
    {
      title: "Ford",
      data: ["Escort", "Blue", "2000"],
    },
    {
      title: "Ford",
      data: ["Escort", "Blue", "2000"],
    },
    {
      title: "Ford",
      data: ["Escort", "Blue", "2001"],
    },
  ],
};

const TableFixedHeaderPage = () => {
  return <TableFixedHeader title="tabel" footer="footer" data={data} />;
};

export default TableFixedHeaderPage;
