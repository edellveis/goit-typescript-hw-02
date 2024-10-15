import { RiSearchEyeLine } from "react-icons/ri";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [searchPhoto, setSearchPhoto] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (searchPhoto.trim() === "") {
      toast.error("Введіть значення для пошуку фото");
      return;
    }
    onSubmit(searchPhoto);
    setSearchPhoto("");
  };
  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchPhoto}
          onChange={(evt) => setSearchPhoto(evt.target.value)}
        />
        <button className={style.button} type="submit">
          <RiSearchEyeLine />
        </button>
      </form>
      <Toaster />
    </header>
  );
}
