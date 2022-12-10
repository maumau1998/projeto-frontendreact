import styled from "styled-components";

export const ContainerDado = styled.div`
   background-color: white;
   width: 800px;
   height: 100%;
   margin: 0 auto;

   section{
    width: 100%;
    height: 400px;
    border-bottom: 1px solid black;
    padding: 50px 40px;
   }
   #nome, #email{
    width: 100%;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 20px;
    font-size: 17px;
   }
   label{
    font-size: 20px;
   }
`
export const SectionTotal = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid black;
    justify-content: space-between;
    padding: 20px 12px;

    div{
        font-size: 25px;
        font-weight: bold;
        color: blue;
    }
    button{
        width: 120px;
        font-size: 22px;
        cursor: pointer;
        padding: 0 10px;
    }
`
export const ContainerPrincipal = styled.div`
      background-color: black;
      width: 100%;
      height: 100%;
      padding: 20px 0;
`
export const ButtonTrocaPag = styled.div`
     width: 100%;
     height: 90px;
     display: flex;
     justify-content: space-around;
     align-items: center;
     border-bottom: 1px solid black;

     button{
        width: 240px;
        height: 70px;
        font-size: 25px;
        border: 1px solid blue;
        background-color: powderblue;
        color: blue;
        cursor: pointer;

        :hover{
            border:2px solid blue;
        }
     }
`
export const FormaPagamento = styled.div`
     width: 100%;
     height: 500px;
     padding: 40px;

     input{
        width: 100%;
        height: 40px;
        margin-top: 5px;
        margin-bottom: 20px;
        padding: 0 8px;
        font-size: 15px;
     }
     #select{
        margin-top: 10px;
     }
     #Expirar{
      display: flex;
      width: 100%;
      height: 80px;
      gap: 10px;
     }
     .englobaDadosCartao{
      display: flex;
     }
     .dadosUserCartao{
      width: 50%;
     }
     .cartaoRenderiado{
      width: 50%;
      padding: 45px 25px;
     }
     .chipCartao{
      width: 60px;
      height: 40px;
      background-color: white;
      border-radius: 10px;
      border: 1px solid black;
      padding: 4px;
     }
     .simulaCartao{
      width: 100%;
      height: 100%;
      background-color: gray;
      border-radius: 12px;
      padding: 10px;
      border: 2px solid black;
      
      p, h2{
         margin-top: 20px;
         color: white;
      }
     }
     .alinharMes{
      text-align: center;
     }
     .meses{
        width: 80px;
        margin-bottom: 10px;
        margin-top: 10px;
        padding: 0;
        text-align: center;
     }
     #ano{
      width: 80px;
      margin-top: 10px;
     }
     #CVV{
      width: 80px;
      margin-top: 10px;
     }
     select{
        width: 100%;
        height: 40px;
        padding: 0 20px;
        font-size: 17px;
     }
     button{
        width: 100%;
        height: 40px;
        background-color: blue;
        color: white;
        font-size: 22px;
        border: none;
        border-radius: 10px;
        margin-top: 25px;
        cursor: pointer;

        :hover{
            background-color: white;
            border: 1px solid blue;
            color: blue;
        }
     }
`
export const FormaPagamento2 = styled.div`
     width: 100%;
     height: 500px;
     display: flex;
     gap: 25px;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     button{
        width: 70%;
        padding: 20px 0;
        background-color: lime;
        border:1px solid black;
        border-radius: 10px;
        cursor: pointer;
        font-size: 22px;
        font-weight: bold;

        :hover{
            background-color: green;
            color: white;
        }
     }
`
export const ChavePix = styled.span`
h3{
    width: 100%;
    height: 40px;
    background-color: #363636;
    color: white;
    border-radius: 12px;
    display:flex;
    align-items: center;
    padding: 0 20px;
}
`
export const DescricaoPix = styled.div`
     width: 400px;
     height: 100px;
     padding: 15px;
     border: 1px solid black;
     margin: 0 auto;
     text-align: center;

     h3{
        margin-bottom: 15px;
     }
`
export const ImgChip = styled.img`
    width: 40px;
    height: 28px;
    border-radius: 10px;
`