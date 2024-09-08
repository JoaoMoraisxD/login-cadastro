// Chat.jsx
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { BoxUser, Container, InputContainer, InternalContainer, MessageContainer, SideContainer } from "./styles";
import { Header } from "../header/index";
import { ChatInput } from "../chatInput/index";
import MessageBox from "../mensageBox";

// Conectando ao backend Socket.IO
const socket = io("http://localhost:3000");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setUser({ nome: username });
    }

    // Escuta o evento de recebimento de mensagens
    socket.on("receive_message", (msg) => {
      console.log("Mensagem recebida:", msg); // Log para depuração
      setMessages((prevMessages) => [...prevMessages, msg]); // Adiciona a nova mensagem ao estado
    });

    // Cleanup do evento ao desmontar o componente
    return () => {
      socket.off("receive_message");
    };
  }, []);

  // Função para enviar mensagens
  const handleSend = (message) => {
    const username = localStorage.getItem("username");
    console.log("Enviando mensagem:", { text: message, user: username }); // Log para depuração
    if (message.trim() && username) {
      const messageData = {
        text: message,
        user: username, // Inclui o nome do usuário na mensagem
      };
      socket.emit("send_message", messageData); // Envia a mensagem ao backend
      setMessage(""); // Limpa o campo de entrada
    }
  };

  // Função para enviar mensagem ao pressionar Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(message);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <SideContainer>
          <BoxUser>
            <span>Gabriel Braz</span>
          </BoxUser>
          <BoxUser>
            <span>Hugo Paulino</span>
          </BoxUser>
        </SideContainer>
        <MessageContainer>
          <InternalContainer>
            {messages.map((msg, index) => (
              <MessageBox
                key={index}
                message={`${msg.user}: ${msg.text}`} // Mostra o usuário e a mensagem
                isSent={msg.user === user?.nome} // Define o alinhamento da mensagem com base no usuário logado
              />
            ))}
          </InternalContainer>
          <InputContainer>
            <ChatInput
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              onSend={() => handleSend(message)}
            />
          </InputContainer>
        </MessageContainer>
      </Container>
    </>
  );
};

export { Chat };
