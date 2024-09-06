import React from "react";
import { StyledInput } from "./styles";
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from "@mui/material";

const ChatInput = ({ onSend, OnClick }) => {
    const [message, setMessage] = React.useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSend = () => {
        if(message.trim()) {
            onSend(message);
            setMessage('');
        }
    };

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return(<>
            <StyledInput 
                type="text"
                value={message}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua menssagem..."
            />
            <IconButton aria-label="send">
                <SendIcon sx={{ color: "white", margin: "10px", }}/>
            </IconButton>
    </>);
};

export { ChatInput };