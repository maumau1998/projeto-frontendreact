import styled from 'styled-components';

export const Container = styled.div`
    width:  350px;
    height: 430px;
    border: 2px solid gray;  
    display: flex;
    flex-direction: column;
    text-align:center;
    border-radius: 20px;
    padding: 10px 0;
    font-size: 20px;
    background-color: powderblue;
    box-shadow: 0 0 20px black;
    font-weight: bold;

    p{
      font-size: 25px;
    }
    
`
export const ContainerCarrinho = styled.div`
    width:  380px;
    height: 450px;
    border: 2px solid gray;  
    display: flex;
    flex-direction: column;
    text-align:center;
    border-radius: 20px;
    padding: 10px 0;
    font-size: 20px;
    background-color: powderblue;
    box-shadow: 0 0 20px black;
    font-weight: bold;
    margin: 0 auto;
`
export const Img = styled.img`
   max-height: 300px;
   min-height: 300px;
   margin: 10px 0;
   border-top: 1px solid black;
   border-bottom: 1px solid black;
`
export const Button = styled.button`
   padding: 7px 0;
   width: 200px;
   margin: 0 auto;
   border-radius: 8px;
   border: none;
   background-color: blue;
   color: white;
   font-size: 15px;
   cursor: pointer;
   :hover{
      background-color:magenta;
   }
`
export const ValorProduto = styled.p`
   font-size: 25px;
`
export const Quantidade = styled.section`
   display: flex;
   justify-content: space-around;
   align-items: center;
`
export const AlterarTotal = styled.button`
   width: 40px;
   padding: 3px 0 ;
   font-size: 25px;
`
export const Remover = styled.div`
   display: flex;
   margin: 0 auto;
   width: 300px;
   justify-content: space-between;
   align-items: center;
   
`
export const LixeiraCarrinho = styled.img`
   width: 25px;
   height: 25px;
`
export const ButtonLixeira = styled.button`
   background-color: red;
   padding: 3px;
   cursor: pointer;
`