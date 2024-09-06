import React from "react";
import { Container, Container_cadastro, Wrap_cadastro, Cadastro_form, Form_title, Txt1, Txt2 } from "./styles";
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

const schema = yup.object({
  email: yup.string().email("Email não é valido").required("Campo obrigatório"),
  password: yup.string().min(6, "No minimo 6 caracteres").required("Campo obrigatório"),
  numero: yup.string().min(11, "No minimo 11 caracteres").required("Campo obrigatório"),
}).required();

const Cadastro = () => {
    const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post("http://localhost:3000/cadastro", {
        username: formData.username,
        email: formData.email,
        senha: formData.password,
        nomeCompleto: formData.nomeCompleto,
        numero: formData.numero,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log(response.data.mensagem);
      if (response.data.mensagem == "Dados enviados com sucesso"){
        Swal.fire({
          title: 'Sucesso',
          text: 'Usuário criado com sucesso!',
          icon: 'success'
      });
        navigate('/');
      }else{
        alert("Erro inesperado")
      }
    } catch (error) {
      console.error(error.response?.data || "Erro inesperado"); 
      Swal.fire({
        title: 'Oops...',
        text: 'Erro inesperado',
        icon: 'error'
    });
    }
  };

  return (
    <Container>
      <Container_cadastro>
        <Wrap_cadastro>
          <Cadastro_form onSubmit={handleSubmit(onSubmit)}>
            <Form_title>Junte-se a nós !</Form_title>
            <Form_title>
                <img className="img" src={jsImage} alt="js Image" />
            </Form_title>
            {/* Campo de Input de Email com Controller */}

            <Controller
              name="username"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  field={field} 
                  placeholder="Username"
                  errorMessage={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  field={field} 
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

            <Controller
              name="nomeCompleto"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  field={field} 
                  placeholder="Nome Completo"
                  errorMessage={fieldState.error?.message} 
                />
              )}
            />

            <Controller
              name="numero"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  field={field} 
                  placeholder="Numero de Telefone"
                  errorMessage={fieldState.error?.message} 
                />
              )}
            />

            {/* Botão de Login */}
            <Button type="submit" disabled={!isValid}>
              Cadastrar
            </Button>

            <Txt1>Já possui conta?</Txt1>
            <Txt2 onClick={() => navigate('/')}>Criar conta</Txt2>
          </Cadastro_form>
        </Wrap_cadastro>
      </Container_cadastro>
    </Container>
  );
};

export { Cadastro };
