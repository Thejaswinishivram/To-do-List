import React from "react";


const List=({tasks})=>{
    return(
        <div>{
           tasks.map(item=>{
               return <h1>{item}</h1>
           })
        }
        </div>
    )
}

export default List;