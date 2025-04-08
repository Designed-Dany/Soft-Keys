import React from "react";
import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <h1 className={styles.root}>
      Ничего не найдено, по данному запросу ничего нет :(
    </h1>
  );
}

export default NotFoundBlock;
