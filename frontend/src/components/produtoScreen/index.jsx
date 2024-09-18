import { Container, ProdutoContainer, StyledButton, TypeContainer } from "./styles";
import { Header } from "../header";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

function formatToBRL(value) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

const Produdos = () => {
    const [produtos, setProdutos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const buscaProdutos = async () => {
            try {
                const response = await axios.get("http://localhost:3000/buscaProd");
                console.log(response.data);
                setProdutos(response.data.resposta);
            } catch (err) {
                setError(err.message);
            }
        };

        buscaProdutos();
    }, []);

    const handleAddProduct = async () => {
        try {
          const result = await Swal.fire({
            title: "Insira os detalhes do produto",
            html:
              `<input id="productName" class="swal2-input" placeholder="Nome do Produto">` +
              `<input id="productQuantity" class="swal2-input" placeholder="Quantidade" type="number">` +
              `<input id="productPrice" class="swal2-input" placeholder="Preço" type="number">`,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: "Enviar",
            preConfirm: () => {
              const nome = document.getElementById('productName').value;
              const quantidade_em_estoque = document.getElementById('productQuantity').value;
              const valor = document.getElementById('productPrice').value;
    
              if (!nome || !quantidade_em_estoque || !valor) {
                Swal.showValidationMessage("Todos os campos devem ser preenchidos");
                return null;
              }
    
              return { nome, quantidade_em_estoque, valor };
            }
          });
    
          if (result.isConfirmed) {
            const productData = result.value;
            try {
            await axios.post('http://localhost:3000/cadastraProd', productData);
              Swal.fire({
                title: 'Sucesso',
                text: 'Produto cadastrado com sucesso!',
                icon: 'success'
              });
            } catch (error) {
                Swal.fire({
                    title: 'Erro ao cadastrar produto',
                    text: `Erro: ${error.response?.data?.mensagem || error.message}`,
                    icon: 'error'
                });
            }
          }
        } catch (error) {
            Swal.fire({
                title: 'Erro na solicitação',
                text: `Erro: ${error.message}`,
                icon: 'error'
            });
        }
      };
    

    return (<>
        <Header />
        <Container>
            <TypeContainer>
                <h2>PRODUTOS</h2>
            </TypeContainer>
            <ProdutoContainer>
                <TableContainer component={Paper} sx={{border:"solid, white"}}>
                <Table sx={{ minWidth: 50, backgroundColor: '#2b3147f2' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell sx={{color: "white" }}>ID</TableCell>
                        <TableCell sx={{color: "white" }}>Nome do Produto</TableCell>
                            <TableCell align="right" sx={{color: "white" }}>Qauntidade em Estoque</TableCell>
                            <TableCell align="right" sx={{color: "white" }}>Valor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(produtos) && produtos.map((produto) => (
                            <TableRow
                                key={produto.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: '#2b3147f2' }}
                            >
                                <TableCell align="right" sx={{color: "white" }}>{produto.id}</TableCell>
                                <TableCell component="th" scope="row" sx={{color: "white" }}>
                                    {produto.nome}
                                </TableCell>
                                <TableCell align="right" sx={{color: "white" }}>{produto.quantidade_em_estoque}</TableCell>
                                <TableCell align="right" sx={{color: "white" }}>{formatToBRL(produto.valor)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <div>
                    <StyledButton onClick={handleAddProduct} action="insert">Inserir</StyledButton>
                    <StyledButton action="delete">Deletar</StyledButton>
                    <StyledButton action="update">Atualizar</StyledButton>
                    <StyledButton action="editQuantity">Quantidade</StyledButton>
                </div>
            </ProdutoContainer>
        </Container>
    </>)
};

export {Produdos};