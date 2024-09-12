import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  const loginUser = (userData) => {
    setUser(userData);
  };

  // Função para fazer logout
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('username'); // Remove o usuário do localStorage
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
