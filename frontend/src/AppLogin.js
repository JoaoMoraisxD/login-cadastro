import { useState } from "react";

import jsIMG from "./assets/js.png";

import "./styles.css";

function AppLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Bem Vindo!</span>

            <span className="login-form-title">
              <img src={jsIMG} alt="js image" />
            </span>

            <div className="wrap-input">
              <input 
              className={email !== "" ? "has-val input" : "input"} 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-plaeceholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
              className={password !== "" ? "has-val input" : "input"} 
              type="Password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-plaeceholder="Password"></span>
            </div>

            <div className="container-btn">
              <button className="form-btn">Login</button>
            </div>
    
            <div className="text-center">
              <span className="txt1">Não possui conta?</span>

              <a className="txt2" href="">Criar conta.</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AppLogin;
