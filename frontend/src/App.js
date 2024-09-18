import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import { Login } from "./components/login";
import { Home } from "./components/home";
import { Cadastro } from "./components/cadastro";
import { Produdos } from "./components/produtoScreen";
import styles from "./styles.css";
import { Chat } from "./components/chatScreen";
import { UserProvider } from './components/contexts/userContext';


function App() {

  return (<>
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/produtos" element={<Produdos />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  </UserProvider>
  </>);
}

export default App;
