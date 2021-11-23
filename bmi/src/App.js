import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <div>
      <div className="calculator-holder">
        <h1>BMI Calculator</h1>
        <div>
          <input
            className="input-field"
            type="text"
            onChange={(e) => setHeight(e.target.value)}
            placeholder="height in cm"
          />
          <input
            className="input-field"
            type="text"
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight in kg"
          />
          <button className="btn" onClick={handleBmi}>Calculate</button>
        </div>
        <h1>{bmi}</h1>
        <h2>{info}</h2>
      </div>
    </div>
  );
};

export default App;
