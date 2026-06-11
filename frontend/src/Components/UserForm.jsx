import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const UserForm = () => {
    const [users, setusers] = useState({
        name:"",
        email:""
    });
   
    //this function for the onchange event for get in g info
    const handleChange=(e)=>{
        setusers({
            ...users,[e.target.name]:e.target.value
        });
    }

    //now for the submit
     const handleSubmit=async(e)=>{
        e.preventDefault();

        //validation
        if(
            users.name.trim()===""||
            users.email.trim()===""
        )
        {
            alert("Please fill all the field");

            return;
        }

        try{
            const response=await axios.post("http://localhost:5000/users",users);

            alert(response.data);

            //clear form after one user fill
            setusers({
                name:"",
                email:"",
            });
        }catch(error){
            console.log(error);

            alert(`error while inserting data`);
        }
     };
  


  return (
    <>
    <div >
         <h1>Users form</h1>
          
           <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' name='name' placeholder='enter ur name' value={users.name} required/><br></br>
            <input onChange={handleChange} type='email' name='email' placeholder='enter ur mail'value={users.email} required/><br></br>

             <button type='submit'>Submit</button>
           </form>
      
    </div>
    </>

  )
}

export default UserForm
