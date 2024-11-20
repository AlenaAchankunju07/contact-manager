import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEditAPI, updateContactAPI } from '../services/allAPI';

const Edit = () => {

  const { id } = useParams();
  const [contactDetails, setContactDetails] = useState({ username: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const getContact = async () => {
      try {
        const result = await getEditAPI(id);
        if (result.status >= 200 && result.status < 300) {
          setContactDetails(result.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getContact();
  }, [id]);

  const handleUpdate = async () => {
    const { username, email } = contactDetails;
    if (username && email ) {
      try {
        const result = await updateContactAPI(id, contactDetails);
        if (result.status >= 200 && result.status < 300) {
         
          navigate('/');
          alert('contact updated successfully');
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update contact Details</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-2">
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              value={contactDetails.username}
              onChange={(e) => setContactDetails({ ...contactDetails, username: e.target.value })}
              placeholder="Enter Username"
            />
          </div>
          <div className="mb-2">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={contactDetails.email}
              onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
              placeholder="Enter Email"
            />
          </div>
          
          <button onClick={handleUpdate} className="btn btn-success">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit