import styled from "styled-components";

interface ContainerProps {
  direction: string;
  gap: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 200px;
  padding: 10px;
  gap: ${({ gap }) => gap};
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;

export const Box = styled.div<{
  align: string;
  justify: string;
}>`
  position: relative;
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width: 100%;
  height: 100%;
  font-size: 1.25rem;
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  color: ${({ theme }) => theme.COLOR.TEXT};
  &:nth-child(1) { flex-direction: row }  
  &:nth-child(2) { flex-direction: column } }  
`;

export const InputField = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-radius: 0.25rem;
  overflow: hidden;
  color: #123456;
  font-size: 0.75rem;
  background: white;

  label {
    background: lightgray;
    width: 50%;
    text-align: left;
    padding: 5px 5px 5px 10px;
  }

  input,
  select {
    width: 50%;
    border: none;
    outline: none;
  }
  
  input {
    margin-right: 3px;
    padding-left: 5px;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  color: ${({ theme }) => theme.COLOR.TEXT};
  padding: 5px;
  border-radius: 0.25rem;
  width: 35px;
  aspect-ratio: 1;
  border: 2px solid white;
  margin: 1px;
`;

export const TextInfo = styled.div`
  position: absolute;
  top: 0;
  left: 3px;
  font-size: 0.75rem;
`;
