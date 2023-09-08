import { useState } from "react"

export default function Counter(){
    // count ta useState er initial value ar setCount ekta fuction ja useState returen kora : judi khn o inicial value change korte hoi 
    const [count , setCount]= useState(0) 
    const handelAdd= ()=>{
        // useState er initial value change hocca.
      const newCount = count +1 
      setCount(newCount)
    } 

    const handelReduce =()=>{
        const newCount = count - 1 
        setCount(newCount)

    }
    return(
        <div style={{border: '2px solid red'}}> 
            <h3>counter: {count}</h3> 
            <button onClick={handelAdd}>Add</button> 
            <button onClick={handelReduce}>reduce</button>
        </div>
    )
}