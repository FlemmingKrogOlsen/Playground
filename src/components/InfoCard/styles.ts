import styled from 'styled-components'

//helper variables
const oversizeWidth = "20px";
const oversizeHeight = "5px";
const rotate = "1deg";
const shadow = "rgba(0, 0, 0, 0.3) 0px 15px 30px 0px, rgba(0, 0, 0, 0.3) 0px 5px 10px 0px"

export const Container =  styled.div`
  position: relative;
  z-index: 1;
  width: calc(100% - 2rem);
  margin: 1rem auto;
  max-width: 800px;
`;

export const StyledCard = styled.div`
background-color: white;
border-radius: 0.5rem;
padding: 0.75rem;
box-shadow: ${shadow};
&:hover {
  &::after {
    transform: rotate(calc(${rotate} * -1));
  }
  &::before {
    transform: rotate(${rotate});
  }
}

&::after ,&::before {
  content: "";
  transition: all 1s ease-in-out;
  box-shadow:${shadow};
  position: absolute;
  top: 0;
  left: calc((${oversizeWidth} / 2) * -1);
  width: calc(100% + ${oversizeWidth});
  height: calc(100% + ${oversizeHeight});
  opacity: 0.3;
  border-radius: 0.5rem;
  z-index: -1;
}

&::after {
  transform: rotate(${rotate});
  background-color: hsl(0, 0%, 50%);
}

&::before {
  transform: rotate(calc(${rotate} * -1));
  background-color: hsl(0, 0%, 83%);
}
`;

export const Header = styled.header`
    font-size: 1.5rem;
    padding-bottom: 1rem;
`;
