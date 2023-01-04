import react, {useState} from 'react';
import {Input, Button, Div, Container, DivForm, EyeButton } from './styled';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import userService from '../../Services/request/userService';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom';

export default function CadastroUser () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const navigate = useNavigate();
    
    const confirmTogglePassword = () => {
        setConfirmPasswordShown(!confirmPasswordShown);
        
      };
  
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
     
    };

    const handleSubmit = (event) => {
        debugger
        if ( password !== passwordConfirmation) {
            toast.error('📢 Senhas não conferem!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                return;
        } 
        event.preventDefault();
         
        const user = {
          login: username,
          password: password
        };
  
        userService.create(user).then((res) => {
            toast.success('👌👌 Cadastrado com sucesso!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        });
    };
  
 return (
    <Container>
        <DivForm>
            <h2>CADASTRO</h2>
            
            <Div>
                <h4>USUARIO</h4>
                <Input type="text" name="usuario" placeholder="Usuario" onChange={e => setUsername(e.target.value)}></Input>
            </Div>

            <Div>
                <h4>SENHA</h4>
                {passwordShown ?
                    <EyeButton onClick={togglePassword}> <BsEyeSlash size={20}  color={"white"}/>  </EyeButton>
                    :
                    <EyeButton onClick={togglePassword}> <BsEye size={20} color={"white"} />  </EyeButton> 
                }
                <Input type={passwordShown ? "text" : "password"} name="Password" placeholder="Senha" onChange={e => setPassword(e.target.value)}></Input>
            </Div>

            <Div>
                <h4>CONFIRME SUA SENHA</h4>
                {confirmPasswordShown ?
                    <EyeButton onClick={confirmTogglePassword}> <BsEyeSlash size={20}  color={"white"}/>  </EyeButton>
                    :
                    <EyeButton onClick={confirmTogglePassword}> <BsEye size={20} color={"white"} />  </EyeButton> 
               }
                 <Input type={confirmPasswordShown ? "text" : "password"} name="password"  placeholder="Confirmação da Senha" onChange={e => setPasswordConfirmation(e.target.value)}></Input>
            </Div>

            <Button onClick={handleSubmit}>
                 SALVAR
                <div className="arrow-wrapper">
                 
                    <div className="arrow"></div>

                </div>
            </Button>
            <ToastContainer />



        </DivForm>
    </Container>
   
 )

}