import styled from "styled-components";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 90px);
`;

const Text = styled.div`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.COLOR.BACKGROUND};
  color: ${({ theme }) => theme.COLOR.PRIMARY};
  text-align: center;
  border-radius: 0.5rem;
`;

const Error = () => (
  <Container>
    <Text>
      <h1>Page not Found</h1>
      <p>status code 404</p>
    </Text>
  </Container>
);

export default Error;
