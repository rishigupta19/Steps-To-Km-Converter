import React, { useState } from "react";
import "./App.css";
import Heading from "./Heading";
import Input from "./Input";
import Output from "./Output";
import Steplength from "./Steplength";
import Calculate from "./Calculate";

function App() {
  const [steps, setSteps] = useState(0);
  const [stepLength, setStepLength] = useState(0);
  const [distance, setDistance] = useState(0);

  const onStepsChange = (newSteps) => {
    setSteps(newSteps);
  };

  const onStepLengthChange = (newLength) => {
    setStepLength(newLength);
  };

  const calculateDistance = () => {
    const totalDistance = (steps * stepLength) / 1000; // Convert meters to kilometers
    setDistance(totalDistance);
  };

  return (
    <div className="container container-img">
      <Heading />
      <Input onStepsChange={onStepsChange} />
      <Steplength onStepLengthChange={onStepLengthChange} />
      <Calculate calculateDistance={calculateDistance} />
      <Output distance={distance} />
    </div>
  );
}

export default App;