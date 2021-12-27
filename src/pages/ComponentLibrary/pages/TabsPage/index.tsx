import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import Tabs from "components/Tabs";
import { Editor, EditorItem } from "layout/nested.pages";
import { Tabs_data } from "./Tabs_data";

const text = `const data = [
    {
      id: "1",
      name: "Tab page 1",
      content: [YourComponentHere],
    },
    {
      id: "2",
      name: "Tab page 2",
      content: [YourComponentHere],
      selected: true,
    },
    {
      id: "3",
      name: "Tab page 3",
      content: [YourComponentHere],
    },
  ];;

<Tabs 
    name="Tabs" 
    data={data}
/>
`;

const InfoCardPage = () => (
  <>
    <Tabs name="Tabs" data={Tabs_data} />
    <Editor>
      <EditorItem>
        <pre>{text}</pre>
      </EditorItem>
      <ButtonCopyClipboard text={text} />
    </Editor>
  </>
);

export default InfoCardPage;
