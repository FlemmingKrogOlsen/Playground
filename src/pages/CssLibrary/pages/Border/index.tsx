import { useState } from "react";

import Section from "components/Section";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import {
  Editor,
  EditorItem,
  Info,
  infoTypes,
  InputField,
} from "layout/nested.pages";
import MDNLink from "componentsNested/MDNLink";
import Select from "componentsNested/Select";
import { Container, BoxBorder } from "./styled";
import { borderStyleOptions, text, borderSearchableTags } from "./data";
import { InputRange } from "componentsNested/InputRange";

const BorderPage = () => {
  const [borderWidth, setBorderWidth] = useState<string>("8");
  const borderColor = "steelblue";
  const [borderStyle, setBorderStyle] = useState<string>("solid");
  const [borderRadius, setBorderRadius] = useState<string>("8");

  const cssString = `.container {
  border: ${borderStyle} ${borderWidth}px ${borderColor};
  border-radius: ${borderRadius}px ${borderRadius}px ${borderRadius}px ${borderRadius}px;
}`;

  return (
    <>
      <Section border shadow title="Preview Window">
        <Container>
          <BoxBorder
            options={{
              borderWidth,
              borderColor,
              borderStyle,
              borderRadius,
            }}
          >
            <div>
              <h2>border</h2>
              <p>
                <small>
                  <b>TR</b>ou<b>BL</b>e - <b>T</b>op-<b>R</b>ight-<b>B</b>ottom-
                  <b>L</b>eft
                </small>
              </p>
            </div>
          </BoxBorder>
        </Container>
      </Section>

      <Section
        border
        shadow
        title="Border"
        component={<MDNLink name="border" value="1px solid black" />}
      >
        <Info type={infoTypes.info}>
          <h3>{text.borderHeader}</h3>
          <p>
            border-top: {borderStyle} {borderWidth}px {borderColor};<br />
            border-right: {borderStyle} {borderWidth}px {borderColor};<br />
            border-bottom: {borderStyle} {borderWidth}px {borderColor};<br />
            border-left: {borderStyle} {borderWidth}px {borderColor};<br />
          </p>
        </Info>
      </Section>

      <Section
        border
        shadow
        title="Border-Radius"
        component={<MDNLink name="border-radius" value="1rem" />}
      >
        <Info type={infoTypes.info}>
          <h3>{text.borderRadiusHeader}</h3>
          <h4>{text.borderRadiusHeaderSub}</h4>
          <br />
          <h4>{text.borderRadiusSub1}</h4>
          <pre>
            border-top-left-radius: {borderRadius}px;<br />
            border-top-right-radius: {borderRadius}px;<br />
            border-bottom-left-radius: {borderRadius}px;<br />
            border-bottom-right-radius: {borderRadius}px;<br />
          </pre>
          <br />
          <h4>{text.borderRadiusSub1}</h4>
          <i>start-start = top-left, end-end = bottom-right</i>
          <pre>
            border-start-start-radius: {borderRadius}px;
            <br />
            border-start-end-radius: {borderRadius}px;
            <br />
            border-end-start-radius: {borderRadius}px;
            <br />
            border-end-end-radius: {borderRadius}px;
            <br />
          </pre>
        </Info>
      </Section>

      {/* ASide Editor */}
      <Editor>
        <InputField>
          <label htmlFor="borderStyle">style</label>
          <Select
            value={borderStyle}
            onChange={(e) => setBorderStyle(e.target.value)}
            options={borderStyleOptions}
            id="borderStyle"
          />
        </InputField>

        <InputField>
          <label htmlFor="borderWidth">width</label>
          <InputRange
            id="borderWidth"
            min="0"
            max="16"
            step="4"
            value={borderWidth}
            onChange={(e) => setBorderWidth(e.target.value)}
          />
        </InputField>

        <InputField>
          <label htmlFor="borderColor">color</label>
          <input type="text" id="borderColor" value={borderColor} disabled />
        </InputField>

        <InputField>
          <label htmlFor="borderRadius">radius</label>
          <InputRange
            id="borderRadius"
            min="0"
            max="64"
            step="8"
            value={borderRadius}
            onChange={(e) => setBorderRadius(e.target.value)}
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

export default BorderPage;
export { borderSearchableTags };
