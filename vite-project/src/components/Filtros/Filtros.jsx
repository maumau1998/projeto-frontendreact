import React from "react";
import {
   FiltrosBox,
   TituloFiltros,
   Label,
   Input,
   Button,
   CarrinhoImage,
   QuantidadeCarrinho} from './styles'
import Carrinho from '../assets/Carrinho.png'

function Filtros(props){
    const quantidadeItens = (e) => {
      if(props.tamanho > 9) {
        return <QuantidadeCarrinho>9+</QuantidadeCarrinho>
      }else if(props.tamanho >= 1){
        return <QuantidadeCarrinho>{props.tamanho}</QuantidadeCarrinho>
      }
    }
    const onChangeBuscaMin = (e) => {
      props.setValorMin(e.target.value)
    }
    const onChangeBuscaMax = (e) => {
      props.setValorMax(e.target.value)
    }
    const onChangeBuscaNome = (e) => {
      props.setBuscaNome(e.target.value)
    }
    const entrarCarrinho = () => {
      props.setPageFlow(2)
    }
    return(
      <FiltrosBox>
        <TituloFiltros>Filtros</TituloFiltros>
        <Label htmlFor="minimo">Valor Mínimo:</Label>
        <Input
         type="number"
         id="minimo"
         value={props.valorMin}
         onChange={onChangeBuscaMin}
         placeholder="valor mínimo"
          />
        <Label htmlFor="maximo">Valor Máximo:</Label>
        <Input
         type="number"
         id="maximo"
         value={props.valorMax}
         onChange={onChangeBuscaMax}
         placeholder="valor máximo"
         />
        <Label htmlFor="nomes">Busca por Nome:</Label>
        <Input
         type="text"
         id="nomes"
         value={props.buscaNome}
         onChange={onChangeBuscaNome}
         placeholder="busca por nome"
         />
         <Button onClick={()=> entrarCarrinho()}><CarrinhoImage src={Carrinho}/>{quantidadeItens()}</Button>
      </FiltrosBox>
    )
}
export default Filtros;