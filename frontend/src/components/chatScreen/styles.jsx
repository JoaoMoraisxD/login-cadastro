import styled from "styled-components";

export const MessageBoxContainer = styled.div`
  max-width: 50%;
  margin: 10px 0;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: ${({ isSent }) => (isSent ? '#4f93ff' : '#d1d1d1b3')};
  align-self: ${({ isSent }) => (isSent ? 'flex-end' : 'flex-start')};
  word-wrap: break-word;
  white-space: pre-wrap;
  color: #fff;
  text-align: left;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const SideContainer = styled.div`
    background-color: #1f2437;
    width: 300px;
    height: 100vh;
    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.448);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const MessageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    height: 100vh;
    overflow-y: auto;
    
`;

export const ClienteContainer = styled.div`
    height: 100vh;
`;
export const InternalContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px; /* Espaço entre as mensagens */
    padding-bottom: 70px;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: transparent;
    width: 60%;
    position: fixed; 
    bottom: 0;

    @media (max-width: 480px) {
        width: 55% 
    }
`;

export const BoxMessage = styled.div`
`

export const BoxUser = styled.div`
    height: 60px;
    width: 200px;
    background-color: #ffffff;
    margin-top: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;

    .userImg{
        height: 40px;
        margin: 20px;
    }
`