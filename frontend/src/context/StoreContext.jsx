/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {

    const url = import.meta.env.VITE_API_URL;
    const [token, setToken] = useState(null);

    return (
        <StoreContext.Provider value={{ url, token, setToken }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useContextProvider = () => useContext(StoreContext)