import React from "react";
import styles from "./LaodMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      Load more
    </button>
  );
}
