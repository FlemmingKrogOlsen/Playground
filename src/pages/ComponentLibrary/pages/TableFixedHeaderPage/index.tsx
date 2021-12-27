import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import TableFixedHeader from "components/TableFixedHeader";
import type { configType } from "components/TableFixedHeader/types";
import { Editor, EditorItemLarge } from "layout/nested.pages";
import { data } from "./data";

const config: configType = {
  maxRows: 4,
};

const text = `const data = ${JSON.stringify(data, null, 2)};

const config = {
  maxRows: 4,
};

<TableFixedHeader
  caption="Caption Text"
  footer="Footer Text"
  data={data}
  config={config}
/>
`;

const TableFixedHeaderPage = () => (
  <>
    <TableFixedHeader
      caption="Caption Text"
      footer="Footer Text"
      data={data}
      config={config}
    />
    <Editor>
      <EditorItemLarge>
        <pre>{text}</pre>
      </EditorItemLarge>
      <ButtonCopyClipboard text={text} />
    </Editor>
  </>
);

export default TableFixedHeaderPage;
