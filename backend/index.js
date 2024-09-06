const { Client } = require('pg');
const express = require('express');
const bodyParser = require('body-parser')
const config = require('./db');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3001'
   }));


app.use(bodyParser.json())



app.post("/login", async (req, res) => {
    const jsonData = req.body;
    console.log(jsonData);
    const client = new Client(config);

    try{
        await client.connect();
        const query = `SELECT * FROM public.users WHERE email = $1 AND senha = $2`;
        const values = [jsonData.email, jsonData.senha];
        const response = await client.query(query, values);

        if (response.rows.length > 0) {
            res.status(200).json({
                mensagem: 'Login bem-sucedido',
                usuario: response.rows[0]
            });
        } else {
            res.status(401).json({ mensagem: 'Email ou senha incorretos' });
        }
    }catch(error){
        console.error("Error ao fazer login", error)
        res.status(500).json({mensagem: 'Erro ao fazer login'})
    }finally{
        client.end()
    }
});

app.post("/cadastro", async (req, res) => {
    const jsonData = req.body;
    console.log(jsonData);
    const { username, email, senha, nomeCompleto, numero } = jsonData;

    const client = new Client(config);
    const query = `
        INSERT INTO users (username, email, senha, nomecompleto, numero)
        VALUES ($1, $2, $3, $4, $5)`;

    const values = [username, email, senha, nomeCompleto, numero];

    try {
        await client.connect();
        await client.query(query, values);
        res.status(200).json({mensagem: 'Dados enviados com sucesso'});
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        res.status(500).json({ mensagem: 'Erro ao cadastrar usuário' });
    } finally {
        client.end();
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
});