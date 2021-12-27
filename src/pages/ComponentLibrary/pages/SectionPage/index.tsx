import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import Section from "components/Section";
import { Editor, EditorItem } from "layout/nested.pages";

const text = `<Section 
  border 
  shadow 
  title="Section Title"
>
  [Content goes here]
</Section>
`;

const SectionPage = () => (
  <>
    <Section border shadow title="Section Title">
      <div style={{ padding: "1rem" }}>Section Content</div>
    </Section>
    <Editor>
      <EditorItem><pre>{text}</pre></EditorItem>
      <ButtonCopyClipboard text={text} />
    </Editor>
  </>
);

export default SectionPage;
