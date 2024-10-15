import React from "react";
import style from "./ErrorMessage.module.css";
import { BiCommentError } from "react-icons/bi";

export default function ErrorMessage({ error }) {
  return (
    <div className={style.errorbox}>
      <BiCommentError className={style.icon} />
      <span className={style.error}>{error}</span>
    </div>
  );
}
