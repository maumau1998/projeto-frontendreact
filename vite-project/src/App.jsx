import React, { useState } from "react"
import Home from "./components/Home/Home"
import Filtros from "./components/Filtros/Filtros"
import Carrinho from "./components/Carrinho/Carrinho"
import styled from "styled-components"



const BoxPrincipal = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    display: grid;
    grid-template-columns: 1fr 3fr;

`

function App() {
  const [valorMin, setValorMin] = useState(-Infinity)
  const [valorMax, setValorMax] = useState(Infinity)
  const [buscaNome, setBuscaNome] = useState("")
  const [pageFlow, setPageFlow] = useState(1);
  const [cart, setCart] = useState([])
  
  const addToCart = (productToAdd) => {
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
  const removeCard = (cardToRemove) => {
    const newCart = [...cart]
    const foundCard = newCart.findIndex(
      (productInCart) => productInCart.id === cardToRemove.id
    );
    newCart.splice(foundCard, 1)
    setCart(newCart);
 
  };
  console.log(typeof removeCard)
  return (
    <>
   {pageFlow === 1 ? (
    <BoxPrincipal className="App">
       <Filtros
       valorMin={valorMin}
       valorMax={valorMax}
       buscaNome={buscaNome}
       setValorMin={setValorMin}
       setValorMax={setValorMax}
       setBuscaNome={setBuscaNome}
       setPageFlow={setPageFlow}
       tamanho={cart.length}
       />
       <Home
        buscaNome={buscaNome}
        valorMin={valorMin}
        valorMax={valorMax}
        addToCart={addToCart}
        tamanho={cart.length}
        cart={cart}
        setCart={setCart}
       />

    </BoxPrincipal>
   ) : (
      <Carrinho 
      setPageFlow={setPageFlow}
       cart={cart} setCart={setCart} compraTotal={cart.length} removeCard={removeCard}
      />
   )}
    </>
  )
}

export default App;
