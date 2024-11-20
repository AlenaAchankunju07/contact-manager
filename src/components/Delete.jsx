import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteConatctAPI } from '../services/allAPI';
deleteConatctAPI
const Delete = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const result = await deleteConatctAPI(id);
      if (result.status >= 200 && result.status < 300) {
        alert("Employee deleted successfully");
        navigate('/'); 
      } else {
        alert("Failed to delete employee");
      }
    } catch (err) {
      console.error("Error deleting employee:", err);
      alert("An error occurred while deleting the employee");
    }
  };

  return (
    <button className='btn btn-sm btn-danger' onClick={handleDelete}>
      Delete
    </button>
  );
};

export default Delete;
