import React from "react";
import styles from "./Calculate.module.css";

function Calculate({ calculateDistance }) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={calculateDistance}>
        Calculate
      </button>
    </div>
  );
}

export default Calculate;
