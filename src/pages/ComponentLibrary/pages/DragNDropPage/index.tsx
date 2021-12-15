import { useState } from "react";
import DragNDrop from "components/DragNDrop";
import { Editor, CodeBlock } from "../pages.styled";
import { initial_state } from "./data";

const DragNDropPage = () => {
  const [data, setData] = useState(initial_state);
  return (
    <>
      <DragNDrop list={data} onListChange={setData} groupWidth={200} />
      <Editor>
        <CodeBlock>
          <pre style={{ fontSize: "10px" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </CodeBlock>
      </Editor>
    </>
  );
};

export default DragNDropPage;
