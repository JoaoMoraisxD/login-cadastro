import React from "react";
import { Container, Container_login, Wrap_login, Login_form, Form_title, Txt1, Txt2 } from "./styles";
import { Input } from "../input"; 
import { Button } from "../button";
import { Header } from "../header";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form"; 
import axios from "axios";
import jsImage from "../../assets/js.png";
import Swal from "sweetalert2";
import { useUser } from "../contexts/userContext"; // Importe o hook useUser


const schema = yup.object({
  email: yup.string().email("Email não é valido").required("Campo obrigatório"),
  password: yup.string().min(6, "No minimo 6 caracteres").required("Campo obrigatório"),
}).required();

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useUser(); // Acessa a função loginUser do contexto

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // Função para tratar o envio do formulário
  const onSubmit = async (formData) => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: formData.email,
        senha: formData.password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.data.mensagem === "Login bem-sucedido") {
        const userData = { nome: response.data.usuario.username }; 
        loginUser(userData);
        localStorage.setItem('username', response.data.usuario.username);

        Swal.fire({
          title: 'Sucesso',
          text: 'Login efetuado com sucesso!',
          icon: 'success'
        });

        navigate('/home');
      } else {
        Swal.fire({
          title: 'Oops...',
          text: 'Email ou Senha invalido!',
          icon: 'error'
        });
      }
    } catch (error) {
      console.error(error.response?.data || "Erro inesperado");
      Swal.fire({
        title: 'Oops...',
        text: 'Email ou Senha invalido!',
        icon: 'error'
      });
    }
  };

  return (
    <Container>
      <Container_login>
        <Wrap_login>
          <Login_form onSubmit={handleSubmit(onSubmit)}>
            <Form_title>Bem Vindo !</Form_title>
            <Form_title>
              <img className="img" src={jsImage} alt="js Image" />
            </Form_title>

            {/* Campo de Input de Email com Controller */}
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  field={field}
                  type="email"
                  placeholder="Email"
                  errorMessage={fieldState.error?.message}
                />
              )}
            />

            {/* Campo de Input de Senha com Controller */}
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  field={field}
                  type="password"
                  placeholder="Senha"
                  errorMessage={fieldState.error?.message}
                />
              )}
            />

            {/* Botão de Login */}
            <Button type="submit" disabled={!isValid}>
              Login
            </Button>

            <Txt1>Não possui conta?</Txt1>
            <Txt2 onClick={() => navigate('/cadastro')}>Criar conta</Txt2> 
          </Login_form>
        </Wrap_login>
      </Container_login>
    </Container>
  );
};

export { Login };
