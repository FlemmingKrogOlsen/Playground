import { ProgressIndicatorCard } from "../../../../components";
import styled, { css } from "styled-components";
import { useState } from "react";

const colors = {
  cardTextColor: "#123456",
  cardBackground: "#ffffff",
  barBackground: "#dedede",
  barColor: "#123456",
  barTextColor: "#123456",
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const commonInputCss = css`
  width: 25px;
  height: 25px;
  background: #123456;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 50%;
`;

const Editor = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid gray;
  text-align: center;
  color: white;
  background: ${(props) => props.theme.main};
  border-radius: 22px;

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 25px;
    background: white;
    outline: none;
    border-radius: 12.5px;

    &::-webkit-slider-thumb {
      appearance: none;
      ${commonInputCss};
    }

    &::-moz-range-thumb {
      ${commonInputCss};
    }
  }
`;

const ColorPicker = styled.input.attrs({
  type: "color",
})`
  width: 50px;
  height: 50px;
  border: none;
`;

const CodeBlock = styled.div`
  margin-top: 20px;
  background: white;
  color: black;
  padding: 10px;
  border-radius: 7px;
  text-align: left;
`;

const Reset = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  color: red;
  font-size: 30px;
  line-height: 30px;
  background: transparent;
  border: 4px solid white;
`;

const ProgressIndicatorCardPage = () => {
  const [rangeval, setRangeval] = useState<string>("50");
  const [color, setColor] = useState(colors);

  return (
    <>
      <Container>
        <ProgressIndicatorCard value={parseInt(rangeval)} colors={color}>
          Progress title
        </ProgressIndicatorCard>
      </Container>
      <br />
      <br />
      <Editor>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeval}
          onChange={(event) => setRangeval(event.target.value)}
        />
        <h4>
          The range value is {rangeval} <small>%</small>
        </h4>

        <Container>
          <ColorPicker
            title="Card Background Color"
            value={color.cardBackground}
            onChange={(e) =>
              setColor({ ...color, cardBackground: e.target.value })
            }
          />
          <ColorPicker
            title="Card Text Color"
            value={color.cardTextColor}
            onChange={(e) =>
              setColor({ ...color, cardTextColor: e.target.value })
            }
          />
          <ColorPicker
            title="Progress Background Color"
            value={color.barBackground}
            onChange={(e) =>
              setColor({ ...color, barBackground: e.target.value })
            }
          />
          <ColorPicker
            title="Progress Text Color"
            value={color.barTextColor}
            onChange={(e) =>
              setColor({ ...color, barTextColor: e.target.value })
            }
          />
          <ColorPicker
            title="Progress Indicator Color"
            value={color.barColor}
            onChange={(e) => setColor({ ...color, barColor: e.target.value })}
          />
          <Reset onClick={() => setColor(colors)}>✖</Reset>
        </Container>
        <CodeBlock>
          <code>
            &#60;<b>ProgressIndicatorCard</b>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;value=&#123;{rangeval}&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;colors=&#123;
            <pre style={{ marginLeft: "40px" }}>
              {JSON.stringify(color, null, 4)}
            </pre>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;&#62; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Progress Title
            <br />
            &#60;/<b>ProgressIndicatorCard</b>&#62;
            <br />
          </code>
        </CodeBlock>
      </Editor>
    </>
  );
};

export default ProgressIndicatorCardPage;
