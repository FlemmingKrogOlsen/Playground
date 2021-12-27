import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import ProgressPieCard, { defaultColors } from "components/ProgressPieCard";
import { SpaceEvenly, Editor, EditorItem } from "layout/nested.pages";
import { Container } from "layout/nested.styled";
import { useState } from "react";
import { ProcentageRange } from "./formElements_styled";

const ProgressIndicatorCardPage = () => {
  const [rangeval, setRangeval] = useState<string>("50");

  const text = `<ProgressPieCard 
    value={${parseInt(rangeval, 10)}} 
    colors={${JSON.stringify(defaultColors, null, 6)}}>
  Progress title
</ProgressPieCard>
`;

  return (
    <>
      <SpaceEvenly>
        <ProgressPieCard value={parseInt(rangeval, 10)} colors={defaultColors}>
          Progress title
        </ProgressPieCard>
      </SpaceEvenly>

      <Editor>
        <ProcentageRange
          value={rangeval}
          onChange={(event) => setRangeval(event.target.value)}
        />
        <EditorItem>
          <pre>{text}</pre>
        </EditorItem>
        <EditorItem>
          <Container>
            colors are optional, component has default colors
          </Container>
        </EditorItem>
        <ButtonCopyClipboard text={text} />
      </Editor>
    </>
  );
};

export default ProgressIndicatorCardPage;
