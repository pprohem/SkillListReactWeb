import React, { createContext, useEffect, useState } from "react";
import userService from "../Services/request/userService";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

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
            
            if(username !== "" && password !== "") {
                if (user.login === username && user.password === password) {
                    localStorage.setItem("@authenticated", true);
                    localStorage.setItem("@id", user.id);
                    localStorage.setItem("@user", user.login);
                    localStorage.setItem("@password", user.password);
                    localStorage.setItem("@checked", isChecked)
                    setIsAuthenticated(true); 
                    setUsername(user.login);
                    navigate("/home")
            }
            
           
            }
        })
     }

     const signOut = () => {
        setIsAuthenticated(false);
        setUserId(""); 
        localStorage.removeItem("id");
        localStorage.removeItem("@authenticated");
        localStorage.removeItem("@id");
     

        navigate("/")
    }
          
    return (
        <> 
         <AuthContext.Provider
            value={{
                isAuthenticated,
                signIn,
                signOut,
                userId,
                username,
                password
            }}
        >
            {children}
        </AuthContext.Provider>
         <ToastContainer />
        </>

    );
};
export default AuthContext;