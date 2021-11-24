import { TableFixedHeader } from "../../../../components";
import type { configType } from "../../../../components/TableFixedHeader/types";
import { data } from "./data";

const config: configType = {
  maxRows: 4
};

const TableFixedHeaderPage = () => {
  return (
    <TableFixedHeader
      caption="Caption Text"
      footer="Footer Text"
      data={data}
      config={config}
    />
  );
};

export default TableFixedHeaderPage;
