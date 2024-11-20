import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { saveContactAPI } from '../services/allAPI';

const Add = () => {
  const [contactDetailes,setContactDetailes]=useState({
    username:"", email:""
  })
  console.log(contactDetailes);
  
   
  const navigate= useNavigate();
  
  const handleSubmit = (event)=>{
    event.preventDefault();
   navigate('/')
  }
  const handleContact= async()=>{
    const{username,email}=contactDetailes
    if(username && email ){
      // alert("sucessful")
     //store contact
     try{
      const result= await saveContactAPI(contactDetailes)
      console.log(result);
      if(result.status>=200 && result.status<300){
        navigate('/')
       alert("contact detailes added sucessfully")
      }
      else{
       console.log(result);
       
      }
      
      }catch(err){
       console.log(err);
       
      }
    }else{
      alert("please fill the form")
    }
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add an Employee</h1>
        <form onSubmit={handleSubmit} >
          <div className="mb-2">
            <label>Username:</label>
            <input onChange={e=>setContactDetailes({...contactDetailes,username:e.target.value})}
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter Username"
            />
          </div>
          <div className="mb-2">
            <label>Email:</label>
            <input onChange={e=>setContactDetailes({...contactDetailes,email:e.target.value})}
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
         
          <button onClick={handleContact} className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Add;
