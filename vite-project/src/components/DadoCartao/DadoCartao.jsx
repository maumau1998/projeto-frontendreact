import React, { useState } from "react";
import { formatter } from "../utils/price";
import {ContainerDado, 
    SectionTotal, 
    ContainerPrincipal, 
    FormaPagamento, 
    FormaPagamento2, 
    ButtonTrocaPag,
    ChavePix,
    DescricaoPix,
} from './styles'

function DadoCartao(props){
    function sairDeFinalizar() {
        props.setFinalizarCompra(1)
    }
    const[cartao, setCartao] = useState(1)
    function trocarFormaPagar() {
        setCartao(2)
    }
    function trocarFormaPagar2() {
        setCartao(1)
    }
    const[chavePix, setChavePix] = useState("")
    function renderizaPixChave() {
        if(chavePix === ""){
        setChavePix(<h3>044.264.641-02 || (Mauricio Leite Silva - NUBANK 😊)</h3> )
        }else{
            alert("Chave PIX já foi criada !!! 😊")
        }
    }
    return(
        <ContainerPrincipal>
        <ContainerDado>
            <SectionTotal>
            <div> Total a pagar : {formatter.format(props.total)}</div>
            <button onClick={() => sairDeFinalizar()}>⬅️ Voltar</button>
            </SectionTotal>
            <section>
            <label htmlFor="nome">Nome Completo</label><br/>
            <input id="nome" type="text" placeholder="Digite seu nome completo"/><br/>
            <label htmlFor="email">Seu email</label><br/>
            <input id="email" type="text" placeholder="Digite seu email"/><br/>
            <label htmlFor="email">Confirme seu email</label><br/>
            <input id="email" type="text" placeholder="Digite novamente seu email"/>
            </section>
            <ButtonTrocaPag>
            <button onClick={() => trocarFormaPagar2()}>Cartão de Crédito</button>
            <button onClick={() => trocarFormaPagar()}>PIX</button>
            </ButtonTrocaPag>
           {cartao === 1 ? (<FormaPagamento>
                <label htmlFor="cartao">Número do cartão</label><br/>
                <input id="cartao" type="number" placeholder="Digite somente números"/><br/>
                <label htmlFor="nomeUser">Nome do titular</label><br/>
                <input id="nomeUser" type="text" placeholder="Digite o nome impresso no cartão"/><br/>
                <label htmlFor="meses">Mês</label><br/>
                <select id="meses" className="meses">
                    <option>janeiro</option>
                    <option>fevereiro</option>
                    <option>março</option>
                    <option>abril</option>
                    <option>maio</option>
                    <option>junho</option>
                    <option>julho</option>
                    <option>agosto</option>
                    <option>setembro</option>
                    <option>outubro</option>
                    <option>novembro</option>
                    <option>dezembro</option>
                </select><br/>
                <label id="parcela" htmlFor="select">Selecione o número de parcelas</label>
                <select id="select">
                    <option value="">1x de {formatter.format(props.total)}</option>
                    <option value="">2x de {formatter.format(props.total / 1.92)}</option>
                    <option value="">3x de {formatter.format(props.total / 2.85)}</option>
                    <option value="">4x de {formatter.format(props.total / 3.76)}</option>
                    <option value="">5x de {formatter.format(props.total / 4.64)}</option>
                    <option value="">6x de {formatter.format(props.total / 5.50)}</option>
                    <option value="">7x de {formatter.format(props.total / 6.35)}</option>
                    <option value="">8x de {formatter.format(props.total / 7.17)}</option>
                    <option value="">9x de {formatter.format(props.total / 7.97)}</option>
                    <option value="">10x de {formatter.format(props.total / 8.75)}</option>
                    <option value="">11x de {formatter.format(props.total / 9.51)}</option>
                    <option value="">12x de {formatter.format(props.total / 10.26)}</option>
                </select>
                <button>Comprar Agora</button>
            </FormaPagamento>)
            :
            (<FormaPagamento2>
                <DescricaoPix>
                    <h3>Aprovação Imediata</h3>
                    <p>O pagamento com Pix leva pouco tempo para ser processado.</p>
                </DescricaoPix>
                <button onClick={()=> renderizaPixChave()}>Gerar chave pix</button><br/>
                <ChavePix>{chavePix}</ChavePix>
            </FormaPagamento2>)}
        </ContainerDado>
        </ContainerPrincipal>
    )
}
export default DadoCartao