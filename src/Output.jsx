import React from "react";
import styles from "./Output.module.css";

function Output({ distance }) {
  return (
    <div className={styles.container}>
      <h3>Total Distance:</h3>
      <div className={styles.resultBox}>
        <p>{distance.toFixed(2)} km</p> {/* Display the distance formatted to 2 decimal places */}
      </div>
    </div>
  );
}

export default Output;
