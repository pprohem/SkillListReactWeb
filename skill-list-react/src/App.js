import { GlobalStyle } from "./styles/global";
import { Router } from "./Routes/routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Context/auth';
function App() {
  
  
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
