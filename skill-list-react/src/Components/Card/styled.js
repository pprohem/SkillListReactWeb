import styled from "styled-components";

export const Card = styled.div `
    width: 190px;
    height: 254px;
    background: rgb(40,40,55);
    background: linear-gradient(344deg, rgba(40,40,55,1) 0%, rgba(16,16,18,1) 50%);
    box-shadow: 4px 6px 14px #00000036;
    border-radius: 3px;
    color: #F9F9F9;
    padding: 16px;
    transition: all .3s;
    margin: 25px;
    flex-wrap: wrap;
    
    button{
        background: none;
        border: none;

        :hover {
            cursor: pointer;
            margin-top: 5px;
        }
    }
   
   
   :hover {
    margin-top: -30px;
   }
   `


export const Logo = styled.img `

 border-radius: 5%;
 width: 100px;
 height: 100px;
 display: flex;
 margin-left: 30px;
`