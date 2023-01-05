import React, {useState, useContext} from 'react';
import {DivSelect, Input, Button, Container, LoginContainer, linkStyle, EyeButton, DivPass } from './styled';
import {Link} from "react-router-dom"
import AuthContext from '../../Context/auth';
import "react-toastify/dist/ReactToastify.css"
import { BsEye, BsEyeSlash } from 'react-icons/bs';



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
            <DivPass>
              <Input type={passwordShown ? "text" : "password"} value ={password}name="text" class="input" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                {passwordShown ?
                    <EyeButton onClick={togglePassword}> <BsEyeSlash size={20}  color={"white"}/>  </EyeButton>
                    :
                    <EyeButton onClick={togglePassword}> <BsEye size={20} color={"white"} />  </EyeButton> 
                }

            </DivPass>
           
              <DivSelect>

                <input id='inputcheck'
                  type="checkbox"
                  name="lsRememberMe"

                />
                 <label>LEMBRE-ME</label>

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
           
        </Container>

        
    )
} 