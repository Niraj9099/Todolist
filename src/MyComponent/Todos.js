import React from 'react'
import { Todoitem } from '../MyComponent/Todoitem'

export const Todos = (props) => {
  let mystyle={
    minheight: "7vh",
    margin: "10px auto"
  }
  return (
    <div className='container my-3 ' style={mystyle}>
      <h3 className='my-3'>Todo List</h3>
      {props.todos.length===0? "empty record" : 
      props.todos.map((todo)=>{
          return (
          <>
          <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
          </>
          )
      })
      }
     
    </div>
  )
}
