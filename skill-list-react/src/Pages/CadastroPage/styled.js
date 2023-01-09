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


export const DivForm = styled.div `
 
    width: 35vw;
    height: 80vh;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 768px){
        width: 90vw
    
    }

`

export const Input = styled.input `
    border: none;
    padding: 5px;
    background-color: #1E232E;
    font-size: small;
    font-weight: bold;
    margin-top: 10px;
    height: 36px;
    width: 80%;
    color: #ff3700;
   
   
   .input:focus {
    outline-color: white;
    place-content: "Enter your message!";
   }
   `

export const Div = styled.div `
display: flex;
margin: 25px;
width: 100%;
color: white;
flex-direction: column;
margin-left: 150px;

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
    margin-left: 25px;
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


export const EyeButton = styled.button `

width: 25px;
background-color: black;

:hover {
    cursor: pointer;
}
`