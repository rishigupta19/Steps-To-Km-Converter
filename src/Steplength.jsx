import React from "react";
import styles from "./Input.module.css"

function Steplength({ onStepLengthChange }) {
  const handleInputChange = (event) => {
    const newLength = event.target.value ? parseFloat(event.target.value) : 0;
    onStepLengthChange(newLength);
  };

  return (
    <div className={styles.container}>
      <h3>Enter Step Length (in mtr)</h3>
      <input
        type="number"
        placeholder="Eg. 0.78"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Steplength;
