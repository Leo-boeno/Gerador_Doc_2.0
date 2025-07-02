import React, { useState } from "react";
import "./LoginManager.css";
import UserService from "../../services/UserService";

const LoginManager = ({ onLogin }) => {
  const [loginForm, setLoginForm] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");
    const user = UserService.authenticate(loginForm.name, loginForm.password);
    if (user) {
      onLogin(user);
    } else {
      setError("Credenciais inválidas! Tente novamente.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="login-manager">
      <div className="card hover-lift">
        <h2 className="text-blue">Login</h2>
        <p>Digite suas credenciais para acessar o sistema:</p>
        
        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}
        
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label className="form-label">Nome de usuário</label>
            <input
              type="text"
              className="form-input"
              placeholder="Digite seu nome de usuário"
              value={loginForm.name}
              onChange={(e) => setLoginForm({ ...loginForm, name: e.target.value })}
              onKeyPress={handleKeyPress}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Senha</label>
            <input
              type="password"
              className="form-input"
              placeholder="Digite sua senha"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              onKeyPress={handleKeyPress}
            />
          </div>
          
          <button 
            type="button" 
            className="btn btn-primary btn-lg"
            onClick={handleLogin}
          >
            Entrar no Sistema
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginManager;