import {createContext, useContext, useState} from 'react'

const ThemeContext = createContext()
export function ThemeContextProvider({children}){
  const [theme, setTheme] = useState("light");

  const defaultContext = {
    theme,
    setTheme,
  }

 return (
    <ThemeContext.Provider value={defaultContext}>
      {children}
    </ThemeContext.Provider>
  )
 }

export function ThemeAdd() {
  return useContext(ThemeContext)
}
