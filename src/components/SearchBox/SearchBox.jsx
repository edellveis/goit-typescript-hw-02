import React from "react";
import style from "./SeatchBox.module.css";

export default function SearchBox() {
  return (
    <div className={style.search}>
      <label>
        <span className={style.title}>Find contact by name</span>
        <input className={style.input} type="text" name="search" />
      </label>
    </div>
  );
}
