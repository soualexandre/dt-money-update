import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import LogoImage from '../../assets/Logo.svg'
export function Headre() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoImage} />
                <NewTransactionButton>Nova Transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
        )
}