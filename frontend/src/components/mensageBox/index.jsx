import React from 'react';
import { MessageBoxContainer } from '../chatScreen/styles'; 

const MessageBox = ({ message, isSent }) => {
  console.log("Renderizando mensagem:", message);
  return (
    <MessageBoxContainer isSent={isSent}>
      {message}
    </MessageBoxContainer>
  );
};

export default MessageBox;