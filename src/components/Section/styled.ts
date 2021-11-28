import styled from 'styled-components';
import { IColor } from './types';

const colors ={
  primary: '#123456',
  secondary: '#fff',
}

const Container = styled.section<IColor>`
  width: 100%;
  margin-bottom: 10px;

  background: ${colors.secondary};

  box-shadow: ${({ shadow }) =>
    shadow ? '0 15px 30px 0 hsla(0, 0%, 0%, 0.2), 0 5px 10px 0 hsla(0, 0%, 0%, 0.2)' : 'none'};

  border: ${({ border, color }) =>
    border ? '1px solid ' + (color ? color : colors.primary) : 'none'};
`;

const Header = styled.div<IColor>`
  background: ${({ color }) => (color ? color : colors.primary)};
  display: flex;
  justify-content: space-between;
  padding: 8px 10px 10px 10px;
`;

const Title = styled.div`
  color: ${colors.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  @media only screen and (min-width: 600px) {
    font-size: 1rem;
  }
`;

const Content = styled.div`
  color: ${colors.primary};
  overflow: auto;
  position: relative;
`;

export { Container, Header, Content, Title };
