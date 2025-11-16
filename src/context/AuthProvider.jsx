import React , { createContext, useState, useEffect, useContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

const [userData, setUserData] = useState(null);
useEffect(() => {
  // Initialize local storage with default data if not already present
  setLocalStorage();
  const {employees,admin}= getLocalStorage();
  setUserData({employees,admin});
}, []);

// console.log("Auth context userData:",userData); 

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
      </div>
  )
}

export default AuthProvider
