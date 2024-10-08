import React from "react";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

export default function ContactList({ filterContact, onDelete }) {
  return (
    <div className={style.contactWaper}>
      <h3>ContactList</h3>
      <ul className={style.conatactList}>
        {filterContact.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
