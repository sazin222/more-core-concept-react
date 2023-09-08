import { useState } from "react"

export default function Team (){
    const [team, setTeam]= useState(11)

     const handelAdd = ()=>{
        const newTeam = team + 1
        setTeam(newTeam)
     } 

     const handelRemove =()=>{
        setTeam(team- 1)
     }
    // javascripy object diea o style add kora jai
    const teamStyle ={
        border: '2px solid blue',
        margin: '10px',
        padding: '10px'
    }
    return(
        <div style={teamStyle}> 
            <h3>player : {team}</h3>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelRemove}>Remove</button>
        </div>
    )
}