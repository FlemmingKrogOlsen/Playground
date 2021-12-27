import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import TableWithSum from "components/TableSum";
import { Editor, EditorItem } from "layout/nested.pages";
import { TableWithSum_data } from "./TableWithSum_data";

const text = `const data = ${JSON.stringify(TableWithSum_data, null, 2)};

<TableWithSum 
  data={data} 
  total 
  sum 
  title="Caption TEXT"
/>
`;

const TableWithSumPage = () => (
  <>
    <TableWithSum data={TableWithSum_data} total sum title="Caption TEXT" />
    <Editor>
      <EditorItem>
        <pre>{text}</pre>
      </EditorItem>
      <ButtonCopyClipboard text={text} />
    </Editor>
  </>
);

export default TableWithSumPage;
