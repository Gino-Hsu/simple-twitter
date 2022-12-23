import React, { createContext, useContext, useState } from 'react'
import userApi from '../../API/userApi'
import { Alert } from '../../utils/helpers'

const CurrwntContext = createContext()
const GetCurrentUserContext = createContext()

export function CurrentUserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState('')

  const getCurrentUser = (navigate) => {
    userApi
      .getCurrentUser()
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setCurrentUser(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        navigate('/login')
        console.error(error)
      })
  }

  return (
    <CurrwntContext.Provider value={currentUser}>
      <GetCurrentUserContext.Provider value={getCurrentUser}>
        {children}
      </GetCurrentUserContext.Provider>
    </CurrwntContext.Provider>
  )
}

export function useCurrentUser() {
  return useContext(CurrwntContext)
}

export function useGetCurrentUser() {
  return useContext(GetCurrentUserContext)
}