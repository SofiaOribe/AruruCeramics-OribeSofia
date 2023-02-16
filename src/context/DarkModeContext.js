import { useContext, createContext, useState } from "react";

const DarkModeContext = createContext();

export const useDarkModeContext = () => useContext(DarkModeContext)

export const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false);   

    const toogleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <DarkModeContext.Provider value={{darkMode, toogleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}
