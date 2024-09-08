const { Client } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./db');
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  },
});

app.use(cors({
  origin: '*',
}));

app.use(bodyParser.json());

const activeUsers = {};

io.on("connection", (socket) => {
  console.log("Novo usuário conectado:", socket.id);

  socket.on("send_message", (messageData) => {
    console.log("Mensagem recebida:", messageData);
    io.emit("receive_message", messageData); // Emite a mensagem para todos os clientes
  });

  socket.on("disconnect", () => {
    console.log("Usuário desconectado:", socket.id);
  });

  // Recebe a informação do usuário que efetuou o login
  socket.on('user_login', (user) => {
    activeUsers[socket.id] = user;
    console.log(`Usuário logado: ${user.nome}`);
  });

  // Evento que escuta as mensagens enviadas e as distribui para todos
  socket.on('send_message', (messageData) => {
    const user = activeUsers[socket.id];
    if (user) {
      const message = {
        text: messageData.text,
        user: user.nome,
        isSent: true,
      };
      io.emit('receive_message', message); // Envia a mensagem para todos os clientes conectados
    }
  });
});

app.get("/users", async (req, res) => {
  const client = new Client(config);

  try {
    await client.connect();
    const query = `SELECT username FROM public.users`; // Ajustado para retornar apenas a coluna username
    const result = await client.query(query);

    // Retorna apenas os usernames
    res.status(200).json({
      mensagem: 'Busca bem-sucedida',
      usuarios: result.rows.map(row => row.username), // Mapeia para obter apenas usernames
    });
  } catch (error) {
    console.error("Erro ao consultar usuários", error);
    res.status(500).json({ mensagem: 'Erro ao consultar usuários' });
  } finally {
    await client.end();
  }
});

app.post("/login", async (req, res) => {
  const jsonData = req.body;
  const client = new Client(config);

  try {
    await client.connect();
    const query = `SELECT * FROM public.users WHERE email = $1 AND senha = $2`;
    const values = [jsonData.email, jsonData.senha];
    const response = await client.query(query, values);

    if (response.rows.length > 0) {
      const user = response.rows[0];
      res.status(200).json({
        mensagem: 'Login bem-sucedido',
        usuario: user,
      });
    } else {
      res.status(401).json({ mensagem: 'Email ou senha incorretos' });
    }
  } catch (error) {
    console.error("Error ao fazer login", error);
    res.status(500).json({ mensagem: 'Erro ao fazer login' });
  } finally {
    client.end();
  }
});

app.post("/cadastro", async (req, res) => {
  const jsonData = req.body;
  const { username, email, senha, nomeCompleto, numero } = jsonData;

  const client = new Client(config);
  const query = `
      INSERT INTO users (username, email, senha, nomecompleto, numero)
      VALUES ($1, $2, $3, $4, $5)`;

  const values = [username, email, senha, nomeCompleto, numero];

  try {
    await client.connect();
    await client.query(query, values);
    res.status(200).json({ mensagem: 'Dados enviados com sucesso' });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).json({ mensagem: 'Erro ao cadastrar usuário' });
  } finally {
    client.end();
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
