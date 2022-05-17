import React, { useState } from 'react';


const Todo = () => {
    const [task,setTask] = useState("")
    const [todo,setTodo] = useState([])




    const handle =(e)=>{
        setTask(e.target.value)
        console.log(e.target.value)
    }
    const handclick =()=>{
        setTodo([...todo,task])
        setTask("")
    }


    
  return (
    <div style={{backgroundColor:"lightGray",width:"30%",margin:"auto",padding:"40px",marginTop:"100px",borderRadius:"10px"}}>

    
    {todo.map(elem=>{

        return <div  key={elem.title} style={{display:"flex",justifyContent:'space-between',fontSize:"20px",color:"black",width:"70%",backgroundColor:"white",margin:"auto",padding:"10px",borderRadius:"10px",marginBottom:"15px"}}>
        <div  key={elem.title}>{elem}</div>
        <div style={{backgroundColor:"lightGray",border:"5px solid lightGreen",textAlign:"right",marginRight:"8px",borderRadius:"50%",width:"20px",height:"20px"}}></div> </div>
        
    })}

    <input style={{padding:"10px",borderRadius:"10px",fontSize:"20px",margin:"10px",color:"black",border:"none"}}
     type={"text"} value={task} placeholder="Write Something" onChange={handle}></input>


    <button style={{padding:"10px 15px",borderRadius:"10px",fontSize:"20px",fontWeight:"700",margin:"10px",color:"black",border:"none"}} 
    onClick={handclick}>+</button>
    


    </div>
  )
}

export default Todo;
