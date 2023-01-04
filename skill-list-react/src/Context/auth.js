import React, { createContext, useEffect, useState } from "react";
import userService from "../Services/request/userService";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [users, setUsers] = useState([]);


    useEffect(() => {
    userService.getAll().then(users => {
     setUsers(users);
    })
}, [])   

    function signIn(username, password, isChecked) {
        users?.data.find(user => {
            if (user.login === username && user.password === password) {
                localStorage.setItem("@authenticated", true);
                localStorage.setItem("@id", user.id);
                localStorage.setItem("@user", user.login);
                localStorage.setItem("@password", user.password);
                localStorage.setItem("@checked", isChecked)
                setIsAuthenticated(true); 
                setUsername(user.login);
                navigate("/cadastro")
            }
        })
     }
          
    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                signIn,
                userId,
                username,
                password
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;