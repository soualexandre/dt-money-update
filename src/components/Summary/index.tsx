import { SumamryContainer, SumaryCard } from "./styles";
import {ArrowCircleUp, ArrowCircleDown,CurrencyDollar} from 'phosphor-react'


export function Summary(){
    return(
    <SumamryContainer>
        <SumaryCard>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp size={32} color="#00b37a"/>
            </header>
            <strong>R$ 17.400,00</strong>
        </SumaryCard>
        <SumaryCard>
            <header>
                <span>Saídas</span>
                <ArrowCircleDown size={32} color="#f75a68"/>
            </header>
            <strong>R$ 17.400,00</strong>
        </SumaryCard>
        <SumaryCard variant="green">
            <header>
                <span>Entradas</span>
                <CurrencyDollar size={32} color="#fff"/>
            </header>
            <strong>R$ 17.400,00</strong>
        </SumaryCard>
    </SumamryContainer>
    );
}