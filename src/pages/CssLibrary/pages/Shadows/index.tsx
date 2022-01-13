import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import Section from "components/Section";
import { InputRange } from "componentsNested/InputRange";
import {
  Editor,
  EditorItem,
  EditorItemDivider,
  Info,
  infoTypes,
  InputField,
} from "layout/nested.pages";
import { useState } from "react";
import { shadowsSearchableTags } from "./data";
import { Container, ShadowText, ShadowBox, ShadowImage } from "./styled";

const ShadowsPage = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(5);
  const [blurRadius, setBlurRadius] = useState(15);
  const [spreadRadius, setSpreadRadius] = useState(0);

  const cssString = `.text {
  text-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px black;
}`;

  const cssString2 = `.container {
  box-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px black;
}`;

  const cssString3 = `.image {
  filter: drop-shadow(${offsetX}px ${offsetY}px ${blurRadius}px black);
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
        <Container>
          <ShadowBox
            offsetX={offsetX}
            offsetY={offsetY}
            blurRadius={blurRadius}
            spreadRadius={spreadRadius}
          ></ShadowBox>
        </Container>
        <Container>
          <ShadowImage
            offsetX={offsetX}
            offsetY={offsetY}
            blurRadius={blurRadius}
          >
            <img
              src="/Playground/logo192.png"
              alt="React Logo 192*192px with filter drop shadow"
            />
          </ShadowImage>
        </Container>
      </Section>
      <Editor>
        <InputField>
          <label htmlFor="offsetX">offsetX</label>
          <InputRange
            id="offsetX"
            min="-10"
            max="10"
            step="1"
            value={offsetX}
            onChange={(e) => setOffsetX(Number(e.target.value))}
          />
        </InputField>

        <InputField>
          <label htmlFor="offsetY">offset-y</label>
          <InputRange
            id="offsetY"
            min="-10"
            max="10"
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
            max="30"
            step="1"
            value={blurRadius}
            onChange={(e) => setBlurRadius(Number(e.target.value))}
          />
        </InputField>

        <InputField>
          <label htmlFor="spreadRadius">spread-radius</label>
          <InputRange
            id="spreadRadius"
            min="0"
            max="30"
            step="1"
            value={spreadRadius}
            onChange={(e) => setSpreadRadius(Number(e.target.value))}
          />
        </InputField>
        <Info type={infoTypes.info}>
          <p style={{ color: "black" }}>
            spread-radius only works on box-shadow.
          </p>
        </Info>
        <EditorItemDivider />
        <EditorItem>
          <pre>{cssString}</pre>
        </EditorItem>
        <ButtonCopyClipboard text={cssString} />
        <EditorItemDivider />
        <EditorItem>
          <pre>{cssString2}</pre>
        </EditorItem>
        <ButtonCopyClipboard text={cssString2} />
        <EditorItemDivider />
        <EditorItem>
          <pre>{cssString3}</pre>
        </EditorItem>
        <ButtonCopyClipboard text={cssString3} />
      </Editor>
    </>
  );
};

export default ShadowsPage;
export { shadowsSearchableTags };
