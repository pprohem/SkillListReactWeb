import React, {useState, useContext} from 'react';
import {DivSelect, Input, Button, Container, LoginContainer, linkStyle } from './styled';
import { ToastContainer, toast } from 'react-toastify';
import {Link} from "react-router-dom"
import AuthContext from '../../Context/auth';
import "react-toastify/dist/ReactToastify.css"


export default function LoginPage() {
  const { signIn } = useContext(AuthContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  
  function handleSignIn(e) {
    e.preventDefault()
    signIn(username, password, document.getElementById('inputcheck').checked)
   
}

React.useEffect(() => {
  if (localStorage.getItem("@checked") === "true" ){
    setUsername (localStorage.getItem("@user"));
    setPassword (localStorage.getItem("@password"));
    document.getElementById("inputcheck").checked = true;
 }
}, [])

    return (
        <Container>
            <LoginContainer>

            <h1> LOGIN</h1>
            <Input type="text" name="text" value = {username}class="input" placeholder='username'  onChange={e => setUsername(e.target.value)}/>
            <Input type={passwordShown ? "text" : "password"} value ={password}name="text" class="input" placeholder="password" onChange={e => setPassword(e.target.value)}/>
            {/* <button onClick={togglePassword}>Show Password</button> */}

              <DivSelect>

                <input id='inputcheck'
                  type="checkbox"
                  name="lsRememberMe"

                />
                 <label>Remember me</label>

              </DivSelect>
            <Button onClick={handleSignIn}>
                 SIGN IN
                <div class="arrow-wrapper">
                 
                    <div class="arrow"></div>

                </div>
            </Button>
            <Link to= "/cadastro" style={linkStyle}>
              <h4>Não possui cadastro? Cadastre-se!</h4>
            </Link>
            
            </LoginContainer>
            <ToastContainer />
        </Container>

        
    )
} 