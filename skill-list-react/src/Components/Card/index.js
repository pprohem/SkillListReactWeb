import {useState, useEffect } from "react";
import { Card,Logo } from "./styled"
import skillsService  from "../../Services/request/skillsService"
import userSkillsService from "../../Services/request/userSkillsService"
import { TbTrashX} from 'react-icons/tb';

export default function CardSkills () {
const [skills, setSkills] = useState ([])
const [userSkills, setUserSkills] = useState([])

function refreshPage() {
    window.location.reload(false);
  }


useEffect (() => {
    skillsService
    .getAll()
    .then((todas) => {
         userSkillsService
         .getAll()
           .then((user) => {
              let idDinamico = parseInt(localStorage.getItem("@id"))
              let skillFiltrado = user.data.filter((e) => {
                  return e.user === idDinamico
                  
                
              })  
               let skillTemp = skillFiltrado.map((e) => {
                  return todas.data.find((f) =>{
                    return f.id === e.skill
                })
                })
                
                 console.log(user)
                setSkills(skillTemp)
                setUserSkills(user.data)
            })
      let getSkill = todas.data 
    
        setSkills(getSkill)
    })
    .catch((err) => {
        console.error("ops! ocorreu um erro" + err);

    })
}, []);



//Delete Skill
function handleDeleteSkill(id) {
 var userSkillTemp = ( userSkills.find((e) => {
  
  return e.skill === id && e.user === parseInt(localStorage.getItem('@id'))
})  )
  userSkillsService
      .remove(userSkillTemp.id)
      .then((response) => {
        refreshPage();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  

return(
    <>
       {skills.length === 0 ? (
          <p></p>
        ) : (
      
          
          skills.map((skill) => (

    
    <Card >
        
        <Logo src={skill.imageUrl} alt="Imagem com logo da skill"/>
        <h2> </h2>
        <h2>{skill.name}</h2>
        <h4>{skill.version}</h4>
        <h4>{skill.description}</h4>
        <button onClick={() => handleDeleteSkill(skill.id)}> <TbTrashX  size={30} color={"#ff3700"}/> </button>
    </Card>
    ))
    )}
    </>
)

}