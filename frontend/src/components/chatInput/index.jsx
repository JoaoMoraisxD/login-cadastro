import React from 'react';
import { StyledInput } from "./styles";
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from "@mui/material";

const ChatInput = ({ onSend, value, onChange, onKeyDown }) => {
    return (
        <>
            <StyledInput
                type="text"
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder="Digite sua mensagem..."
            />
            <IconButton aria-label="send" onClick={() => onSend(value)}>
                <SendIcon sx={{ color: "white", margin: "10px" }} />
            </IconButton>
        </>
    );
};

export { ChatInput };
