import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 200px;
  padding: 10px;
  gap: 5px;
`;

interface BoxBorderProps {
  options: {
    borderWidth: string;
    borderColor: string;
    borderStyle: string;
    borderRadius: string;
  };
}

export const BoxBorder = styled.div<BoxBorderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.25rem;
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  color: ${({ theme }) => theme.COLOR.TEXT};
  // Border styles
  border-width: ${(props) => props.options.borderWidth};
  border-style: ${(props) => props.options.borderStyle};
  border-color: ${(props) => props.options.borderColor};
  border-radius: ${(props) => props.options.borderRadius};
`;
