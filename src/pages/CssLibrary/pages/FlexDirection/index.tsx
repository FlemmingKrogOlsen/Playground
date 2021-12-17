import { useState } from "react";
import Section from "components/Section";
import { Box, Container } from "./index.styled";
import { Info, infoTypes, Editor, EditorItem } from "layout/nested.pages";
import Select from "nestedComponents/Select";
import MDNLink from "nestedComponents/MDNLink";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";

const flexDirections: string[] = ["row", "row-reverse", "column", "column-reverse"];

const FlexBoxPage = () => {
  const title = "flex-direction";
  const [direction, setDirection] = useState<string>("row");
  const [gap, setGap] = useState<number>(5);

  const cssString = `.container {
  display: flex;
  flex-direction: ${direction};
  gap: ${gap}px;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

  return (
    <>
      {/* flexx-direction */}
      <Section border shadow title="Preview Window">
        <Container direction={direction} gap={gap}>
          <Box>Box #1</Box>
          <Box>Box #2</Box>
          <Box>Box #3</Box>
        </Container>
      </Section>

      {/* Additional info... */}
      <Section border shadow title="Additional info...">
        {(direction === "row-reverse" || direction === "column-reverse") && (
          <Info type={infoTypes.danger}>
            <h3>Accessibility concerns</h3>
            Using the flex-direction property with values of row-reverse or
            column-reverse will create a disconnect between the visual
            presentation of content and DOM order. This will adversely affect
            users experiencing low vision navigating with the aid of assistive
            technology such as a screen reader. If the visual (CSS) order is
            important, then screen reader users will not have access to the
            correct reading order.
          </Info>
        )}
      </Section>

      {/* Editor */}
      <Editor>
        flex-direction:
        <Select
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
          options={flexDirections}
        />
gap:
          <input type="number" value={gap} onChange={(e) => setGap(Number(e.target.value))} />

        <EditorItem>
          <pre>{cssString}</pre>
        </EditorItem>
        <ButtonCopyClipboard text={cssString} />
        <br />
        {title} : <MDNLink title={title} />
      </Editor>
    </>
  );
};

export default FlexBoxPage;
