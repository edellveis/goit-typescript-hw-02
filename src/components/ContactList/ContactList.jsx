import React from "react";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

export default function ContactList({
  filterContact,
  removeContact,
  dataContact,
}) {
  return (
    <div className={style.contactWaper}>
      <h3>ContactList</h3>
      <ul className={style.conatactList}>
        <Contact
          removeContact={removeContact}
          filterContact={filterContact}
          dataContact={dataContact}
        />
      </ul>
    </div>
  );
}
