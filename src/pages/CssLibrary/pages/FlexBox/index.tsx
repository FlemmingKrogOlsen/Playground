import { useState } from "react";
import Section from "components/Section";
import { Box, Container, Text, TextInfo } from "./styled";
import {
  Info,
  infoTypes,
  Editor,
  EditorItem,
  InputField,
} from "layout/nested.pages";
import Select from "componentsNested/Select";
import MDNLink from "componentsNested/MDNLink";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import {
  flexDirections,
  justifyOptions,
  alignment,
  flexboxSearchableTags,
} from "./data";
import { InputRange } from "componentsNested/InputRange";

const FlexBoxPage = () => {
  const [direction, setDirection] = useState<string>("row");
  const [gap, setGap] = useState<number>(0.5);
  const [justify, setJustify] = useState<string>("center");
  const [align, setAlign] = useState<string>("center");

  const text = `.container {
  display: flex;
  flex-direction: ${direction};
  gap: ${gap}rem;
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
      {/* Preview Window */}
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

      <Section
        border
        shadow
        title="flex-direction"
        component={<MDNLink name="flex-direction" value="row" />}
      >
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

      <Section
        border
        shadow
        title="gap"
        component={<MDNLink name="gap" value="1rem" />}
      >
        <div />
      </Section>

      <Section
        border
        shadow
        title="justify-content"
        component={<MDNLink name="justify-content" value="center" />}
      >
        <div />
      </Section>

      <Section
        border
        shadow
        title="align-items"
        component={<MDNLink name="align-items" value="center" />}
      >
        <div />
      </Section>

      {/* ASide Editor */}
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
          <InputRange
            id="gap"
            min="0"
            max="2"
            step="0.25"
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
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
          <pre>{text}</pre>
        </EditorItem>
        <ButtonCopyClipboard text={text} />
      </Editor>
    </>
  );
};

export default FlexBoxPage;
export { flexboxSearchableTags };
