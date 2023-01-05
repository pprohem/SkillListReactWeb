import React from "react"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import { Container, ContainerSkills, Title, DivTitle} from "./styled"
import CardSkills from "../../Components/Card"

export default function Home () {

    return (
        <> 
        <Header />
            <Container>
                <DivTitle>
                    <Title> SKILLS DO USUARIO</Title>
                </DivTitle>
                
                <ContainerSkills>
                    <CardSkills />
                </ContainerSkills>
                
        <Footer />
            </Container>
           
       
        </>
    )
}