import { useState } from "react";
import Section from "components/Section";

// import CheckCSSSupport from "components/CheckCSSSupport";
import { Container } from "./index.styled";
import {
  Box,
  Url,
  Info,
  infoTypes,
  Editor,
  EditorItem,
} from "layout/nested.pages";

const options: string[] = ["row", "row-reverse", "column", "column-reverse"];

const FlexBoxPage = () => {
  const [direction, setDirection] = useState<string>("row");

  const testThis = `flex-direction: ${direction}`;

  const Select = () => (
    <select value={direction} onChange={(e) => setDirection(e.target.value)}>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );

  return (
    <>
      <Section border shadow title={testThis} component={<Select />}>
        <Container direction={direction}>
          <Box>Item # 1</Box>
          <Box>Item # 2</Box>
          <Box>Item # 3</Box>
        </Container>
      </Section>

      <Section
        border
        shadow
        title="did you know..."
        component={
          <Url href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction">
            MDN Web
          </Url>
        }
      >
        {/* <Text>
          <b>column-reverse</b> and <b>row-reverse</b> was bad for accessibility
        </Text> */}
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

      <Editor>
        <EditorItem>
          display: flex;
          <br />
          flex-direction: <b>{direction}</b>;<br />
          {/* <CheckCSSSupport test={testThis} /> */}
        </EditorItem>
      </Editor>
    </>
  );
};

export default FlexBoxPage;
