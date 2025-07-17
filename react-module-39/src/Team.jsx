import { useState } from "react"

export default function Team(){

    const [count, newCount] = useState(11);

    const addHandler = () =>{
        const player = count + 1;
        newCount(player);
    }
    
    const removeHandler = () =>{
        newCount(count-1);
    }
    const divStyle = {
          
        textColor : "aqua",
        marginTop : '10px',
        marginBottom : '10px',
        padding : '5px',
        border: "2px solid orange",
        borderRadius :'5px'
    }
    return(
        <div style={divStyle}>
           <h2>Player:{count}</h2>
           <button onClick={addHandler}>Add</button>
           <button onClick={removeHandler}>Remove</button>
        </div>
    )
}