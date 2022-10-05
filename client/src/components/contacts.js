import { useState, useEffect } from "react";
import Form from "./form";
import { API_URL } from "../constants";

const Contacts = () => {
  const [contacts, SetContacts] = useState([]);

  const addContacts = (newContacts) => {
    SetContacts((contacts) => [...contacts, newContacts]);
  };
  const deleteContact = async (deleteId) => {
    await fetch(`${API_URL}/api/contacts/${deleteId}`, {
      method: "DELETE",
    });

    await getContacts();
  };
  const editContact = async (editId) => {
    await fetch(`${API_URL}/api/contacts/${editId}`, {
      method: "DELETE",
    });

    await getContacts();
  };

  const getContacts = async () => {
    const response = await fetch(`${API_URL}/api/contacts`);
    const contact = await response.json();
    SetContacts(contact);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <section className="contacts container">
      <h2 className="list-of-contacts">List of Contacts</h2>
      <ul id="contacts" className="row justify-content-md-center list-unstyled">
        {contacts.map((contact, index) => {
          return (
            <li key={index} className="col col-sm-4 mb-3">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <br />
                  <strong>First Name:</strong>
                  {contact.firstname}
                  <br />
                  <strong>Last Name:</strong>
                  {contact.lastname} <br />
                  <strong>email:</strong>
                  {contact.email}
                  <br />
                  <strong>note:</strong>
                  {contact.note}
                  <br />
                  <strong>mobile:</strong>
                  {contact.mobile}
                  <br />
                  <strong>address:</strong>
                  {contact.address}
                  <br />
                  <button className="btn btn-danger">
                    <span
                      className="material-symbols-outlined"
                      onClick={() => deleteContact(contact.id)}
                    >
                      delete
                    </span>
                  </button>
                  <br />
                  <button className="btn btn-primary">
                    <span
                      className="material-symbols-outlined"
                      onClick={() => editContact(contact.id)}
                    >
                      edit
                    </span>
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <Form addContacts={addContacts} />
    </section>
  );
};

export default Contacts;
