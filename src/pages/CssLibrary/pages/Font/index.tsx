import { useState } from "react";
import Section from "components/Section";
import { Container, Box, Text } from "./index.styled";
import MDNLink from "nestedComponents/MDNLink";
import {
  Editor,
  EditorItem,
  Info,
  infoTypes,
  InputField,
} from "layout/nested.pages";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import Select from "nestedComponents/Select";
import absoluteSize from "data/css/absolute-size";

import { texts } from "./data/text";
import { fontWeightOptions } from "./data/font-weight";
import { fontFamilyOptions } from "./data/font-family";

const FontPage = () => {
  const [fontSize, setFontSize] = useState<string>("medium");
  const [fontWeight, setFontWeight] = useState<string>("400");
  const [fontFamily, setFontFamily] = useState<string>("Montserrat");

  const cssString = `.container {
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  font-family: '${fontFamily}' ${
    fontFamily === "Montserrat" ? ",sans-serif" : ""
  };
}`;

  return (
    <>
      {/* Preview Window */}
      <Section border shadow title="Preview Window">
        <Container>
          <Box>
            <Text options={{ fontSize, fontWeight, fontFamily }}>
              {texts.previewWindowText}
            </Text>
          </Box>
        </Container>
      </Section>

      {/* Section: font-size */}
      <Section
        border
        shadow
        title="font-size"
        component={<MDNLink name="font-size" value={fontSize} />}
      >
        <Info type={infoTypes.info}>{texts.fontSizeLengthText}</Info>
        {(fontSize === "larger" || fontSize === "smaller") && (
          <Info type={infoTypes.info}>
            <h2>larger, smaller</h2>
            <p>{texts.fontSizeLargerSmallerText}</p>
          </Info>
        )}
      </Section>

      {/* Section: font-weight */}
      <Section
        border
        shadow
        title="font-weight"
        component={<MDNLink name="font-weight" value={fontWeight} />}
      >
        {(fontWeight === "lighter" || fontWeight === "bolder") && (
          <Info type={infoTypes.info}>
            {fontWeight === "lighter" && (
              <div>
                <h2>lighter</h2>
                {texts.fontWeightLighter}
              </div>
            )}
            {fontWeight === "bolder" && (
              <div>
                <h2>bolder</h2>
                {texts.fontWeightBolder}
              </div>
            )}
            <div>
              <br />
              <h2>Meaning of relative weights</h2>
              {texts.fontWeightRelativeWeights}
            </div>
          </Info>
        )}
        {(fontWeight === "100" || fontWeight === "200") && (
          <Info type={infoTypes.danger}>
            <h2>Accessibility concerns</h2>
            {texts.fontWeightAccessibilityConcerns}
          </Info>
        )}
      </Section>

      {/* Section: font-family */}
      <Section
        border
        shadow
        title="font-family"
        component={<MDNLink name="font-family" value={fontFamily} />}
      >
        <></>
      </Section>

      {/* Aside Editor */}
      <Editor>
        <InputField>
          <label htmlFor="fontSize">font-size</label>
          <Select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            options={absoluteSize}
            id="fontSize"
          />
        </InputField>

        <InputField>
          <label htmlFor="fontWeight">font-weight</label>
          <Select
            value={fontWeight}
            onChange={(e) => setFontWeight(e.target.value)}
            options={fontWeightOptions}
            id="fontWeight"
          />
        </InputField>

        <InputField>
          <label htmlFor="fontFamily">font-family</label>
          <Select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            options={fontFamilyOptions}
            id="fontFamily"
          />
        </InputField>

        <EditorItem>
          {fontFamily === "Montserrat" ? "@import url( [link to font] )" : ""}
          <pre>{cssString}</pre>
        </EditorItem>
        <ButtonCopyClipboard text={cssString} />
      </Editor>
    </>
  );
};

export default FontPage;
