///saveContactAPI- post http reqs called by add component

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const saveContactAPI=  async(contactDetailes)=>{
  return await commonAPI("POST",`${SERVERURL}/uploadContacts`,contactDetailes)
}

//getAllContactAPI -get http req called by home compoent when component displayed  in browser  inside its use effect hook
 
export const getAllContactAPI= async()=>{
  return await  commonAPI("GET",`${SERVERURL}/uploadContacts`,"")
}

// Get contact by ID (GET request)
export const getEditAPI = async (id) => {
  return commonAPI("GET", `${SERVERURL}/uploadContacts/${id}`, "");
}

// Update contatct details (PUT request)
export const updateContactAPI = async (id, contactDetailes) => {
  return commonAPI("PUT", `${SERVERURL}/uploadContacts/${id}`, contactDetailes);
}

// Delete contact (DELETE request)
export const deleteConatctAPI = async (id) => {
  return commonAPI("DELETE", `${SERVERURL}/uploadContacts/${id}`, "");
}