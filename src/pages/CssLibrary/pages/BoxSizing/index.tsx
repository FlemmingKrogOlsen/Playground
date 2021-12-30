import { useEffect, useRef, useState } from "react";
import Section from "components/Section";
import { Container, Box } from "./styled";
import MDNLink from "componentsNested/MDNLink";
import {
  Editor,
  EditorItem,
  Info,
  infoTypes,
  InputField,
} from "layout/nested.pages";
import Select from "componentsNested/Select";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import { boxSizingOptions, boxSizingSearchableTags } from "./data";

const BoxSizingPage = () => {
  const [boxSizing, setBoxSizing] = useState<string>("border-box");

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement);

  const text = `.container {
    width: 400px;
    box-sizing: ${boxSizing};
    padding: 20px;
}`;

  const recommendText = `
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }`;

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    setWidth(ref.current.clientWidth);
  }, [boxSizing]);

  return (
    <>
      <Section border shadow title="Preview Window">
        <Container>
          <Box
            ref={ref}
            options={{
              boxSizing,
            }}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique quaerat illum delectus officia, culpa pariatur cumque
              saepe velit architecto nesciunt repudiandae dolor incidunt ex
              asperiores, quibusdam a quisquam non veritatis qui! Quidem odit
              officia aspernatur laudantium, autem illum iure dolorem?
            </p>
          </Box>
        </Container>
      </Section>

      <Section
        border
        shadow
        title="box-sizing"
        component={<MDNLink name="box-sizing" value={boxSizing} />}
      >
        <Info type={infoTypes.info}>
          I recommend this in index.css :<pre>{recommendText}</pre>
          <div style={{position:"absolute",bottom:0,right:-25, transform: "scale(0.65)"}}>
          <ButtonCopyClipboard text={recommendText} />
          </div>
        </Info>
      </Section>

      <Editor>
        <InputField>
          <label htmlFor="boxSizing">box-sizing</label>
          <Select
            value={boxSizing}
            onChange={(e) => {
              setBoxSizing(e.target.value);
            }}
            options={boxSizingOptions}
            id="boxSizing"
          />
        </InputField>

        <EditorItem>
          <pre>{text}</pre>
        </EditorItem>
        <EditorItem>
          <pre>
            Box current visual size :{" "}
            <span style={width === 400 ? {} : { color: "red" }}>{width}px</span>{" "}
            X {height}px
          </pre>
        </EditorItem>
        <ButtonCopyClipboard text={text} />
      </Editor>
    </>
  );
};

export default BoxSizingPage;
export { boxSizingSearchableTags };
