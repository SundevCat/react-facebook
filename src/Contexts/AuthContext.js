import { createContext, useContext, useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import Cookies from "universal-cookie";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const cookies = new Cookies()
    const [authUser, setAuthUser] = useState(cookies.get('_id'));
    const [isLoggedIn, setIsLoggedIn] = useState(cookies.get('isloggedin'));
    const [token, setToken] = useState(cookies.get('token'));
    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken
    }
    useEffect(() => {
        cookies.set('isloggedin', value.isLoggedIn, { path: '/' })
        cookies.set('_id', value.authUser, { path: '/' })
    }, [value.isLoggedIn])
    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider >
    )

}
