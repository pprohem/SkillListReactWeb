import styled from "styled-components";


export const Cabecalho = styled.header `
 width: 100vw;
 height: 10vh;
 background: black;
 padding: 15px;
 display: flex;
 justify-content: space-between;

 h2{
    color: #ff3700;
    
    }


`
export const Logo = styled.div `
 

`

export const DivButtons = styled.div`
 margin-right: 15px;
 width: 300px;
 display: flex;
 justify-content: space-around;
 align-items: center;
`


export const ButtonLogout = styled.button `
   background:#ff3700 ;
   color: #f7f7f7;
   width: 100px;
   height: 30px;
   border: none;
   border-radius: 15px;
   font-weight: bold;
   
 :hover{
   cursor: pointer;
   background-color: white;
   color: #ff3700;
   margin-bottom: 5px;
 }
`

export const ButtonAdd = styled.button `
   background:#ff3700 ;
   color: #f7f7f7;
   width: 180px;
   height: 30px;
   border: none;
   border-radius: 15px;
   font-weight: bold;
   
 :hover{
   cursor: pointer;
   background-color: white;
   color: #ff3700;
   margin-bottom: 5px;
 }
`
export const Form = styled.form`
color: #FFF;
display: flex;
flex-direction: column;
align-items: flex-start;

.select{
    width: 100%;
    margin-bottom: 45px;
    background: #1E232E;
  }
`
export const Input = styled.input `
    border: none;
    padding: 5px;
    background-color: #1E232E;
    font-size: small;
    font-weight: bold;
    margin-bottom: 20px;
    height: 36px;
    width: 100%;
    color: #f6f6f6;
    
   
   
   .input:focus {
    outline-color: white;
    place-content: "Enter your message!";
   }
   `

   export const Button = styled.button `
    --primary-color: #ff3700;
    --secondary-color: #fff;
    --hover-color:  #1E232E;
    --arrow-width: 15px;
    --arrow-stroke:2px;
    
    box-sizing: border-box;
    border: 0;
    color: var(--secondary-color);
    padding: 0.5em 1.2em;
    background: var(--primary-color);
    display: flex;
    transition: 0.2s background;
    align-items: center;
    gap: 0.6em;
    font-weight: bold;
    width: 100%;
    display: flex;
    justify-content: center;
  
  
  
  
  :hover {
    background-color: var(--hover-color);
    cursor: pointer;
  }
  
  :hover .arrow {
    background: var(--secondary-color);
  }
  
 

  `