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
  Url,
} from "layout/nested.pages";
import Select from "nestedComponents/Select";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";

const options: string[] = [
  "start",
  "center",
  "end",
  "justify",
  "match-parent",
  "left",
  "right",
  "inherit",
];

const TextAlignPage = () => {
  const [align, setAlign] = useState<string>("start");
  const cssString = `.container {
  text-align: ${align};
}`;

  return (
    <>
      <Section border shadow title="Preview Window">
        <Container>
          <Box>
            <Text align={align}>
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
        title="text-align"
        component={<MDNLink title="text-align" />}
      >
        {(align === "left" || align === "right") && (
          <Info type={infoTypes.warning}>
            You should use <b>start</b> and <b>end</b> instead of <b>left</b>{" "}
            and <b>right</b>.
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>start</b>
                  </td>
                  <td width="5%"></td>
                  <td>
                    The same as left if direction is left-to-right and right if
                    direction is right-to-left.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>end</b>
                  </td>
                  <td width="5%"></td>
                  <td>
                    The same as right if direction is left-to-right and left if
                    direction is right-to-left.
                  </td>
                </tr>
              </tbody>
            </table>
          </Info>
        )}

        {(align === "match-parent" || align === "inherit") && (
          <Info type={infoTypes.info}>
            text-align on parent element is set to center.
          </Info>
        )}

        {align === "match-parent" && (
          <Info type={infoTypes.danger}>
            <b>match-parent</b> is not supported by all browsers.
            <br />
            <br />
            <Url href="https://caniuse.com/mdn-css_properties_text-align_match-parent">
              Can I Use
            </Url>
            <br />
            <br />
            Similar to <b>inherit</b>, but the values start and end are
            calculated according to the parent's direction and are replaced by
            the appropriate left or right value.
            <br />
            <br />
            <b>Fallback:</b>
            <br />
            &#64;supports not ( text-align: match-parent ) &#123; text-align:
            inherit &#125;
            <br />
            <br />
            Chrome fails this test, but it's supported by the browser.
          </Info>
        )}
        {align === "justify" && (
          <Info type={infoTypes.danger}>
            <h3>Accessibility concerns</h3>
            The inconsistent spacing between words created by justified text can
            be problematic for people with cognitive concerns such as Dyslexia.
          </Info>
        )}
      </Section>

      <Editor>
        <InputField>
          <label htmlFor="align">text-align</label>
          <Select
            value={align}
            onChange={(e) => setAlign(e.target.value)}
            options={options}
            id="align"
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

export default TextAlignPage;
