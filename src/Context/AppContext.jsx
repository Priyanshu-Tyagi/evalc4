import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

function AppContextProvider({children}){
    const [isAuth,setIsAuth] = useState(false);
    const [email , setEmail] = useState("");
    const [token , setToken] = useState(null);
    const toggle = ()=>{
        setIsAuth(!isAuth);
    }
    const LoginUser=(email,token) => {
        setEmail(email);
        setToken(token);
        setIsAuth(true);
    }
    const LogoutUser= () => {
        setEmail("");
        setToken(null);
        setIsAuth(false);
    }

    return (
        <AuthContext.Provider value={{isAuth,toggle,email,token,LoginUser,LogoutUser}}>{children}</AuthContext.Provider>
    )
}

export default AppContextProvider;