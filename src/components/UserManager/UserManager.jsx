import React, { useState } from "react";
import "./UserManager.css";
import UserService from "../../services/UserService";

const UserManager = ({ user, onLogout }) => {
  const [users, setUsers] = useState(UserService.getAllUsers());
  const [userForm, setUserForm] = useState(UserService.getEmptyUser());
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveUser = () => {
    const updatedUsers = isEditing
      ? UserService.updateUser(userForm)
      : UserService.addUser(userForm);
    setUsers(updatedUsers);
    setUserForm(UserService.getEmptyUser());
    setIsEditing(false);
  };

  const handleEditUser = (user) => {
    setUserForm(user);
    setIsEditing(true);
  };

  const handleDeleteUser = (id) => setUsers(UserService.deleteUser(id));

  const handlePermissionChange = (permission) => {
    const updatedPermissions = userForm.permissions.includes(permission)
      ? userForm.permissions.filter((p) => p !== permission) // Remove permissão se já existe
      : [...userForm.permissions, permission]; // Adiciona permissão se não existe
    setUserForm({ ...userForm, permissions: updatedPermissions });
  };

  return (
    <div className="user-manager">
      <h2>Bem-vindo, {user.name} (Admin)</h2>
      <button onClick={onLogout}>Logout</button>

      <h3>Gerenciamento de Usuários</h3>
      <div className="user-form">
        <input
          type="text"
          placeholder="Nome"
          value={userForm.name}
          onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
        />
        <input
          type="password"
          placeholder="Senha"
          value={userForm.password}
          onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
        />
        <select
          value={userForm.type}
          onChange={(e) => setUserForm({ ...userForm, type: e.target.value })}
        >
          <option value="normal">Normal</option>
          <option value="admin">Admin</option>
        </select>
        <div className="permissions">
          <label>
            <input
              type="checkbox"
              checked={userForm.permissions.includes("solicitacao-material")}
              onChange={() => handlePermissionChange("solicitacao-material")}
            />
            Solicitação de Material
          </label>
          <label>
            <input
              type="checkbox"
              checked={userForm.permissions.includes("contrato")}
              onChange={() => handlePermissionChange("contrato")}
            />
            Contrato
          </label>
        </div>
        <button onClick={handleSaveUser}>
          {isEditing ? "Salvar Alterações" : "Adicionar Usuário"}
        </button>
      </div>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} ({u.type}) - Permissões: {u.permissions.join(", ")}
            <button onClick={() => handleEditUser(u)}>Editar</button>
            <button onClick={() => handleDeleteUser(u.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManager;
