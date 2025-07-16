import { useState } from "react"

export default function Counter(){

    let [count, setCount] = useState(0);
    
    const addHandle = ()=>{
        let newCount = count + 1;
        
        setCount(newCount)

    }

    const minusHandle = () =>{
         let newCount = count -1;

         setCount(newCount)
    }

    return(
        <div style={{border: '2px solid red', marginTop:'5px', marginBottom:'20px'}}>
            <h2>Counter:{count}</h2>
            <button onClick={addHandle}>Add</button>
            <button onClick={minusHandle}>Minus</button>
        </div>
    )
}