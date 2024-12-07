import React from "react";
import "./styles/global.css";
import UserManager from "./components/UserManager/UserManager.jsx";
import DocumentManager from "./components/DocumentManager/DocumentManager.jsx";
import LoginManager from "./components/LoginManager/LoginManager.jsx";


function App() {
  const [loggedInUser, setLoggedInUser] = React.useState(null);

  return (
    <div className="app-container">
      {!loggedInUser ? (
        <LoginManager onLogin={setLoggedInUser} />
      ) : loggedInUser.type === "admin" ? (
        <UserManager user={loggedInUser} onLogout={() => setLoggedInUser(null)} />
      ) : (
        <DocumentManager user={loggedInUser} onLogout={() => setLoggedInUser(null)} />
      )}
    </div>
  );
}

export default App;