import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #1f2437;
    border-top: 1px solid #171b2c;
    width: 100%;
    height: 40%;
`;

export const StyledInput = styled.input`
    width: 70%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    outline: none;
    font-size: 16px;
    background-color: #fff;

    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);
    }
`;

