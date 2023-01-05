import React from "react"
import { Rodape, Icons} from "./styled"
import {FiGithub, FiInstagram, FiLinkedin} from "react-icons/fi"
export default function Footer () {
    return(
        <Rodape>
            <h2>_________________________________</h2>
            <Icons>
                <a href="https://github.com/pprohem"> <FiGithub size={25} color={"#ff3700"}/> </a> 
                <a href="http://linkedin.com/in/pprohem"> <FiLinkedin size={25} color={"#ff3700"}/> </a> 
                <a href="http://instagram.com/pprohem"> <FiInstagram size={25} color={"#ff3700"}/> </a> 
            </Icons>
            <h2>_________________________________</h2>
           
        </Rodape>
        
    )
}

