import React, { useState } from "react";
import { formatter } from "../utils/price";
import Chip from '../assets/Chip.jpg'
import {ContainerDado, 
    SectionTotal, 
    ContainerPrincipal, 
    FormaPagamento, 
    FormaPagamento2, 
    ButtonTrocaPag,
    ChavePix,
    DescricaoPix,
    ImgChip
} from './styles'

function DadoCartao(props){
    const[cartao, setCartao] = useState(1)
    const[chavePix, setChavePix] = useState("")
    const [nomeUser, setNomeUser] = useState("")
    const [numberCart, setNumberCart] = useState("")
    const [numberCart2, setNumberCart2] = useState(0)
    const [nomeCompleto, setNomeCompleto] = useState("")

    function sairDeFinalizar() {
        props.setFinalizarCompra(1)
    }
    function trocarFormaPagar() {
        setCartao(2)
    }
    function trocarFormaPagar2() {
        setCartao(1)
    }
    function renderizaPixChave() {
        if(chavePix === ""){
        setChavePix(<h3>044.264.641-02 || (Mauricio Leite Silva - NUBANK 😊)</h3> )
        }else{
            alert("Chave PIX já foi gerada !!! 😊")
        }
    }
    const onChangeNomeUser = (e) => {
        setNomeUser(e.target.value)
    }
    const onChangeNumberCart = (e) => {
        setNumberCart(e.target.value)
    }
    const onChangeNomeCompleto = (e) => {
        setNomeCompleto(e.target.value)
    }
    function comprarAgora(e) {
        if(nomeCompleto.length > 1){
        alert(`Compra efetuada com sucesso, obrigada ${nomeCompleto}`)
        localStorage.removeItem("carr")
        location.reload()}else{alert("Todos os campos são obrigátorios")}
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
            <input value={nomeCompleto} onChange={onChangeNomeCompleto} id="nome" type="text" placeholder="Digite seu nome completo" required/><br/>
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
            <div className="englobaDadosCartao">
              <div className="dadosUserCartao">
                <label htmlFor="cartao">Número do cartão</label><br/>
                <input value={numberCart} onChange={onChangeNumberCart} id="cartao" type="number" placeholder="Digite somente números"/><br/>
                <label htmlFor="nomeUser">Nome do titular</label><br/>
                <input value={nomeUser} onChange={onChangeNomeUser} id="nomeUser" type="text" placeholder="Digite o nome impresso no cartão"/><br/>
               <div id="Expirar">
                <div className="alinharMes">
                <label htmlFor="meses">Mês</label><br/>
                <select id="meses" className="meses">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </select></div>
                <br/>
                <div className="alinharMes">
                <label htmlFor="ano">Ano</label><br/>
                <input type="text" id="ano" placeholder="Ano"/></div>
                <div className="alinharMes">
                <label htmlFor="ano">CVV</label><br/>
                <input type="text" id="CVV" placeholder="CV"/></div>
                </div>
                </div>
                <div className="cartaoRenderiado">
                   <div className="simulaCartao">
                       <div className="chipCartao"><ImgChip src={Chip}/></div>
                       {numberCart.length >= 1 ? (<p>{numberCart}</p>):(<h2>**** **** **** ****</h2>)}
                       {nomeUser.length >= 1 ? (<p>{nomeUser.toLocaleUpperCase()}</p>):(<p>**** * * *****</p>)} 
                   </div>
                </div>
                </div>
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
                <button onClick={()=> comprarAgora()}>Comprar Agora</button>
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