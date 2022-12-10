import styled from "styled-components";

export const FiltrosBox = styled.div`
      border-right:10px solid black;
      width: 100%;
      height: 95vh;
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 0 25px;
      background-color: powderblue;
`
export const TituloFiltros = styled.h2`
     padding: 40px 0;
     color: white;
     font-size: 25px;
     background-color: black;
     margin:35px 0;
     border-radius: 15px;

`
export const Label = styled.label`
     font-size: 20px;
     font-weight: bold;
`
export const Input = styled.input`
     height: 55px;
     margin-bottom: 40px;
     padding: 0 10px;
     font-size: 18px;
`
export const Button = styled.a`
     margin: 0 auto;
     cursor: pointer;
     width: 170px;
     height: 140px;
     display: flex; 
     margin-bottom: 10px;  
`
export const CarrinhoImage = styled.img`
     width:130px;
     height: 130px;
     position: relative;
`
export const QuantidadeCarrinho = styled.p`
     border-radius: 50%;
     font-size: 32px;
     background-color: red;
     color: white;
     width:40px;
     height:40px;
     display: flex;
     align-items: center;
     justify-content: center;
     position: absolute;
     margin-left: 100px;
`
