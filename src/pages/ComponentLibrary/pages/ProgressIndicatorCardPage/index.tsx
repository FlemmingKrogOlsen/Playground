import ProgressPieCard, {
  defaultColors,
} from "../../../../components/ProgressPieCard";
import { useState } from "react";
import { Container, Editor, CodeBlock } from "./styles";

const ProgressIndicatorCardPage = () => {
  const [rangeval, setRangeval] = useState<string>("50");

  return (
    <>
      <Container>
        <ProgressPieCard value={parseInt(rangeval, 10)} colors={defaultColors}>
          Progress title
        </ProgressPieCard>
      </Container>

      <Editor>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={rangeval}
          onChange={(event) => setRangeval(event.target.value)}
        />

        <CodeBlock>
          <code>
            <pre>const colors = {JSON.stringify(defaultColors, null, 2)}</pre>
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
