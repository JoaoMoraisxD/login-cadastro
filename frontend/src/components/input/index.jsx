import React from "react";
import { Wrap_input, Input_, Focus_input, ErrorText } from "./styles";

// Componente de Input que recebe props do Controller
const Input = ({ type, field, placeholder, errorMessage }) => {
  return (
    <>
      <Wrap_input>
        <Input_
          className={field.value ? "has-val" : ""}
          type={type} // tipo do input, como "email" ou "password"
          value={field.value} // valor controlado pelo Controller
          onChange={field.onChange} // função onChange controlada
          onBlur={field.onBlur} // onBlur para a validação ser acionada ao sair do campo
        />
        <Focus_input data-placeholder={placeholder}></Focus_input>
      </Wrap_input>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>} {/* Exibe a mensagem de erro */}
    </>
  );
};

export { Input };
