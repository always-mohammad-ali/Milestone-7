import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TODO from './TODO'
import Actor from './Actor'


function App() {
 
  const actors = ['sakib', 'manna', 'salman', 'riaz']

  return (
    <>   
      <h1>Vite + React</h1>

      {
        actors.map(actorName => <Actor name={actorName}>

        </Actor>)
      }
      
      

      {/* <TODO task="ECO101" isDone={true}></TODO>
      <TODO task="MAT120" isDone={false}></TODO>
      <TODO task="MAT125" isDone={true}></TODO> */}

      {/* <Person></Person>
      <Dev></Dev>

      <Device name="laptop" price='17k'></Device>
      <Device name="mobile" price='176k'></Device>
      <Device name="watch" price='7k'></Device>
      <Device name="comp" price='1457k'></Device>

      <Student></Student>
      <Student></Student>
      <Student></Student>
      <Student></Student> */}
      
    </>
  )
}



function Person(){
  const name = 'ali'
  return(
    <div className='student'>
       <h2>Hey, Man What is up!</h2>
       <h1>I am {name}</h1>
   </div>
  )
}

function Dev(){
  const cssHere = {
    color : "blue",
    backgroundColor : "gray"
  }

  return(
    <div style={cssHere}>
      <h2>hey dev</h2>
      <p>You are fcking awesome</p>
    </div>
  )
}

function Device(props){
  return <h2>This is {props.name}. Its price is {props.price}</h2>
}

function Student(){
  const {name, grade} = {name:'ali', grade:'5'}
  return(
    <div>
      <p>Name:{name}</p>
      <p>Grade:{grade}</p>
    </div>
  )
}

export default App
