import { useState } from "react";
import DragNDrop from "components/DragNDrop";
import { initial_state } from "./data";
import { Editor, EditorItem } from "layout/nested.pages";

const DragNDropPage = () => {
  const [data, setData] = useState(initial_state);
  return (
    <>
      <DragNDrop list={data} onListChange={setData} groupWidth={200} />
      <Editor>
        <EditorItem>
          <pre style={{ fontSize: "10px" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </EditorItem>
      </Editor>
    </>
  );
};

export default DragNDropPage;
