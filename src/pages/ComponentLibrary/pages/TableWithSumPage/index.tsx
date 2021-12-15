import TableWithSum from "components/TableSum";
import { TableWithSum_data } from "./TableWithSum_data";

const TableWithSumPage = () => (
  <TableWithSum data={TableWithSum_data} total sum title="Caption TEXT" />
);

export default TableWithSumPage;
