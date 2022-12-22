import React, { createContext, useContext, useState } from 'react'

const RerenderContext = createContext()
const HandleRerenderContext = createContext()

export function RenderContextProvider({ children }) {
  const [isRender, setIsrender] = useState('')

  const handleRerender = (value) => {
    setIsrender(value)
  }

  return (
    <RerenderContext.Provider value={isRender}>
      <HandleRerenderContext.Provider value={handleRerender}>
        {children}
      </HandleRerenderContext.Provider>
    </RerenderContext.Provider>
  )
}

export function useRerender() {
  return useContext(RerenderContext)
}

export function useHandleRerender() {
  return useContext(HandleRerenderContext)
}
