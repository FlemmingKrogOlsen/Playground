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
import { borderStyleOptions, sizes, text } from "./data";

const BorderPage = () => {
  const [borderWidth, setBorderWidth] = useState<string>("0.5rem");
  const borderColor = "steelblue";
  const [borderStyle, setBorderStyle] = useState<string>("solid");
  const [borderRadius, setBorderRadius] = useState<string>("1rem");

  const cssString = `.container {
  border: ${borderStyle} ${borderWidth} ${borderColor};
  border-radius: ${borderRadius} ${borderRadius} ${borderRadius} ${borderRadius};
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
            border-top: {borderStyle} {borderWidth} {borderColor};<br />
            border-right: {borderStyle} {borderWidth} {borderColor};<br />
            border-bottom: {borderStyle} {borderWidth} {borderColor};<br />
            border-left: {borderStyle} {borderWidth} {borderColor};<br />
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
          <br/>
          <h4>{text.borderRadiusSub1}</h4>
          <pre>
            border-top-left-radius: {borderRadius};<br />
            border-top-right-radius: {borderRadius};<br />
            border-bottom-left-radius: {borderRadius};<br />
            border-bottom-right-radius: {borderRadius};<br />
          </pre>
          <br />
          <h4>{text.borderRadiusSub1}</h4>
          <i>start-start = top-left, end-end = bottom-right</i>
          <pre>
            border-start-start-radius: {borderRadius};
            <br />
            border-start-end-radius: {borderRadius};
            <br />
            border-end-start-radius: {borderRadius};
            <br />
            border-end-end-radius: {borderRadius};
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
          <Select
            value={borderWidth}
            onChange={(e) => setBorderWidth(e.target.value)}
            options={sizes}
            id="borderWidth"
          />
        </InputField>

        <InputField>
          <label htmlFor="borderColor">color</label>
          <input type="text" id="borderColor" value={borderColor} disabled />
        </InputField>

        <InputField>
          <label htmlFor="borderRadius">radius</label>
          <Select
            value={borderRadius}
            onChange={(e) => {
              setBorderRadius(e.target.value);
            }}
            options={sizes}
            id="borderRadius"
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
