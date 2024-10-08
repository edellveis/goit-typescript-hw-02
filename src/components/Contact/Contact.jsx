import React from "react";
import style from "./Contact.module.css";

export default function Contact({ name, number, id, onDelete }) {
  return (
    <li className={style.ContactItem}>
      <p>{name}</p>
      <p>{number}</p>
      <button className={style.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
