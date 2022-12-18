import React, { createContext, useState } from 'react'

export const StepContext = createContext()
export const ChangeTabContext = createContext()

export function SideBarControlContextProvider({ children }) {
  const [step, setStep] = useState('home')
  const handleChangeTab = (tab) => {
    setStep(tab)
  }
  return (
    <StepContext.Provider value={step}>
      <ChangeTabContext.Provider value={handleChangeTab}>
        {children}
      </ChangeTabContext.Provider>
    </StepContext.Provider>
  )
}
