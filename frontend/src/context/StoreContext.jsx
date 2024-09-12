/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

const StoreContext = createContext();

export const StoreContextProvider = ({children}) => {

    const url = import.meta.env.VITE_API_URL;

    return (
        <StoreContext.Provider value={{url}}>
            {children}
        </StoreContext.Provider>
    );
};

export const useContextProvider = () => useContext(StoreContext)