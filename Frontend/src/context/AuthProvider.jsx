import { createContext, useContext, useState } from "react";
// we made this Context so that we can access User globally 
export const AuthContext = createContext()
export default function AuthProvider({children}) { 
    // childrem is like app component, nav compoenent, etc
 // now we bring user from localStorage

const initialAuthUser = localStorage.getItem("Users");
const [authUser,setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
)
return(
    <AuthContext.Provider value={[ authUser,setAuthUser ]}>
        {children}
    </AuthContext.Provider>
)

}

//custom hook , will use to use {authUser,setAuthUser}
export const useAuth=()=> useContext(AuthContext)