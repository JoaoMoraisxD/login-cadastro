import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1f2437;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ProdutoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 25px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  color: white;

  background-color: ${({ action }) => {
    switch (action) {
      case 'delete':
        return '#ff4d4f'; 
      case 'insert':
        return '#4caf50'; 
      case 'update':
        return '#2196f3'; 
      case 'editQuantity':
        return '#ffc107'; 
      default:
        return '#333'; 
    }
  }};

  &:hover {
    opacity: 0.8;
  }
`;

export const TypeContainer = styled.div`
    margin-top: 50px;
    width: 70%;
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