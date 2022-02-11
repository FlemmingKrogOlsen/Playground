import Accordion from "components/Accordion";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import { Editor, EditorItem } from "layout/nested.pages";
import { Accordion_data } from "./Accordion_data";

const text = `const data = [
  {
    id: 1,
    title: "Title #1",
    body: YourComponentHere,
    show: true,
  },
  {
    id: 2,
    title: "Title #2",
    body: YourComponentHere,
    show: false,
  },
  {
    id: 3,
    title: "Title #3",
    body: YourComponentHere,
    show: false,
  },
]

const AccordionPage = () => (
  <Accordion id="[id]" data={data} />
);
`;

const AccordionPage = () => (
  <>
    <Accordion id="Accordion" data={Accordion_data} />
    <Editor>
      <EditorItem>
        <pre>{text}</pre>
      </EditorItem>
      <ButtonCopyClipboard text={text} />
    </Editor>
  </>
);

export default AccordionPage;
