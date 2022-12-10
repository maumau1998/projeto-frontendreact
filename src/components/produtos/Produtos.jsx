import React, { useState } from "react";
import Lixeira from '../assets/Lixeira.png'
import { formatter } from "../utils/price"
import {
     Container,
     Img,
     Button,
     ContainerCarrinho,
     ValorProduto,
     Quantidade,
     AlterarTotal,
     Remover,
     LixeiraCarrinho,
     ButtonLixeira
    } from './styles'

function Produtos(props) {
      const {
        addToCart,
         cards,
         cart,
         setCart,
         isHome,
         isCarrinho,
         removeCard,
        } = props
    const aumentarValorCompra = (productToAdd) => {
        const newCart = [...cart]
        var productFound = newCart.find(
          (productInCart) => productInCart.id === productToAdd.id
        )
        if(!productFound){
          const newProduct = {...productToAdd, quantity: 1}
          newCart.push(newProduct)
        }else{
          productFound.quantity++
        }
        setCart(newCart)
      }
    const diminuirValorCompra = (productToAdd) => {
        const newCart = [...cart]
        var productFound = newCart.find(
          (productInCart) => productInCart.id === productToAdd.id
        )
        if(!productFound){
          const newProduct = {...productToAdd, quantity: 1}
          newCart.push(newProduct)
        }else if(productFound.quantity > 1){
          productFound.quantity--
        }
        setCart(newCart)
      }
    return(
        <>
       { isHome && <Container className="Container">
            {props.cards.name}
            <Img src={props.cards.imageUrl}/>
            <p>{formatter.format(cards.value[1])}</p>
           <Button onClick={() => addToCart(cards)}>Adicionar ao carrinho</Button>
        </Container>
       }
       { isCarrinho && <ContainerCarrinho>
           <Remover><p>{props.cards.name}</p> || <h3>{formatter.format(cards.value[1])}</h3><ButtonLixeira onClick={() => removeCard(cards)}><LixeiraCarrinho src={Lixeira}/></ButtonLixeira></Remover>
            <Img src={props.cards.imageUrl}/>
            <Quantidade>
            <AlterarTotal onClick={()=> aumentarValorCompra(cards)}>+</AlterarTotal>
            <ValorProduto>Quantidade: {cards.quantity}</ValorProduto>
            <AlterarTotal onClick={()=> diminuirValorCompra(cards)}>-</AlterarTotal>
            </Quantidade>
        </ContainerCarrinho>
       }
        </>
    )
}
export default Produtos