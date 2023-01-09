import { Route, Routes } from "react-router-dom";
import CadastroUser from "../Pages/CadastroPage";
import LoginPage from "../Pages/LoginPage/index"
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage"
import AuthContext from "../Context/auth";
import { useContext } from "react";



export function Router () {
    
    console.log(localStorage.getItem("@authenticated"))
    if (localStorage.getItem("@authenticated") === "true") {
    return ( 
   

    <Routes>
        <Route path= "/" element= {<LoginPage />} />
        <Route path= "cadastro" element= {<CadastroUser />} />
        <Route path= "/Home" element= {<Home />} />
        <Route path= "*" element= {<ErrorPage />} />
    </Routes>
    )
}

    return (
        <Routes>
            <Route path= "/" element= {<LoginPage />} />
            <Route path= "cadastro" element= {<CadastroUser />} />
            <Route path= "*" element= {<ErrorPage />} />
        </Routes>

    
)

}
