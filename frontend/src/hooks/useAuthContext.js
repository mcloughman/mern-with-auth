import { AuthContext } from "../context/PostContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext) // 

    if (!context) {
        throw Error('Use AuthContext must be used inside AuthContextProvider')
    }

    return context
}