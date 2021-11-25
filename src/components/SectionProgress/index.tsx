import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  Header,
  Content,
  ProgressContainer,
  ProgressIndicator,
  Procent
} from './styled';

interface IProps {
  children: React.ReactNode;
  title: string;
  height: number;
  procent?: boolean;
}

const SectionProgress: React.FC<IProps> = ({ children, title, height, procent }) => {
  const scrollElement = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [value, setValue] = useState<number>(0);


  const handleScroll = React.useCallback(() => {
    let scrollTop = scrollElement.current.scrollTop;
    let scrollHeight = scrollElement.current.scrollHeight;
    setValue((scrollTop / (scrollHeight - height)) * 100);
  }, [height]);

  useEffect(() => {
      const currentScroll = scrollElement.current;
      currentScroll.addEventListener('scroll', handleScroll);
      return () => {
        currentScroll.removeEventListener('scroll', handleScroll);
      };
  
  }, [handleScroll]);


  return (
    <Container>
      <Header>
        <h2>{title}</h2>
        {procent && <Procent>{Math.ceil(value)}<span>%</span></Procent>}
        <ProgressContainer>
          <ProgressIndicator progress={value}></ProgressIndicator>
        </ProgressContainer>
      </Header>
      <Content height={height} ref={scrollElement}>
        {children}
      </Content>
    </Container>
  );
};

export default SectionProgress;
