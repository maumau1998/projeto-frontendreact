import React from "react";
import {HomeBox} from './styles'
import Produtos from "../produtos/Produtos";
import cards from '../cards/cards.json'
import Ordenar from "./ordenar/Ordenar";
import {useState} from 'react'

function Home(props) {
    const [ordenar, setOrdenar] = useState("")
    const {addToCart, cart, setCart} = props
    return(
        <HomeBox>
            <Ordenar setOrdenar={setOrdenar}/>
            {cards
            .filter((cards) => {
                return cards.name
                .toLowerCase()
                .includes(props.buscaNome.toLowerCase())
            })
            .filter((cards) => {
              return cards.value[1] >= props.valorMin || props.valorMin === ""
            })
            .filter((cards) => {
              return cards.value[1] <= props.valorMax || props.valorMax === ""
            })
            .sort((a, b) => {
                if (ordenar === "crescente") {
                  return a.value[1] > b.value[1] ? 1 : -1;
                } else if (ordenar === "decrescente") {
                  if (a.value[1] < b.value[1]) {
                    return 1;
                  } else {
                    return -1;
                  }
                }
              })
            .map((cards)=> {
                return <Produtos
                key={cards.id}
                cards={cards}
                addToCart={addToCart}
                isHome={true}
                />
              })}
        </HomeBox>
    )
}
export default Home;