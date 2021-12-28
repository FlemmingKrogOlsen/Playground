import RadioCards from "components/RadioCards";
import { data } from "./data";
import { useState } from "react";
import styled from "styled-components";
import { Editor, EditorItem } from "layout/nested.pages";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import { Container } from "layout/nested.styled";

const Text = styled.p`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  text-transform: capitalize;
`;

const text = `const data = ${JSON.stringify(data, null, 2)};

const [value, setValue] = useState("");

<RadioCards 
  data={data} 
  value={value} 
  setValue={setValue}
/>
`;

const RadioCardsPage = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <RadioCards data={data} value={value} setValue={setValue} />
      {value ? (
        <Text>You Selected : {value.replace("-", " #")}</Text>
      ) : (
        <Text>Select an Options</Text>
      )}
      <Editor>
        <EditorItem>
          <Container>
            <pre>{text}</pre>
          </Container>
        </EditorItem>
        <ButtonCopyClipboard text={text} />
      </Editor>
    </>
  );
};

export default RadioCardsPage;
