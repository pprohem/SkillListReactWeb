import React, { createContext, useEffect, useState } from "react";
import userService from "../Services/request/userService";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    

    useEffect(() => {
    userService.getAll().then(users => {
     setUsers(users);
    })
}, [])   

    function signIn(username, password, isChecked) {
        users?.data.find(user => {
            
            if(username !== "" && password !== "") {
                if (user.login === username && user.password === password) {
                    localStorage.setItem("@id", user.id);
                    localStorage.setItem("@user", user.login);
                    localStorage.setItem("@password", user.password);
                    localStorage.setItem("@checked", isChecked)
                     
                    localStorage.setItem("@authenticated",true)
                    setUsername(user.login);
                    window.location.reload()
                    navigate("/home")
            } else {
                setMessage("Login ou senha incorretos!")
            }
            
           
            } else{
                setMessage("Os campos não podem ser nulos")
            }
        })
     }

     const signOut = () => {
        setUserId(""); 
        localStorage.setItem("@authenticated", false)
        localStorage.removeItem("id");
        localStorage.removeItem("@id");
        
        
     

        navigate("/")
    }

   
          
    return (
        <> 
         <AuthContext.Provider
            value={{
                signIn,
                signOut,
                userId,
                username,
                password,
                message
            }}
        >
            {children}
        </AuthContext.Provider>
         <ToastContainer />
        </>

    );
};
export default AuthContext;