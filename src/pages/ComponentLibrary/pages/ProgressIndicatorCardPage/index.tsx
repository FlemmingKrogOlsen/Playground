import ProgressPieCard, {
  defaultColors,
} from "../../../../components/ProgressPieCard";
import { useState } from "react";
import { Container, Editor, ColorPicker, CodeBlock, Reset,ColorContainer } from "./styles";

const ProgressIndicatorCardPage = () => {
  const [rangeval, setRangeval] = useState<string>("50");
  const [color, setColor] = useState(defaultColors);
  return (
    <>
      <Container>
        <ProgressPieCard value={parseInt(rangeval)} colors={color}>
          Progress title
        </ProgressPieCard>
      </Container>
      <br />
      <br />
      <Editor>
        
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={rangeval}
          onChange={(event) => setRangeval(event.target.value)}
        />

        <ColorContainer>
          {Object.entries(color).map(([key, value]) => (
            <ColorPicker
              key={key}
              title={key}
              value={value}
              onChange={(e) =>
                setColor({ ...color, [key]: e.target.value.toString() })
              }
            />
          ))}
          <Reset title="Reset to default" onClick={() => setColor(defaultColors)}>&#x1f5d1;</Reset>
        </ColorContainer>

        <CodeBlock>
          <code>
            <pre>const colors = {JSON.stringify(color, null, 2)}</pre>
            <br />
            &#60;<b>ProgressPieCard</b>
            <br />
            &nbsp;&nbsp;value=&#123;{rangeval}&#125; <br />
            &nbsp;&nbsp;colors=&#123;colors&#125;<b>&#62;</b>
            <br />
            &nbsp;&nbsp;Progress Title
            <br />
            &#60;/<b>ProgressPieCard</b>&#62;
            <br />
          </code>
        </CodeBlock>

      </Editor>
    </>
  );
};

export default ProgressIndicatorCardPage;
