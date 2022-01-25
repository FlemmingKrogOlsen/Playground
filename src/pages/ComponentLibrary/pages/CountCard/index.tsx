import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import CountCard from "components/CountCard";
import { Editor, EditorItem, SpaceEvenly } from "layout/nested.pages";

const text = `<CountCard start={0} end={100} duration={2} />
`;

const CountCardPage = () => {
  return (
    <>
      <SpaceEvenly>
        <CountCard start={0} end={100} duration={2} />
      </SpaceEvenly>
      <Editor>
        <EditorItem>
          <pre>{text}</pre>
        </EditorItem>
        <ButtonCopyClipboard text={text} />
      </Editor>
    </>
  );
};

export default CountCardPage;
