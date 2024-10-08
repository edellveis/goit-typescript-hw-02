import React from "react";
import style from "./Contact.module.css";

export default function Contact({ filterContact, removeContact }) {
  return (
    <div>
      {filterContact.map((item) => (
        <li key={item.id} className={style.ContactItem}>
          <p>{item.name}</p>
          <p>{item.number}</p>
          <button
            className={style.btn}
            type="button"
            onClick={() => removeContact(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}
