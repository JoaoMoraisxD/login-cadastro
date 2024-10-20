import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { BoxUser, Container, InputContainer, InternalContainer, MessageContainer, SideContainer, StatusIndicator } from "./styles";
import { Header } from "../header/index";
import { ChatInput } from "../chatInput/index";
import MessageBox from "../mensageBox";
import axios from "axios";
import userImg from "../../assets/user.png";
import { useUser } from "../contexts/userContext"; // Importe o hook useUser para acessar o contexto

const socket = io("http://localhost:3000");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      socket.emit('user_login', user); // Emite o evento de login com as informações do usuário
    }
  }, [user]);

  useEffect(() => {
    socket.on("active_users", (users) => {
      console.log("Usuários online:", users);
      setData(users); // Atualiza o estado com a lista de usuários online
    });
  
    return () => {
      socket.off("active_users");
    };
  }, []);

  useEffect(() => {
    const buscaUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users"); 
        console.log(response);
        setData(response.data.usuarios); // Salva a lista de usuários com `isOnline` incluído
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    buscaUsers();

    const intervalId = setInterval(buscaUsers, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    socket.on("receive_message", (msg) => {
      console.log("Mensagem recebida:", msg);
      setMessages((prevMessages) => [...prevMessages, msg]); // Adiciona a nova mensagem ao estado
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const handleSend = (message) => {
    if (message.trim() && user) { // Verifica se há uma mensagem e um usuário logado
      const messageData = {
        text: message,
        user: user.nome, 
      };
      console.log("Enviando mensagem:", messageData);
      socket.emit("send_message", messageData); 
      setMessage("");
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
          {loading ? (
            <p style={{color: "white", fontWeight: "bold"}}>Carregando...</p>
          ) : error ? (
            <p>Erro ao buscar os dados: {error}</p>
          ) : (
            data.map((item, index) => (
              <BoxUser key={index}>
                <StatusIndicator $isVisible={item.isOnline} /> 
                <img src={userImg} alt="userimg" />
                {item.username} 
              </BoxUser>
            ))
          )}
        </SideContainer>
        <MessageContainer>
          <InternalContainer>
            {messages.map((msg, index) => (
              <MessageBox
                key={index}
                message={`${msg.user}:\n${msg.text}`} 
                isSent={msg.user === user?.nome}
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
