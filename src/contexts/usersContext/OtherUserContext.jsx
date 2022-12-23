import React, { createContext, useContext, useState } from 'react'
import userApi from '../../API/userApi'
import { Alert } from '../../utils/helpers'

const OtherUserContext = createContext()
const GetOtherUserContext = createContext()

export function OtherUserProvider({ children }) {
  const [otherUser, setOtherUser] = useState('')

  const handleConfirmUser = (user_id, navigate) => {
    userApi
      .getOtherUser(user_id)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setOtherUser(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        console.error(error)
        navigate('/login')
      })
  }

  return (
    <OtherUserContext.Provider value={otherUser}>
      <GetOtherUserContext.Provider value={handleConfirmUser}>
        {children}
      </GetOtherUserContext.Provider>
    </OtherUserContext.Provider>
  )
}

export function useOtherUserContext() {
  return useContext(OtherUserContext)
}

export function useGetOtherUserContext() {
  return useContext(GetOtherUserContext)
}
