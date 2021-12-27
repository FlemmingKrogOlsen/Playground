import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import Spinner from "components/Spinner";
import { Editor, EditorItem, SpaceEvenly } from "layout/nested.pages";
import { Container } from "layout/nested.styled";

const text = `<Spinner 
  color="#123456" 
  scale={2}
/>`;

const SpinnersPage = () => (
  <>
    <SpaceEvenly>
      <Spinner color="#123456" scale={2} />
    </SpaceEvenly>
    <Editor>
      <EditorItem>
        <pre>{text}</pre>
      </EditorItem>
      <EditorItem>
        <Container>props are optional.</Container>
      </EditorItem>
      <ButtonCopyClipboard text={text} />
    </Editor>
  </>
);

export default SpinnersPage;
