import ProgressPieCard, { defaultColors } from "components/ProgressPieCard";
import { useState } from "react";
import { Editor, SpaceEvenly } from "../pages.styled";
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
      </Editor>
    </>
  );
};

export default ProgressIndicatorCardPage;
