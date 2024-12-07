const initialUsers = [
    { id: 1, name: "Admin", password: "admin123", type: "admin", permissions: ["solicitacao-material", "contrato"] },
    { id: 2, name: "User1", password: "user123", type: "normal", permissions: ["solicitacao-material"] },
  ];
  
  let users = [...initialUsers];
  
  const UserService = {
    getAllUsers: () => users,
    authenticate: (name, password) => users.find((u) => u.name === name && u.password === password),
    getEmptyUser: () => ({ id: null, name: "", password: "", type: "normal", permissions: [] }),
    addUser: (user) => {
      const newUser = { ...user, id: Date.now() };
      users.push(newUser);
      return users;
    },
    updateUser: (updatedUser) => {
      users = users.map((u) => (u.id === updatedUser.id ? updatedUser : u));
      return users;
    },
    deleteUser: (id) => {
      users = users.filter((u) => u.id !== id);
      return users;
    },
  };
  
  export default UserService;
  