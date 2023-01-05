import styled from "styled-components";



export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background: #ADA996;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    align-items: center;
    display: flex;
    justify-content: center;

`

export const LoginContainer = styled.div `

    width: 20vw;
    height: 45vh;
    color: #ff3700;
    flex-direction: column;
    align-items: center;
    display: flex;
    background: black;
    border-radius: 5px;

    h1{
      font-size: 28px;
      margin-right: 150px;
      margin-top: 15px;
      color: #f6f6f6;
      font-family: 'Roboto Flex', sans-serif;
    }

    @media screen and (max-width: 768px){
        width: 60vw
    
    }
`

export const Input = styled.input `
    border: none;
    padding: 5px;
    background-color: #1E232E;
    font-size: small;
    font-weight: bold;
    margin-top: 20px;
    height: 36px;
    width: 80%;
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
    margin: 15px;
    width: 80%;
    display: flex;
    justify-content: center;
  
  
  .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    background: var(--primary-color);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
  }
  
  .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
  }
  
  :hover {
    background-color: var(--hover-color);
    cursor: pointer;
  }
  
  :hover .arrow {
    background: var(--secondary-color);
  }
  
  :hover .arrow:before {
    right: 0;
  }
  `

export const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "#ff3700"
};


export const DivSelect = styled.div `
display: flex;
flex-direction: row;
margin-top: 10px;

label{
  margin-left: 10px;
}
`
export const EyeButton = styled.button `


background-color: black;
height: 40px;
margin-top: 19px;

:hover {
    cursor: pointer;
}
`


export const DivPass = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;


    input{
      margin-left: 32px
    }

`