import ProgressPieCard, {
  defaultColors,
} from "../../../../components/ProgressPieCard";
import { useState } from "react";
import { CodeBlock, Editor, SpaceEvenly } from "../styled";
import { ProcentageRange } from "../formElements_styled";

const ProgressIndicatorCardPage = () => {
  const [rangeval, setRangeval] = useState<string>("50");

  return (
    <>
      <SpaceEvenly>
        <ProgressPieCard value={parseInt(rangeval, 10)} colors={defaultColors}>
          Progress title
        </ProgressPieCard>
      </SpaceEvenly>

      <Editor>
        <ProcentageRange
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
