import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import Section from "components/Section";
import { InputRange } from "componentsNested/InputRange";
import { Editor, EditorItem, InputField } from "layout/nested.pages";
import { useState } from "react";
import { shadowsSearchableTags } from "./data";
import { Container, ShadowText } from "./styled";

const ShadowsPage = () => {
  const [offsetX, setOffsetX] = useState(3);
  const [offsetY, setOffsetY] = useState(3);
  const [blurRadius, setBlurRadius] = useState(3);

  const cssString = `.container {
    text-shadow: ${offsetX} ${offsetY} ${blurRadius} black;
  }`;
  return (
    <>
      <Section border shadow title="Preview Window">
        <Container>
          <ShadowText
            offsetX={offsetX}
            offsetY={offsetY}
            blurRadius={blurRadius}
          >
            Text-Shadow
          </ShadowText>
        </Container>
      </Section>
      <Editor>
        <InputField>
          <label htmlFor="offsetX">offsetX</label>
          <InputRange
            id="offsetX"
            min="-5"
            max="5"
            step="1"
            value={offsetX}
            onChange={(e) => setOffsetX(Number(e.target.value))}
          />
        </InputField>

        <InputField>
          <label htmlFor="offsetY">offset-y</label>
          <InputRange
            id="offsetY"
            min="-5"
            max="5"
            step="1"
            value={offsetY}
            onChange={(e) => setOffsetY(Number(e.target.value))}
          />
        </InputField>

        <InputField>
          <label htmlFor="blurRadius">blur-radius</label>
          <InputRange
            id="blurRadius"
            min="0"
            max="10"
            step="1"
            value={blurRadius}
            onChange={(e) => setBlurRadius(Number(e.target.value))}
          />
        </InputField>

        <EditorItem>
          <pre>{cssString}</pre>
        </EditorItem>
        <ButtonCopyClipboard text={cssString} />
      </Editor>
    </>
  );
};

export default ShadowsPage;
export { shadowsSearchableTags };
