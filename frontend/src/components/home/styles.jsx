import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1f2437;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const TypeContainer = styled.div`
    margin-left: 100px;
    margin-top: 100px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 500px){
        width: 100%;
    }
    h2{
        color: white;
    }
    &::after {
            content: '';
            display: block;
            width: 100%; 
            height: 1px; 
            background-color: #565454; 
            margin: 5px auto 0 auto; 
        }
    
`;

export const GrafContainer = styled.div`
    background-color: #2b3147f2;
    font-family: 'Roboto', sans-serif;
    width: 700px;
    height: 500px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 25px;
    color: white;
    
    h3{
        margin-top: 25px;
    }

`;
export const DetailContainer = styled.div`
    background-color: transparent;
    width: 100%;
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    gap: 50px;
    margin-bottom: 20px; 
    @media (max-width: 500px){
        width: 100%;
    }

`;

export const GraficoM1 = styled.div`
  width: 210px;
  height: 210px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #2b3147f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    
    .title {
        width: 100%;
        color: white;
        display: flex;
        gap: 5px;
        font-family: 'Roboto', sans-serif;
        padding-bottom: 15px;
  }
   
    .valor {
        color: white;
        position: relative;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        z-index: 1;

        &::after {
            content: '';
            display: block;
            width: 100%; /* Define a largura da linha */
            height: 1px; /* Define a altura da linha */
            background-color: #565454; /* Cor da linha */
            margin: 5px auto 0 auto; /* Centraliza a linha horizontalmente */
        }
    }

    .positiveValor {
        font-family: 'Roboto', sans-serif;
        width: 100%;
        color: green;
        display: flex;
    }

    .sideText {
        font-family: 'Roboto', sans-serif;
        color: #565454;
        margin-left: 10px;
    }
`;

export const LineContainer = styled.div`
    width: 83%;
    height: 290px;
    background-color: #2b3147f2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    margin: 10px;
    @media (max-width: 500px){
        width: 100%;
    }

    h1{
        color: white;
        margin-bottom: 40px;
    }
`;

export const InfoLine = styled.div`
  width: 80%;
  padding: 10px 0;
  margin: 10px 0;
  color: white;
  display: flex;
  justify-content: space-between; 
  border-bottom: 1px solid #565454; 
`;

export const PizzaContainer = styled.div`
    background-color:#2b3147f2;
    width: 550px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    color: white;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 800px){
        width: 100%;
    }
`;

export const Div = styled.div`
    width: 83%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 800px){
        flex-direction: column;
        gap: 30px;
    }
`
