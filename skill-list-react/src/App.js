import { GlobalStyle } from "./styles/global";
import ReactModal from "react-modal";
import { Router } from "./Routes/routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Context/auth';
function App() {
  ReactModal.setAppElement('#root')
  
  return (
    <>
    <GlobalStyle />
    <BrowserRouter> 
    <AuthProvider> 
      <Router />
      </AuthProvider>
    </BrowserRouter>
    </>
    

  );
}

export default App;
