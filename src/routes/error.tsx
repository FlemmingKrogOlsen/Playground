import styled from "styled-components";

const Container = styled.main`
    padding: 1rem;
`;

interface IProps {
    title: string
}

const Error = ({ title }: IProps) => {
    return (
        <Container>
            <h1>{title}</h1>
            <p>
                This is the error page. If you see this page, something went wrong.
            </p>
        </Container>
    );
}

export default Error
