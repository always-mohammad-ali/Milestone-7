
import './App.css'
import Counter from './counter';

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

      <Counter></Counter>

      <button onClick={handleClick}>Click1</button>

      <button onClick={() => alert('button-clicked siree')}>Click2</button>

      <button onClick={()=>addToFive(30)}>Add To 5 something</button>
      
    </>
  )
}

export default App
