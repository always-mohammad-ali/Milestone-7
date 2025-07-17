
import './App.css'

import Users from './Users';
import Counter from './counter';

import Team from './Team';

function App() {
  
  function handleClick(){
    alert('alert siree..')
  }

  const addToFive = (add) =>{
      alert(add+5);
  }

  return (
    <>
      
      <h1>React</h1>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click1</button>

      <button onClick={() => alert('button-clicked siree')}>Click2</button>

      <button onClick={()=>addToFive(30)}>Add To 5 something</button>
      
    </>
  )
}

export default App
