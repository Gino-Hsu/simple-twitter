import React, { createContext, useContext, useState } from 'react'

const ButtonControlContext = createContext()
const ButtonIsDisableContext = createContext()

export function ButtonControlProvider({children}) {
  const [isDisable, setIsDisable] = useState(false)

  const handleChangeDisable = (value) => {
    setIsDisable(value)
  }

  return(
    <ButtonIsDisableContext.Provider value={isDisable}>
      <ButtonControlContext.Provider value={handleChangeDisable}>
        {children}
      </ButtonControlContext.Provider>
    </ButtonIsDisableContext.Provider>
  )
}

export function useButtonControl() {
  return useContext(ButtonControlContext)
}

export function useButtonIsDisable() {
  return useContext(ButtonIsDisableContext)
}