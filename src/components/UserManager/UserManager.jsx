import React, { useState } from "react";
import "./UserManager.css";
import UserService from "../../services/UserService";

const UserManager = ({ user, onLogout }) => {
  const [users, setUsers] = useState(UserService.getAllUsers());
  const [userForm, setUserForm] = useState(UserService.getEmptyUser());
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const handleSaveUser = () => {
    if (!userForm.name || !userForm.password) {
      setMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const updatedUsers = isEditing
      ? UserService.updateUser(userForm)
      : UserService.addUser(userForm);
    setUsers(updatedUsers);
    setUserForm(UserService.getEmptyUser());
    setIsEditing(false);
    setMessage(isEditing ? "Usuário atualizado com sucesso!" : "Usuário adicionado com sucesso!");
    
    setTimeout(() => setMessage(""), 3000);
  };

  const handleEditUser = (user) => {
    setUserForm(user);
    setIsEditing(true);
    setMessage("");
  };

  const handleDeleteUser = (id) => {
    setUsers(UserService.deleteUser(id));
    setMessage("Usuário excluído com sucesso!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleCancelEdit = () => {
    setUserForm(UserService.getEmptyUser());
    setIsEditing(false);
    setMessage("");
  };

  const handlePermissionChange = (permission) => {
    const updatedPermissions = userForm.permissions.includes(permission)
      ? userForm.permissions.filter((p) => p !== permission)
      : [...userForm.permissions, permission];
    setUserForm({ ...userForm, permissions: updatedPermissions });
  };

  return (
    <div className="user-manager">
      <div className="card">
        <div className="card-header">
          <h2 className="text-blue">Bem-vindo, {user.name} (Admin)</h2>
          <button className="btn btn-secondary" onClick={onLogout}>
            Sair do Sistema
          </button>
        </div>
      </div>

      {message && (
        <div className={`alert ${message.includes('sucesso') ? 'alert-success' : 'alert-error'}`}>
          {message}
        </div>
      )}

      <div className="user-form">
        <h3 className="text-blue">Gerenciamento de Usuários</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Nome *</label>
            <input
              type="text"
              className="form-input"
              placeholder="Digite o nome do usuário"
              value={userForm.name}
              onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Senha *</label>
            <input
              type="password"
              className="form-input"
              placeholder="Digite a senha"
              value={userForm.password}
              onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Tipo de Usuário</label>
          <select
            className="form-select"
            value={userForm.type}
            onChange={(e) => setUserForm({ ...userForm, type: e.target.value })}
          >
            <option value="normal">Usuário Normal</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Permissões</label>
          <div className="permissions">
            <label className="permission-item">
              <input
                type="checkbox"
                checked={userForm.permissions.includes("solicitacao-material")}
                onChange={() => handlePermissionChange("solicitacao-material")}
              />
              <span>Solicitação de Material</span>
            </label>
            <label className="permission-item">
              <input
                type="checkbox"
                checked={userForm.permissions.includes("contrato")}
                onChange={() => handlePermissionChange("contrato")}
              />
              <span>Contrato</span>
            </label>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary" onClick={handleSaveUser}>
            {isEditing ? "Salvar Alterações" : "Adicionar Usuário"}
          </button>
          {isEditing && (
            <button className="btn btn-secondary" onClick={handleCancelEdit}>
              Cancelar
            </button>
          )}
        </div>
      </div>

      <div className="user-list">
        <h3 className="text-blue">Lista de Usuários</h3>
        <ul className="list">
          {users.map((u) => (
            <li key={u.id} className="list-item">
              <div className="user-info">
                <div className="user-name">{u.name}</div>
                <div className="user-email">Tipo: {u.type} | Permissões: {u.permissions.join(", ") || "Nenhuma"}</div>
              </div>
              <div className="user-actions">
                <button 
                  className="btn btn-primary btn-sm" 
                  onClick={() => handleEditUser(u)}
                >
                  Editar
                </button>
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={() => handleDeleteUser(u.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserManager;
