import React from "react";
import ContactForm from "./components/ContaactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm initia_lValue={initia_lValues} />
      <SearchBox />
      <ContactList />
    </div>
  );
}
