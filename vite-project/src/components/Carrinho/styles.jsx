import styled from 'styled-components';

export const CarrinhoBox = styled.div`
    background-color: black;
    width:100%;
    border: 20px solid black;
    height: 100vh;
    text-align: center;
    margin: 0 auto;
    display: flex;
    gap: 22px;
`
export const Titulo = styled.h2`
    font-weight: bold;
    font-size: 25px;
`
export const ProdutosCard = styled.div`
    background-color: pink;
`
export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px 0;
    width: 50%;
    height: 100%;
    margin: 0 auto;
    overflow-y: scroll;
    background-color: white;
`
export const ContainerFinalizar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 20px;
    background-color: #363636;
    width: 100%;
    height: 80px;
    color: white;
`
export const ButtonSair = styled.button`
    height: 40px;
    width: 180px;
    font-size: 18px;
    margin-right: 25px;
    cursor: pointer;
`
export const SectionConcluir = styled.div`
    background-color: black;
    width: 50%;
    height: 90vh;

    .concluirCompra{
        background-color: #363636;
        width: 100%;
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        padding: 25px 0;
        color: white;

        h1{
            margin: 15px 0;
        }
    }
`
export const ButtonFinalizar = styled.button`
     width: 50%;
     height: 50px;
     font-size: 25px;
     background-color: limegreen;
     font-weight: bold;
     color: white;
     border: none;
     border-radius: 12px;
     cursor: pointer;
     margin-top: 20px;

     :hover{
        background-color: green;
     }

`
export const Icone = styled.div`
    margin: 0 auto;
    margin-top: 15px;
    width: 70%;
    height: 180px;
    img{
        width: 100%;
        height: 100%;
    }
`