import React from "react";
import "./index.css";
import UserManager from "./components/UserManager/UserManager.jsx";
import DocumentManager from "./components/DocumentManager/DocumentManager.jsx";
import LoginManager from "./components/LoginManager/LoginManager.jsx";

function App() {
  const [loggedInUser, setLoggedInUser] = React.useState(null);

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="app-container">
      <div className="main-content">
        {!loggedInUser ? (
          <LoginManager onLogin={setLoggedInUser} />
        ) : (
          <>
            <div className="nav-bar">
              <h1 className="nav-title">Gerador de Documentos</h1>
              <p className="nav-subtitle">
                Bem-vindo, {loggedInUser.name} ({loggedInUser.type})
              </p>
            </div>
            
            <div className="fade-in">
              {loggedInUser.type === "admin" ? (
                <UserManager user={loggedInUser} onLogout={handleLogout} />
              ) : (
                <DocumentManager user={loggedInUser} onLogout={handleLogout} />
              )}
            </div>
            
            <div className="footer">
              <p>Sistema de Geração de Documentos v2.0</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;