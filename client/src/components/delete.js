// import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import { API_URL } from "../constants";


//  export const Delete = () => {
//     const [contactId, setContactId] = useState("");

//     const deleteContact = async (deleteId) => {
//         await fetch(`${API_URL}/api/contacts/${deleteId}`, {
//           method: "DELETE",
//         });
    
//         await getContacts(); 
//       };
//       const getContacts = async () => {
//         const response = await fetch(`${API_URL}/api/contacts`);
//         const contact = await response.json();
//         setContactId(contact);
//       };
    
//       useEffect(() => {
//         getContacts();
//       }, []);

//     return (
//         <div>
//         <h3>Delete Contact</h3>
//      <div>
//      <ul>
//           {contactId.map((contact, ) => (
          
//               <li key={contact.id} >
//                   <Link to={`/contacts/${contact.id}`}>
//                 {contact.firstname} {contact.lastname}
//                 <button className="delBtn" type="button" onClick={() => {deleteContact(contact)}}>REMOVE</button>
//             </Link>
//             </li>
//           ))}
//         </ul>
//      </div>
            
//         </div>
//     )
// }

