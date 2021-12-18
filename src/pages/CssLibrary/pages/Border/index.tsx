import { useState } from "react";

import Section from "components/Section";
import { Container, BoxBorder } from "./index.styled";
import {
  Editor,
  EditorItem,
  Info,
  infoTypes,
  InputField,
} from "layout/nested.pages";
import MDNLink from "nestedComponents/MDNLink";
import Select from "nestedComponents/Select";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";

const options: string[] = [
  "dotted",
  "dashed",
  "solid",
  "double",
  "groove",
  "ridge",
  "inset",
  "outset",
];

const BorderPage = () => {
  const [borderWidth, setBorderWidth] = useState<string>("5px");
  const [borderColor, setBorderColor] = useState<string>("steelblue");
  const [borderStyle, setBorderStyle] = useState<string>("solid");
  const [borderRadius, setBorderRadius] = useState<string>("16px");

  const cssString = `.container {
  border: ${borderStyle} ${borderWidth} ${borderColor};
  border-radius: ${borderRadius};
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
            Text goes here.....
          </BoxBorder>
        </Container>
      </Section>
      <Editor>
        <InputField>
          <label htmlFor="borderStyle">border-style</label>
          <Select
            value={borderStyle}
            onChange={(e) => setBorderStyle(e.target.value)}
            options={options}
            id="borderStyle"
          />
        </InputField>

        <InputField>
          <label htmlFor="borderWidth">border-width</label>
          <input
            type="text"
            id="borderWidth"
            value={borderWidth}
            onChange={(e) => setBorderWidth(e.target.value)}
          />
        </InputField>

        <InputField>
          <label htmlFor="borderColor">border-color</label>
          <input
            type="text"
            id="borderColor"
            value={borderColor}
            onChange={(e) => setBorderColor(e.target.value)}
          />
        </InputField>

        <InputField>
          <label htmlFor="borderRadius">border-radius</label>
          <input
            type="text"
            id="borderRadius"
            value={borderRadius}
            onChange={(e) => setBorderRadius(e.target.value)}
          />
        </InputField>
        <EditorItem>
          <pre>{cssString}</pre>
        </EditorItem>
        <ButtonCopyClipboard text={cssString} />
      </Editor>
      <Section
        border
        shadow
        title="Border"
        component={<MDNLink title="border" />}
      >
        <Info type={infoTypes.info}>
          <h3>top right bottom left</h3>
          Can be styled induvidually with the following properties: <br />
          <i>
            border-top-width, border-right-width, border-bottom-width,
            border-left-width.
            <br />
            border-top-style, border-right-style, border-bottom-style,
            border-left-style.
            <br />
            border-top-color, border-right-color, border-bottom-color,
            border-left-color.
          </i>
          <br />
        </Info>
      </Section>
      <Section
        border
        shadow
        title="Border-Radius"
        component={<MDNLink title="border-radius" />}
      >
        <Info type={infoTypes.info}>
          <h3>Corners</h3>
          Can be styled induvidually with the following properties: <br />
          <i>
            border-top-right-radius
            <br /> border-top-left-radius
            <br /> border-bottom-right-radius
            <br /> border-bottom-left-radius
          </i>
        </Info>

        {borderRadius && (
          <Info type={infoTypes.warning}>
            <h3>Radius vs Style</h3>
            IMHO Some styles dont work to good with border-radius.
            <br />
            these styles work IMO : <b>Solid</b>, <b>Double</b>, <b>Inset</b> &{" "}
            <b>Outset</b>.
          </Info>
        )}
      </Section>
    </>
  );
};

export default BorderPage;
