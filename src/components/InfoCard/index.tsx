import { FC } from 'react'
import {StyledCard, Header, Container } from './styles';

interface IProps {
    header: string
    children: React.ReactNode
}

const InfoCard: FC<IProps> = ({ header, children }) => {
    return (
        <Container>
        <StyledCard>
            <Header>{header}</Header>
            {children}
        </StyledCard>
        </Container>
    )
}

export default InfoCard;
