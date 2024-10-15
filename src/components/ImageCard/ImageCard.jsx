import React from "react";
import style from "./ImageCard.module.css";
export default function ImageCard({ imgUrl, openModal }) {
  return (
    <div className={style.imgbox}>
      <img
        onClick={() => openModal(imgUrl.regular)}
        className={style.img}
        src={imgUrl.small}
      />
    </div>
  );
}
