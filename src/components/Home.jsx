import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { deleteConatctAPI, getAllContactAPI } from "../services/allAPI";


const Home = () => {
  const [allContact,setAllContact]=useState([])

  useEffect(()=>{
   getAllContact() 
  },[])
  console.log(allContact);
  
  const getAllContact = async()=>{
    try{
      const result = await getAllContactAPI()
       if(result.status>=200 && result.status<300){
      setAllContact(result.data);
        
      }
    }catch(err){
      console.log(err);
      
    }
  }

  const deleteContact = async (id) => {
    try {
      const result = await deleteConatctAPI(id);
      if (result.status >= 200 && result.status < 300) {
        getAllContact(); 
        alert('Employee deleted successfully');
      } else {
        alert('Failed to delete employee');
      }
    } catch (err) {
      console.error(err);
      alert('Error occurred while deleting the employee');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Contact Manager</h2>
      <div className="card mt-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">Contact List</h5>
            <Link to="/add" className="btn btn-success">
            Add +
          </Link>          </div>
          <ul className="list-group mt-3">
           
              {
                allContact?.length>0?
               allContact?.map(contact=>(
                <li key={contact?.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h2 className="mb-0">{contact?.username}</h2>
                  <h6 className="mb-0 text-muted">{contact?.email}</h6>
                </div>
                <div>
                <Link to={`/edit/${contact.id}`} className="btn btn-sm btn-primary me-2">
                <i class="fa-regular fa-pen-to-square"></i>

                  </Link>
                  <button onClick={() => deleteContact(contact.id)}

                    className="btn btn-sm btn-danger"
                   >
                     <i class="fa-solid fa-trash"></i>

                  </button>
                  
                </div>
              </li>
                ) )
              :
              <div className="fw-bolder text-danger fs-5">
                added!!
              </div>
              }
        
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
