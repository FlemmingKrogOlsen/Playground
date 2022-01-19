import GaugeMeter from "components/GaugeMeter";
import { Editor, EditorItem } from "layout/nested.pages";
import { useState } from "react";


const ProgressMeterPage = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [low, setLow] = useState(33);
  const [high, setHigh] = useState(66);
  const [optimum, setOptimum] = useState(80);
  const [hack, setHack] = useState(true);

  const config = {
    min,
    max,
    low,
    high: hack ? high : high + 0.00000001,
    optimum,
  };

  return (
    <>
      <h3>min -{">"} low</h3>
      <GaugeMeter {...config} id="meter" title="Fuel Level" value={0} />
      <GaugeMeter {...config} id="meter" title="Fuel Level" value={16} />
      <GaugeMeter {...config} id="meter" title="Fuel Level" value={32} />

      <h3>low -{">"} high</h3>
      <GaugeMeter {...config} id="meter" title="Fuel Level" value={33} />
      <GaugeMeter {...config} id="meter" title="Fuel Level" value={65} />
      <h3>high -{">"} max</h3>
      <GaugeMeter {...config} id="meter" title="Fuel Level" value={66} />
      <GaugeMeter {...config} id="meter" title="Fuel Level" value={100} />
      <h3>Optimum</h3>
      <GaugeMeter {...config} id="meter" title="Fuel Level" value={79} />
      <GaugeMeter {...config} id="meter" title="Fuel Level" value={80} />
      <GaugeMeter {...config} id="meter" title="Fuel Level" value={81} />
      <br />
      <br />

      <Editor>
        <EditorItem>
          <p>
            default values:
            <br />
            Min :{" "}
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
            />
            <br />
            Low :{" "}
            <input
              type="number"
              value={low}
              onChange={(e) => setLow(Number(e.target.value))}
            />
            <br />
            High :{" "}
            <input
              type="number"
              value={high}
              onChange={(e) => setHigh(Number(e.target.value))}
            />
            <br />
            Max :{" "}
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
            />
            <br />
            Optimum :
            <input
              type="number"
              value={optimum}
              onChange={(e) => setOptimum(Number(e.target.value))}
            />
            <br />
            Hack:{" "}
            <input
              type="checkbox"
              checked={hack}
              onChange={(e) => setHack(e.target.checked)}
            />{" "}
            (only visible in firefox)
            <br />
          </p>
        </EditorItem>
      </Editor>
    </>
  );
};

export default ProgressMeterPage;
