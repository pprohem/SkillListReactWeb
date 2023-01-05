import React from "react"
import { useContext, useState, useEffect } from "react";
import { Cabecalho, Logo, DivButtons, ButtonLogout, ButtonAdd, Input, Form, Button} from "./styled"
import Modal from "react-modal";
import {GiSkills} from "react-icons/gi"
import AuthContext from '../../Context/auth';
import skillsService from "../../Services/request/skillsService";
import userSkillsService from "../../Services/request/userSkillsService";
import Select from 'react-select'

export default function Header () {
    Modal.setAppElement('#root')
    
    const { signOut} = useContext(AuthContext);
    const [modalIsOpen, setIsOpen] = useState (false)
    const [level, setLevel] = useState()
    const [skillSelecionada, setSkillSelecionada] = useState()
    const [skills, setSkills] = useState([])
    

    const options = [
      { value: skills.id, label: skills.name },
      
    ]
    
    let subtitle;
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: "500px",
          height: "400px",
          background: "#000",
          borderRadius: "15px" /* fallback for old browsers */
       
        },
      };
     function openModal ( ) {
        setIsOpen(true);
     }

     function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#ff3700';
      }
     function closeModal ( ) {
        setIsOpen(false);
     }
     
     function handleDate (number) {
       if ( number < 10 ) {
         return "0" + number; 
       }
       return number; 
     }


     const handleSubmit = (event) => {
        event.preventDefault();
        var data = new Date()
        var dataFormatada = `${data.getFullYear()}-${handleDate(data.getMonth()+1)}-${handleDate(data.getDate())}`
        
        const skillPost = {
          knowledgeLevel: level,
          skill: skillSelecionada,
          user : parseInt(localStorage.getItem('@id')),
          createdAt: dataFormatada,
          updatedAt: dataFormatada
        };
  
        userSkillsService.create(skillPost).then((res) => {
            console.log(res.data);
            console.log (Date.now())
            closeModal()
        });
    };
    

    useEffect (() => {
      skillsService
      .getAll()
      .then((res) => {
        var skillsOptions = res.data.map(data => ({
          value: data.id, label: data.name
        })); 
        setSkills(skillsOptions);
        
      })
      .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
  
      })
  }, []);



    
     return(
        <Cabecalho>
            <Logo>
                <GiSkills size={35} color={"white"} />
                <h2>SKILLS</h2>
            </Logo>

            <DivButtons>
                <ButtonAdd onClick={openModal}>NOVA SKILL</ButtonAdd>
                <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Cadastre uma nova Skill!</h1>
        
        <Form>
          <h2>Level</h2>
          <Input 
          type="number"
          onChange={e => setLevel(e.target.value)}/>
          


          <Select  
          options={skills}
          onChange={e => setSkillSelecionada(e.value)}
          className= "select"
          />
          <Button onClick={handleSubmit}>Salvar</Button>

        </Form>
      </Modal>
                <ButtonLogout onClick={signOut}>LOGOUT</ButtonLogout>
            </DivButtons>

        </Cabecalho>
        
    )
}

