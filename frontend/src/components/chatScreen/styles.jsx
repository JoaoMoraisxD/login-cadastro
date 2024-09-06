import styled from "styled-components";

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
`;

export const MessageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    overflow: hidden;
`;

export const ClienteContainer = styled.div`
    height: 100vh;
`;
export const InternalContainer = styled.div`
    height: 100vh;
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
background-color: white;
margin-top: 100px;
border-radius: 8%;
`