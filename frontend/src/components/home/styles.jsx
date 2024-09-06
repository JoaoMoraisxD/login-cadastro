import styled from "styled-components";
import bgImage from "../../assets/ceuNoturno.jpg"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(
    135deg, /* Define a direção do gradiente (45 graus diagonais) */
    #000000, /* Preto muito escuro no início */
    #181818 30%, /* Cinza escuro em 30% do gradiente */
    #0d0d0d 60%, /* Outro tom escuro no meio */
    #000000 100% /* Preto puro no final */
  );
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;

    @media (max-width: 500px){
        flex-direction: column;
    }
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
    background-color: #292929da;
    font-family: 'Roboto', sans-serif;
    width: 600px;
    height: 500px;
    margin: auto;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    margin-bottom: 20px;
    color: white;
    @media (max-width: 500px){
        width: 100%;
    }
    
    h3{
        margin-top: 10px;
    }
      
`;
export const DetailContainer = styled.div`
    background-color: transparent;
    width: 600px;
    height: 500px;
    margin: auto;
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
  border-radius: 30px;
  background-color: #292929da;
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
    width: 50%;
    background-color: #292929da;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
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
    background-color:#292929da;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 30px;
    color: white;
    font-family: 'Roboto', sans-serif;
    margin: 10px;
    @media (max-width: 800px){
        width: 100%;
    }

    h2{
        margin-bottom: 10px;
    }
`;
