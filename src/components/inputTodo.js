import React, { useState } from "react";

const InputTodo =() =>{

    const [description , setDescription] = useState("");

    const onSubmitForm = async e =>{
        e.preventDefault();
        try{
            const body ={description};
            const response =await fetch("http://localhost:8000/todos",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            });

            window.location="/";
        }catch(err){
            console.error(err.message);
        }
    }
    return(
        <div>
            <h1 className="text-center mt-5">Input Todo</h1>
                <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                    <input type="text" className="form-control" placeholder="add a todo" value={description} onChange={e => setDescription(e.target.value)}/>
                    <button className="btn btn-success">Add</button>
                </form>
        </div>
    )
}
export default InputTodo;