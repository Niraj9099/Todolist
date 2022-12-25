import React from 'react'

export const Todoitem = ({todo, onDelete}) => {
  return (
    <div>
        <h3>{todo.Name}</h3>
        <p>{todo.Mno}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}> Delete</button>
    </div>
  )
}
