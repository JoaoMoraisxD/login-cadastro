import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import { Login } from "./components/login";
import { Home } from "./components/home";
import { Cadastro } from "./components/cadastro";
import styles from "./styles.css";
import { Chat } from "./components/chatScreen";


function App() {

  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  </>);
}

export default App;
