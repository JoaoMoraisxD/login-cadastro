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

  socket.on('user_login', (user) => {
    activeUsers[socket.id] = user;
    console.log(`Usuário logado: ${user.nome} - Socket ID: ${socket.id}`);

    io.emit("active_users", Object.values(activeUsers));
  });

  socket.on("disconnect", () => {
    console.log("Usuário desconectado:", socket.id);
    delete activeUsers[socket.id];

    io.emit("active_users", Object.values(activeUsers));
  });

  socket.on("send_message", (messageData) => {
    console.log("Mensagem recebida:", messageData);
    io.emit("receive_message", messageData); 
  });
});

app.get("/users", async (req, res) => {
  const client = new Client(config);

  try {
    await client.connect();
    const query = `SELECT username FROM public.users`; 
    const result = await client.query(query);

    const usersWithStatus = result.rows.map(row => ({
      username: row.username,
      isOnline: Object.values(activeUsers).some(user => user.nome === row.username) // Verifica se o usuário está no activeUsers
    }));

    res.status(200).json({
      mensagem: 'Busca bem-sucedida',
      usuarios: usersWithStatus, // Retorna o username com o status isOnline
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

app.post('/cadastraProd', async (req, res) => {
  const jsonData = req.body;
  const { nome, quantidade_em_estoque, valor } = jsonData;
  const client = new Client(config);

  const query = `
    INSERT INTO produtos (nome, quantidade_em_estoque, valor)
    VALUES ($1, $2, $3)
  `;

  const values = [nome, quantidade_em_estoque, valor];

  try {
    await client.connect();
    await client.query(query, values); 
    res.status(200).json({ mensagem: "Produto cadastrado com sucesso !" });
  } catch (error) {
    console.error("Erro ao cadastrar produto!", error);
    res.status(500).json({ mensagem: "Erro ao cadastrar produto !" });
  } finally {
    await client.end(); 
  }
});

app.delete('/deleteProd', async (req, res) => {
  const jsonData = req.body;
  console.log(jsonData)
  const { id, nomeProduto } = jsonData;
  console.log(nomeProduto)

  const client = new Client(config);
  const query = `
    DELETE FROM produtos WHERE id = $1 AND nome = $2
  `;

  const values = [id, nomeProduto];

  try {
    await client.connect();
    await client.query(query, values);
    res.status(200).json({ mensagem: "Produto deletado com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar o produto", error);
    res.status(500).json({ mensagem: "Erro ao deletar produto" });
  } finally {
    await client.end();
  }
});

app.put("/vendeProd", async (req, res) => {
  const jsonData = req.body;
  console.log(jsonData)
  const {id, nome, quantidade} = jsonData;
  const client = new Client(config);
  const query = `
      UPDATE produtos
      SET quantidade_em_estoque = quantidade_em_estoque - $3
      WHERE nome = $2 AND id = $1
      RETURNING quantidade_em_estoque;
  `;

  const values = [id, nome, quantidade];

  try{
    await client.connect();
    await client.query(query, values);
    res.status(200).json({message: "Dados alterados com sucesso !"});

  }catch(error){
    console.error("Error ao enviar dados:", error)
    res.status(500).json({message:"Erro ao enviar dados"});
  }finally{
    await client.end();
  }
})

app.get("/buscaProd", async (req, res) => {
  const client = new Client(config);
  const query = `
    SELECT id, nome, quantidade_em_estoque, valor FROM produtos
  `;

  try{
    await client.connect();
    const response = await client.query(query);
    res.status(200).json({
      mensagem: "Busca efetuada com sucesso",
      resposta: response.rows
    })

  }catch(error){
    console.error("Erro ao buscar produtos", error);
    res.status(500).json({mensagem: "Erro ao buscar produtos"});
  }finally{
    await client.end();
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

