import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import Section from "components/Section";
import Select from "componentsNested/Select";
import { sizes } from "data/css/defaultSizes";
import { numbers } from "data/css/numbers";
import { Editor, EditorItem, InputField } from "layout/nested.pages";
import { useState } from "react";
import { shadowsSearchableTags } from "./data";
import { Container, ShadowText } from "./styled";

const ShadowsPage = () => {
  const [offsetX, setOffsetX] = useState("3px");
  const [offsetY, setOffsetY] = useState("3px");
  const [blurRadius, setBlurRadius] = useState("3px");

  const cssString = `.container {
    text-shadow: ${offsetX} ${offsetY} ${blurRadius} black;
  }`;
  return (
    <>
      <Section border shadow title="Preview Window">
        <Container>
          <ShadowText offsetX={offsetX} offsetY={offsetY} blurRadius={blurRadius}>
            Text-Shadow
          </ShadowText>
        </Container>
      </Section>
      <Editor>
        <InputField>
          <label htmlFor="offsetX">offset-x</label>
          <Select
            value={offsetX}
            onChange={(e) => setOffsetX(e.target.value)}
            options={numbers}
            id="offsetX"
          />
        </InputField>

        <InputField>
          <label htmlFor="offsetY">offset-y</label>
          <Select
            value={offsetY}
            onChange={(e) => setOffsetY(e.target.value)}
            options={numbers}
            id="offsetY"
          />
        </InputField>

        <InputField>
          <label htmlFor="blurRadius">blur-radius</label>
          <Select
            value={blurRadius}
            onChange={(e) => setBlurRadius(e.target.value)}
            options={numbers}
            id="blurRadius"
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
