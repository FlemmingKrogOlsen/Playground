import TableFixedHeader from "components/TableFixedHeader";
import type { configType } from "components/TableFixedHeader/types";
import { data } from "./data";

const config: configType = {
  maxRows: 4,
};

const TableFixedHeaderPage = () => (
  <TableFixedHeader
    caption="Caption Text"
    footer="Footer Text"
    data={data}
    config={config}
  />
);

export default TableFixedHeaderPage;
