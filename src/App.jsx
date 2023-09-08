import './App.css'
import Counter from './counter' 
import Team from './Team' 
import User from './user'
import friend from './friend'
import Friend from './friend'

function App() {
  function handelClick(){
    alert('button click')
  } 

  const handelClick2 =()=>{
    alert ('button 2 clicked')
  } 

  const addFive =(num)=>{
      alert(num + 5)
  }

  return (
    <>
     
      <h3>Explore more React core concept</h3>
      <Friend></Friend>
      <User></User>
      <Counter></Counter> 

      <Team></Team>
      <button onClick={handelClick}> click me</button>
      <button onClick={handelClick2}>button2 click</button> 
      {/* onClick er modda o function leka jai */}
      <button onClick={()=>{alert('clicked 3')}}> click 3</button>
      {/* function er parameter e kisu pataite hole arrow function diea likte hoi */}

      <button onClick={()=>addFive(5)}> click 4</button>
     
    </>
  )
}

export default App
