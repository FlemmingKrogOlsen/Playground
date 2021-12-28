import styled from "styled-components";

const colors = {
  primary: "#123456",
  primaryRGB: "18, 52, 86",
  secondary: "white",
  disabled: "#bcc2bf",
  checkedBorder: "#123456",
  hover: "#e6e6e6",
};

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  > div {
    flex: 1;
  }
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  height: 100%;
  display: block;
  background: ${colors.secondary};
  border: 2px solid ${colors.primary};
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  box-shadow: 0px 3px 10px -2px rgba(${colors.primaryRGB}, 0.5);
  position: relative;
  h2 {
    margin-bottom: 0.5rem;
  }
`;

export const Input = styled.input<{ icon: string }>`
  display: none;

  &:hover:not(:disabled):not(:checked) ~ ${Label} {
    background: ${colors.hover};
  }

  &:not(:disabled) ~ ${Label} {
    cursor: pointer;
  }

  &:disabled ~ ${Label} {
    color: ${colors.disabled};
    border-color: ${colors.disabled};
    box-shadow: none;
    cursor: not-allowed;
  }

  &:checked + ${Label} {
    background: ${colors.primary};
    color: ${colors.secondary};
    box-shadow: 0px 0px 20px rgba(${colors.primaryRGB}, 0.75);
  }

  &:checked + ${Label}::after {
    color: ${colors.primary};
    border: 2px solid ${colors.checkedBorder};
    content: "${(props) => props.icon}";
    font-size: 24px;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    background: ${colors.secondary};
    box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.25);
  }
`;
