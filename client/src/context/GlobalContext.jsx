import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    isAuthenticated: false,
  })

  const login = (userData) => {
    setState({ ...state, user: userData, isAuthenticated: true })
  }

  const logout = () => {
    setState({ ...state, user: null, isAuthenticated: false })
  }

  return (
    <GlobalContext.Provider value={{ state, login, logout }}>
      {children}
    </GlobalContext.Provider>
  )
}