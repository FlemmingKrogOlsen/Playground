import { useState } from "react";
import Section from "components/Section";
import { Box, Container, InputField, Text, TextInfo } from "./index.styled";
import { Info, infoTypes, Editor, EditorItem } from "layout/nested.pages";
import Select from "nestedComponents/Select";
import MDNLink from "nestedComponents/MDNLink";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";

const flexDirections: string[] = [
  "row",
  "row-reverse",
  "column",
  "column-reverse",
];

const alignment: string[] = ["flex-start", "center", "flex-end", "stretch"];
const justifyOptions: string[] = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
];

const FlexBoxPage = () => {
  const [direction, setDirection] = useState<string>("row");
  const [gap, setGap] = useState<string>("5px");
  const [justify, setJustify] = useState<string>("center");
  const [align, setAlign] = useState<string>("center");

  const cssString = `.container {
  display: flex;
  flex-direction: ${direction};
  gap: ${gap};
}

.box1 {
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
}

.box2 {
  display: flex;
  flex-direction: column;
  align-items: ${align};
  justify-content: ${justify};
}

.box3 {
  display: flex;
  flex-direction: row;
  align-items: ${align};
  justify-content: ${justify};
}

`;

  return (
    <>
      {/* flex-direction */}
      <Section border shadow title="Preview Window">
        <Container direction={direction} gap={gap}>
          <Box align={align} justify={justify}>
            <TextInfo>default</TextInfo>
            <Text>#1</Text>
            <Text>#2</Text>
            <Text>#3</Text>
          </Box>
          <Box align={align} justify={justify}>
            <TextInfo>column</TextInfo>
            <Text>#1</Text>
            <Text>#2</Text>
            <Text>#3</Text>
          </Box>
          <Box align={align} justify={justify}>
            <TextInfo>row</TextInfo>
            <Text>#1</Text>
            <Text>#2</Text>
            <Text>#3</Text>
          </Box>
        </Container>
      </Section>

      {/* Additional info... */}
      <Section border shadow title="Additional info...">
        <Info type={infoTypes.info}>
          flex-direction: {direction}, then justify-content ={" "}
          {direction.includes("row") ? "X" : "Y"} and align-items ={" "}
          {direction.includes("row") ? "Y" : "X"} .
        </Info>
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
        <InputField>
          <label htmlFor="direction">flex-direction</label>
          <Select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            options={flexDirections}
            id="direction"
          />
        </InputField>
        <InputField>
          <label htmlFor="gap">gap</label>
          <input
            type="text"
            id="gap"
            value={gap}
            onChange={(e) => setGap(e.target.value)}
          />
        </InputField>
        <InputField>
          <label htmlFor="justify">justify-content</label>
          <Select
            value={justify}
            onChange={(e) => setJustify(e.target.value)}
            options={justifyOptions}
            id="justify"
          />
        </InputField>
        <InputField>
          <label htmlFor="align">align-items</label>
          <Select
            value={align}
            onChange={(e) => setAlign(e.target.value)}
            options={alignment}
            id="align"
          />
        </InputField>
        <EditorItem>
          <pre>{cssString}</pre>
        </EditorItem>
        <ButtonCopyClipboard text={cssString} />
        <br />
        flex-direction : <MDNLink title="flex-direction" />
      </Editor>
    </>
  );
};

export default FlexBoxPage;
