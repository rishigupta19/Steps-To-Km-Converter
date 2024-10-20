import React from "react";
import styles from "./Input.module.css";

function Input({ onStepsChange }) {
  const handleInputChange = (event) => {
    const newSteps = event.target.value ? parseInt(event.target.value) : 0;
    onStepsChange(newSteps);
  };

  return (
    <div className={styles.container}>
      <h3>Enter The No. Of Steps</h3>
      <input
        type="number"
        placeholder="Eg. 2000"
        onChange={handleInputChange} // Call the function on input change
      />
    </div>
  );
}

export default Input;
