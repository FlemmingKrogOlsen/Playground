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
import { fontWeightOptions } from "data/css/options/font-weight";
import cssLengths from "data/css/length";
import CheckCSSSupport from "nestedComponents/CheckCssSupport";
import BrowserDetect from "helpers/getBrowserName";
import { fontFamilyOptions } from "data/css/options/font-family";

const FontPage = () => {
  const [fontSize, setFontSize] = useState<string>("medium");
  const [fontWeight, setFontWeight] = useState<string>("400");
  const [fontFamily, setFontFamily] = useState<string>("Montserrat");
  const cssString = `.container {
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  font-family: ${fontFamily} ${
    fontFamily === "Montserrat" ? ",sans-serif" : ""
  };
}`;

  return (
    <>
      <Section border shadow title="Preview Window">
        <Container>
          <Box>
            <Text options={{ fontSize, fontWeight, fontFamily }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique quaerat illum delectus officia, culpa pariatur cumque
              saepe velit architecto nesciunt repudiandae dolor incidunt ex
              asperiores, quibusdam a quisquam non veritatis qui! Quidem odit
              officia aspernatur laudantium, autem illum iure dolorem?
            </Text>
          </Box>
        </Container>
      </Section>

      <Section
        border
        shadow
        title="font-size"
        component={<MDNLink title="font-size" />}
      >
        <Info type={infoTypes.info}>
          <p>
            The <code>font-size</code> also accepts:{" "}
            <b>
              {cssLengths.join(", ")}, <small>%</small>.
            </b>
          </p>
        </Info>
        {(fontSize === "larger" || fontSize === "smaller") && (
          <Info type={infoTypes.info}>
            <h2>larger, smaller</h2>
            <p>
              Relative-size keywords. The font will be larger or smaller
              relative to the parent element's font size, roughly by the ratio
              used to separate the absolute-size keywords in
              'font-size'-dropdown.
            </p>
          </Info>
        )}
      </Section>

      <Section
        border
        shadow
        title="font-weight"
        component={<MDNLink title="font-weight" />}
      >
        {(fontWeight === "lighter" || fontWeight === "bolder") && (
          <Info type={infoTypes.info}>
            {fontWeight === "lighter" && (
              <div>
                <h2>lighter</h2> One relative font weight lighter than the
                parent element. Note that only four font weights are considered
                for relative weight calculation; see the Meaning of relative
                weights section below.
              </div>
            )}
            {fontWeight === "bolder" && (
              <div>
                <h2>bolder</h2>
                One relative font weight heavier than the parent element. Note
                that only four font weights are considered for relative weight
                calculation; see the Meaning of relative weights section below.
              </div>
            )}
            <h2>Meaning of relative weights</h2>
            Note that when using relative weights, only four font weights are
            considered — thin (100), normal (400), bold (700), and heavy (900).
            If a font-family has more weights available, they are ignored for
            the purposes of relative weight calculation.
          </Info>
        )}
        {(fontWeight === "100" || fontWeight === "200") && (
          <Info type={infoTypes.danger}>
            <h2>Accessibility concerns</h2>
            People experiencing low vision conditions may have difficulty
            reading text set with a font-weight value of 100 (Thin/Hairline) or
            200 (Extra Light), especially if the font has a low contrast color
            ratio.
          </Info>
        )}
      </Section>

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
        <EditorItem>
          <h3 style={{ textAlign: "center" }}>{BrowserDetect()} @supports</h3>
          <CheckCSSSupport testValue="url()" name="@import" />
          <CheckCSSSupport testValue="medium" name="font-size" />
          <CheckCSSSupport testValue="normal" name="font-weight" />
          <CheckCSSSupport testValue="serif" name="font-family" />
        </EditorItem>
      </Editor>
    </>
  );
};

export default FontPage;
