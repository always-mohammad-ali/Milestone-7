import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      
    </>
  )
}

function Person(){
  const name = 'ali'
  return(
    <>
       <h2>Hey, Man What is up!</h2>
       <h1>I am {name}</h1>
   </>
  )
}

export default App
