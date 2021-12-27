import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import FlipCard from "components/FlipCard";
import { Editor, EditorItem, SpaceEvenly } from "layout/nested.pages";

const text = `<FlipCard 
  title="Welcome to Component Playground"
>
  No clue what to put here
</FlipCard>
`;

const FlipCardPage = () => (
  <>
    <SpaceEvenly>
      <FlipCard title="Welcome to Component Playground">
        No clue what to put here
      </FlipCard>
    </SpaceEvenly>
    <Editor>
      <EditorItem>
        <pre>{text}</pre>
      </EditorItem>
      <ButtonCopyClipboard text={text} />
    </Editor>
  </>
);

export default FlipCardPage;
