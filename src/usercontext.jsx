import React, { createContext, useState } from 'react';

// Creamos un contexto para almacenar los datos del usuario
const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Definimos el estado para almacenar los datos del usuario
  const [userData, setUserData] = useState({
    userId: 0,
    userName: 'void'
  });

  

  // Función para actualizar los datos del usuario
  const updateUser = (userId, userName) => {
    setUserData({
      userId,
      userName
    });
    console.log('se modifico');
  };

  // Pasamos el estado y la función de actualización a través del contexto
  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};


export { UserContext, UserProvider };