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

const fontWeightOptions = [
  "100",
  "200",
  "300",
  "normal",
  "500",
  "600",
  "bold",
  "800",
  "900",
  "lighter",
  "bolder",
];

const FontPage = () => {
  const [fontSize, setFontSize] = useState<string>("1rem");
  const [fontWeight, setFontWeight] = useState<string>("normal");
  const cssString = `.container {
  font-size: ${fontSize};
}`;

  return (
    <>
      <Section border shadow title="Preview Window">
        <Container>
          <Box>
            <Text options={{ fontSize, fontWeight }}>
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
        <div />
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
          <input
            type="text"
            id="fontSize"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
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

        <EditorItem>
          <pre>{cssString}</pre>
        </EditorItem>
        <ButtonCopyClipboard text={cssString} />
      </Editor>
    </>
  );
};

export default FontPage;
