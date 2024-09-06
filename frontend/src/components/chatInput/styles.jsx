import styled from "styled-components";

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

