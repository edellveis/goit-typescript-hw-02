import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";

import style from "./App.module.css";

export default function App() {
  const state = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [dataContact, setDataContact] = useState(() => {
    const localDataContact = localStorage.getItem("datacontact");
    return localDataContact ? JSON.parse(localDataContact) : state;
  });
  useEffect(() => {
    localStorage.setItem("datacontact", JSON.stringify(dataContact));
  }, [dataContact]);

  const [filter, setFilter] = useState("");
  const filterContact = dataContact.filter((contact) =>
    contact.name.toLowerCase().includes(filter).trim()
  );
  const handleSubmit = (values, action) => {
    const newContact = { id: nanoid(), ...values };
    setDataContact((prevstate) => [...prevstate, newContact]);
    action.resetForm();
  };
  const removeContact = (idcontact) => {
    setDataContact(dataContact.filter((item) => item.id !== idcontact));
  };
  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList
        dataContact={dataContact}
        removeContact={removeContact}
        filter={filterContact}
      />
    </div>
  );
}
