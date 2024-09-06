import styled from "styled-components";

export const Btn_container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
`;

export const Button_ = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border: none;
    color: azure;
    font-weight: bold;
    background: linear-gradient(150deg, #034159, #025951, #02735E, #038C3E, #0CF25D);

    &:hover{
        transform: scale(1.05);
        box-shadow: 0 4px 10px rgba(150deg);
        cursor: pointer;
    }
`