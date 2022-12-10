import React, { useState } from "react";
import Produtos from "../produtos/Produtos";
import { formatter } from "../utils/price";
import Bandeiras from '../assets/Bandeiras.png'
import {CarrinhoBox,
     Titulo,
     ContainerCard,
     ContainerFinalizar, 
     ButtonSair, 
     SectionConcluir, 
     ButtonFinalizar,
     Icone,
     VazioText
    } from './styles'
import  DadoCartao  from "../DadoCartao/DadoCartao";


function Carrinho(props){
    const sairCarrinho = () => {
        props.setPageFlow(1)
      }
    const {cart, removeCard, setCart} = props
    const total = cart.reduce(
        (acc, cards) => cards.value[1] * cards.quantity + acc, 0

    )

     const [finalizarCompra, setFinalizarCompra] = useState(1)
     function pageFinalizar () {
        function carrinhoVazio () {
            if(total === 0) {
                alert("Carrinho está vazio, adicione os produtos !!!")
            }else{
                setFinalizarCompra(2)
            }
        }
        carrinhoVazio()
     }
     function vazioText() {
        if(cart.length === 0) {
            return <VazioText>Vazio</VazioText>
        }
     }
    return(
        <>
        {finalizarCompra === 1 ? (<CarrinhoBox>
            <SectionConcluir>
            <ContainerFinalizar>
            <ButtonSair onClick={()=> sairCarrinho()}>⬅️ Voltar / Home</ButtonSair>
            <Titulo>TOTAL : {formatter.format(total)}</Titulo><Titulo>Qtd: {cart.length}</Titulo>
            </ContainerFinalizar>
            <div className="concluirCompra">
             <div><h1>{formatter.format(total)}</h1><h2>OU</h2><h1>Até 12x de {formatter.format(total/10.26)}</h1></div>
             <div><ButtonFinalizar onClick={()=> pageFinalizar()}>Finalizar Compra</ButtonFinalizar></div>
            </div>
            <Icone className="icone">
              <img src={Bandeiras}/>
            </Icone>
            </SectionConcluir>
            <ContainerCard>
                {vazioText()}
            {
               cart
               .map((cards) => {
                return <Produtos
                 cards={cards}
                  key={cards.i}
                  isCarrinho={true}
                  removeCard={removeCard}
                  cart={cart}
                  setCart={setCart}
                  />
               }) 
            }
            </ContainerCard>
        </CarrinhoBox>) : (<DadoCartao total={total} setFinalizarCompra={setFinalizarCompra}/>)}
        </>
    )
}
export default Carrinho;