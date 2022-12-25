
import './App.css';
import Header from './MyComponent/Header';
import {Todos} from './MyComponent/Todos';
import {Footer} from './MyComponent/Footer';
import {AddTodo} from './MyComponent/AddTodo';
import React, { useState, useEffect, useLayoutEffect } from 'react';


function App() {
  let initTodo;
  
  if(localStorage.getItem("todos")===null){
    initTodo= [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



const onDelete = (todo) =>{
  console.log("this is delete", todo)

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
  localStorage.getItem("todos");
}


const addTodo = (Name, Mno)=>{
  console.log(addTodo)
  let sno;
  if(todos.length==0){
    sno = 0;
  }
  else{
    let sno = todos[todos.length-1].sno + 1;
  }
  const myTodo = {
    sno: sno, 
    Name: Name, 
    Mno: Mno
  }
  setTodos([...todos, myTodo])
  console.log(myTodo)


 
  
}


const [todos, setTodos] = useState(initTodo);

useEffect(() => {
  localStorage.setItemO("todos", JSON.stringify(todos))
}, [todos])


  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <AddTodo addTodo={addTodo}/>
      <Todos  todos={todos} onDelete={onDelete}/>
      <Footer/>
  
    </>
  );
}

export default App;
