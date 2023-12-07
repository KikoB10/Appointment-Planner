import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isDuplicate) {
      alert(`This contact name already exists`);
      return;
    }

    addContacts(newName, newPhone, newEmail);
    setNewName("");
    setNewPhone("");
    setNewEmail("");
  };

  useEffect(() => {
    if (contacts.filter((contact) => contact.name === newName)) {
      setIsDuplicate(true);
    }
  }, [newName]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={newName}
          phone={newPhone}
          email={newEmail}
          setName={setNewName}
          setPhone={setNewPhone}
          setEmail={setNewEmail}
          submitHandler={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tileData={contacts} />
      </section>
    </div>
  );
};
