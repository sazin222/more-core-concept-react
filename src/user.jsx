import { useEffect, useState } from "react"

export default function User(){ 
    const [user, setUser]= useState([])
// userEffect 2 ta parameter nai ekta callback funtion another one defedincy
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setUser(data) )
    },[])
 return(
    <div> 
      <h3>user: {user.length}</h3>
    </div>
 )
} 

//1 declare a state to hold the data 
// 2 useEffect with call back function and deficiency array
// 3 use fetch to load data