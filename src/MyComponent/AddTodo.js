import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [Name, setName] = useState("");
    const [Mno, setMno] = useState("")

    const submit = (e) =>{
        e.preventDefault();
        if(!Name || !Mno){
            alert("name and mno can not be empty")
        }
        addTodo(Name, Mno);
    }

  return (
    <div className='container my-3' >
        <h3>Add Recoed</h3>
        <form onSubmit={submit}>
        <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input type="text" value={Name} onChange= {(e)=> {setName(e.target.value)}} className="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter Name"/>
          
        </div>
        <div className="form-group">
            <label htmlFor="Mno">Mo Number</label>
            <input type="text" value={Mno} onChange= {(e)=> {setMno(e.target.value)}} className="form-control" id="Mno" placeholder="Enter Number"/>
        </div>
        
            <button type="submit" className="btn btn-sm btn-success">Add name</button>
        </form>
    </div>
  )
}
