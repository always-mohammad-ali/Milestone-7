import { useEffect, useState } from "react"

export default function Users(){

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

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
            <h2>Users:{users.length}</h2>
        </div>
    )
}