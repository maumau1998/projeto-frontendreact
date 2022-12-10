import React, { useEffect, useState } from "react"
import Home from "./components/Home/Home"
import Filtros from "./components/Filtros/Filtros"
import Carrinho from "./components/Carrinho/Carrinho"
import styled from "styled-components"
import Rodape from "./components/footer/Rodape"



const BoxPrincipal = styled.div`
    width: 100%;
    height: 95vh;
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
    const carrinhoString = JSON.stringify(newCart)
    localStorage.setItem("carr", carrinhoString)
    setCart(newCart)
  }
 
  const newCart = [...cart]
  useEffect(() => {
    if(localStorage.getItem("carr")){
      const newListaCarrinho = localStorage.getItem("carr")
      const carrinho2 = JSON.parse(newListaCarrinho)
      setCart(carrinho2)
    }
  }, [])
  const removeCard = (cardToRemove) => {
    const newCart = [...cart]
    const foundCard = newCart.findIndex(
      (productInCart) => productInCart.id === cardToRemove.id
    );
    newCart.splice(foundCard, 1)
    setCart(newCart)
    const carrinhoString = JSON.stringify(newCart)
    localStorage.setItem("carr", carrinhoString)
  };
  console.log(typeof removeCard)
  return (
    <>
   {pageFlow === 1 ? (
    <>
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
    <Rodape/></>
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
