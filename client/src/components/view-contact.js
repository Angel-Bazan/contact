// import React from "react";
// import { Navbar } from "./navbar";
// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import { API_URL } from "../constants";

// export const ViewContacts = () => {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     fetch(`${API_URL}/api/contacts`)
//       .then((response) => response.json())
//       .then((contacts) => {
//         setContacts(contacts);
//       });
//   }, []);

//   let params = useParams();

//   return (
//     <div>
//       <Navbar />
//       <h2>Contact Information: {params.contactId}</h2>
//       <div>
//         <h3 key={contacts.id}>
//           {contacts.firstname} {contacts.lastname}
//         </h3>
//         <Link to='/create-contact'>
//           <button>Edit</button>
//         </Link>
//         <Link to='/delete'>
//           <button>Delete</button>
//         </Link>
//       </div>
//     </div>
//   );
// };
