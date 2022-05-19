import React, { useState } from "react";

const Input=({tasks,setTasks})=>{
    const [input,setInput]=useState("")
    const handleAddTask=()=>{
        const temp=[...tasks,input];
        setTasks(temp);
        setInput("");
    }
    return(
        <div >
            <input placeholder="Enter your task here" onChange={event => setInput(event.target.value)} value={input}/>
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    )
}

export default Input;