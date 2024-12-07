import React, { useState } from "react";
import "./LoginManager.css";
import UserService from "../../services/UserService";

const LoginManager = ({ onLogin }) => {
  const [loginForm, setLoginForm] = useState({ name: "", password: "" });

  const handleLogin = () => {
    const user = UserService.authenticate(loginForm.name, loginForm.password);
    if (user) {
      onLogin(user);
    } else {
      alert("Credenciais inválidas! Tente novamente.");
    }
  };

  return (
    <div className="login-manager">
      <h2>Login</h2>
      <p>Digite suas credenciais para acessar o sistema:</p>
      <input
        type="text"
        placeholder="Nome de usuário"
        value={loginForm.name}
        onChange={(e) => setLoginForm({ ...loginForm, name: e.target.value })}
      />
      <input
        type="password"
        placeholder="Senha"
        value={loginForm.password}
        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginManager;