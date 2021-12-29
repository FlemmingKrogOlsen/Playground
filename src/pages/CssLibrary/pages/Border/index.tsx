import { useState } from "react";

import Section from "components/Section";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import { Editor, EditorItem, InputField } from "layout/nested.pages";
import MDNLink from "componentsNested/MDNLink";
import Select from "componentsNested/Select";
import { Container, BoxBorder } from "./styled";
import { borderRadiusTopLeft, borderStyleOptions, sizes } from "./data";

const BorderPage = () => {
  const [borderWidth, setBorderWidth] = useState<string>("0.5rem");
  const borderColor = "steelblue";
  const [borderStyle, setBorderStyle] = useState<string>("solid");
  const [borderRadius, setBorderRadius] = useState<string>("1rem");

  const [borderRadiusSingle, setBorderRadiusSingle] =
    useState<string>("1rem 1rem");

  const cssString = `.container {
  border: ${borderStyle} ${borderWidth} ${borderColor};
  border-radius: ${borderRadius} ${borderRadius} ${borderRadius} ${borderRadius};

/*
  border-top: ${borderStyle} ${borderWidth} ${borderColor};
  border-right: ${borderStyle} ${borderWidth} ${borderColor};
  border-bottom: ${borderStyle} ${borderWidth} ${borderColor};
  border-left: ${borderStyle} ${borderWidth} ${borderColor};

  border-top-left-radius: ${borderRadiusSingle};
  border-top-right-radius: ${borderRadius} ${borderRadius};
  border-bottom-left-radius: ${borderRadius} ${borderRadius};
  border-bottom-right-radius: ${borderRadius} ${borderRadius};
*/

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
              borderRadiusSingle,
            }}
          >
            <div style={{ textAlign: "center" }}>
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
              setBorderRadiusSingle(`${e.target.value} ${e.target.value}`);
            }}
            options={sizes}
            id="borderRadius"
          />
        </InputField>

        <InputField>
          <label htmlFor="borderTopLeftRadius">top-left-radius</label>
          <Select
            value={borderRadiusSingle}
            onChange={(e) => setBorderRadiusSingle(e.target.value)}
            options={borderRadiusTopLeft}
            id="borderTopLeftRadius"
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
        component={<MDNLink name="border" value="1px solid black" />}
      />

      <Section
        border
        shadow
        title="Border-Radius"
        component={<MDNLink name="border-radius" value="1rem" />}
      />
    </>
  );
};

export default BorderPage;
