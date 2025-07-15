export default function TODO({task, isDone}){
    
        
            
            if(isDone === true){
                return(<p>{task} done. Good luck!</p>)

            }
            else{
                return(<h2>{task} not done. Hello, tortoise</h2>)
            }
       
        }