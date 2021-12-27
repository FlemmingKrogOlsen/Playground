import { useState } from "react";
import DragNDrop from "components/DragNDrop";
import { initial_state } from "./data";
import { Editor, EditorItem } from "layout/nested.pages";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";

const DragNDropPage = () => {
  const [data, setData] = useState(initial_state);

  const text = `const data = ${JSON.stringify(data, null, 2)};

<DragNDrop
  list={data}
  onListChange={setData}
  groupWidth={200}
/>
`;

  return (
    <>
      <DragNDrop list={data} onListChange={setData} groupWidth={200} />
      <Editor>
        <EditorItem>
          <pre>{text}</pre>
        </EditorItem>
        <ButtonCopyClipboard text={text} />
      </Editor>
    </>
  );
};

export default DragNDropPage;
