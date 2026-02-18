import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import {getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  // localStorage.clear();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const employees = getLocalStorage();
    const data = employees.employees;
    setUserData(data) 
  },[])
  return (
      <AuthContext.Provider value={[userData,setUserData]}>
        {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider
