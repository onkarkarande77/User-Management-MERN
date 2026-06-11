import axios from 'axios';
import React, { useActionState } from 'react';
import { useState } from 'react';

const GetAllRec = () => {

    //for storing all the records
    const [allUsers, setAllUsers] = useState([]);

    //form data
    const [formData, setformData] = useState({
        id:"",
        name:"",
        email:""
    });

    //checking the update mode
    const [isEdit, setisEdit] = useState(false);

    const editUser=(user)=>{
        
        setisEdit(true);

        setformData({
            id:user.id,
            name:user.name,
            email:user.email
        });
    }
  
    //this for the getting record from the db
    const getUsers=async()=>{
        try{
            const response=await axios.get("http://localhost:5000/users");

            console.log(response.data);

            setAllUsers(response.data);

        }catch(error){
            console.log(error);
        }
    }
//this logic for the delete by the id
    const deleteUser=async(id)=>{
        try{
            const response=await axios.delete(`http://localhost:5000/users/${id}`,formData);
        
             getUsers();
             alert("Record is delete")
        }catch(error){
            console.log(error);
        }
    }

    //this method for the update
    const updateUser = async (e) => {

    e.preventDefault();

    try {

        const response = await axios.put(
            `http://localhost:5000/users/${formData.id}`,
            {
                name: formData.name,
                email: formData.email
            }
        );

        alert(response.data);

        getUsers();

        setIsEdit(false);

        setFormData({
            id: "",
            name: "",
            email: ""
        });

    } catch(error) {

        console.log(error);

    }

}
    //handle the change at updation time

    const handleChangeUp=(e)=>{
      
        setformData({...formData,[e.target.name]:e.target.value});
    };

  return (
    <>
    <h1>CRUD OPERATION</h1>
    <hr/>
    {isEdit && (<>
        <h1>Update Form</h1>
        <form onSubmit={updateUser}>
         <input onChange={handleChangeUp} type='text' name='name' value={formData.name}  required/> <br></br><br/>
         <input onChange={handleChangeUp} type='email' name='email' value={formData.email} required /><br></br><br/>
        
         <button >Update Data</button><br/>
    </form></>)}
    <div>
        <br></br>
         <button onClick={getUsers}>Show Users</button>
         <hr></hr>
        <table border='1' cellPadding='10'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete Rec</th>
                    <th>Update</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    allUsers.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={()=>deleteUser(user.id)} >DELETE</button></td>
                            <td><button onClick={()=>editUser(user)} >UPDATE</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
    </>
  )
}

export default GetAllRec
