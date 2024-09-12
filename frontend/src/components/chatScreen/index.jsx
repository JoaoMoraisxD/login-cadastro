import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { BoxUser, Container, InputContainer, InternalContainer, MessageContainer, SideContainer, StatusIndicator } from "./styles";
import { Header } from "../header/index";
import { ChatInput } from "../chatInput/index";
import MessageBox from "../mensageBox";
import axios from "axios";
import userImg from "../../assets/user.png"

const socket = io("http://localhost:3000");

const Chat = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsOnline(true);

    return () => {
      setIsOnline(false);
    };
  }, []);

  useEffect(() => {

    const buscaUsers = async () => {
      try{
        const response = await axios.get("http://localhost:3000/users");
        console.log(response)
        setData(response.data.usuarios);
      }catch(err){
        setError(err.message);
      }finally {
        setLoading(false);
      }
    };

    buscaUsers();
  }, []);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setUser({ nome: username });
    }
    socket.on("receive_message", (msg) => {
      console.log("Mensagem recebida:", msg); 
      setMessages((prevMessages) => [...prevMessages, msg]); // Adiciona a nova mensagem ao estado
    });


    return () => {
      socket.off("receive_message");
    };
  }, []);

  // Função para enviar mensagens
  const handleSend = (message) => {
    const username = localStorage.getItem("username");
    console.log("Enviando mensagem:", { text: message, user: username }); 
    if (message.trim() && username) {
      const messageData = {
        text: message,
        user: username, 
      };
      socket.emit("send_message", messageData); // Envia a mensagem ao backend
      setMessage(""); // Limpa o campo de entrada
    }
  };

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
          {loading ? (<p>Carregando...</p>) : error ? (
          <p>Erro ao buscar os dados: {error}</p>
          ) : (
          data.map((item, index) => (
          <BoxUser key={index}>
            <StatusIndicator $isVisible={isOnline} />
            <img src={userImg} alt="userimg"/>{item}
          </BoxUser> 
         ))
        )}
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
