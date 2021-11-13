import { FC } from 'react'
import {StyledCard, Header} from './styles';

interface IProps {
    header: string
    children: React.ReactNode
}

const InfoCard: FC<IProps> = ({ header, children }) => {
    return (
        <StyledCard>
            <Header>{header}</Header>
            {children}
        </StyledCard>
    )
}

export default InfoCard;
