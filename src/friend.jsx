import { useEffect, useState } from 'react'
import './friends.css'
import SingleFriend from './singleFriend'

export default function(){
const [friends, setFriends]= useState([]) 

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then (data => setFriends(data))
},[])
    return(
        <div className='box'> 
          <h3>friends:{friends.length}</h3> 

          {
            friends.map(friend => <SingleFriend friend={friend}></SingleFriend>)
          }
        </div>
    )
}