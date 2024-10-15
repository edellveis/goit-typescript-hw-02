import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";
export default function ImageGallery({ dataImg, openModal }) {
  return (
    <ul className={style.imglist}>
      {null !== dataImg &&
        dataImg.map((item) => (
          <li key={item.id}>
            <ImageCard
              imgAlt={item.alt_description}
              imgUrl={item.urls}
              openModal={openModal}
            />
          </li>
        ))}
    </ul>
  );
}
