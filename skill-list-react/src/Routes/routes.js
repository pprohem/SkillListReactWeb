import { Route, Routes } from "react-router-dom";
import CadastroUser from "../Pages/CadastroPage";
import LoginPage from "../Pages/LoginPage/index"
import Home from "../Pages/Home";
import AuthContext from "../Context/auth";
import { useContext } from "react";



export function Router () {
    const { isAuthenticated } = useContext(AuthContext);
if (!isAuthenticated) {
    return ( 
    <Routes>
        <Route path= "/" element= {<LoginPage />} />
        <Route path= "cadastro" element= {<CadastroUser />} />
    </Routes>
    )
}

    return (
    
    <Routes>
        <Route path= "/" element= {<LoginPage />} />
        <Route path= "cadastro" element= {<CadastroUser />} />
        <Route path= "/Home" element= {<Home />} />
    </Routes>
)

}
