import React, { useState } from "react";
import "../App.css"; // Import CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

const buttonData = [
  { name: "Divided Motorways Level 1", multiply: 0.42 },
  { name: "Primary Non-Divided Motorways", multiply: 0.46 },
  { name: "Divided Trunk Roads", multiply: 0.61 },
  { name: "Divided Motorways Level 2", multiply: 0.68 },
  { name: "Interchange Links", multiply: 0.87 },
  { name: "Non-Urban Divided Motorway", multiply: 0.96 },
  { name: "Non-Urban Non-Divided Motorway", multiply: 1.33 },
  { name: "Divided Urban Roads", multiply: 1.5 },
  { name: "Access Ramps", multiply: 1.64 },
  { name: "Primary Non-Divided Trunk Roads", multiply: 1.23 },
  { name: "Primary Non-Divided Urban Roads", multiply: 2.87 },
  { name: "Secondary Residential Divided Urban Roads", multiply: 3.96 },
  { name: "Secondary Commercial Divided Urban Roads", multiply: 5.79 },
  { name: "Secondary Residential Non-Divided Urban Roads", multiply: 7.68 },
  { name: "Secondary Commercial Non-Divided Urban Roads", multiply: 8.57 },
  { name: "Suburban Roads", multiply: 3.55 },
  { name: "Roundabout", multiply: 9.45 },
];

const PopupCalculator = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState({ first: null, final: null });

  const handleSelectButton = (button) => {
    setSelectedButton(button);
    setInputValue("");
    setResult({ first: null, final: null });
  };

  const handleCalculate = () => {
    const num = parseFloat(inputValue);
    if (!isNaN(num) && selectedButton) {
      const firstResult = num * selectedButton.multiply;
      const finalResult = firstResult * 60;
      setResult({ first: firstResult, final: finalResult });
    }
  };

  const handleClear = () => {
    setInputValue("");
    setResult({ first: null, final: null });
  };
  

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCalculate();
    }
  };

  return (
    <div className="container-fluid dark-theme">
      <div className="row">
        {/* Sidebar with vertical buttons */}
        <div className="col-md-4 sidebar">
          {buttonData.map((button, index) => (
            <button
              key={index}
              className="btn btn-custom btn-block"
              onClick={() => handleSelectButton(button)}
            >
              {button.name}
            </button>
          ))}
        </div>

        {/* Main content area */}
        <div className="col-md-8 main-content">
          <h2 className="title">Road Type Calculation</h2>

          {selectedButton && (
            <div className="calculation-box">
              <h3>{selectedButton.name} (× {selectedButton.multiply})</h3>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Enter a number"
                className="form-control input-box"
              />
              <div className="button-group">
  <button className="btn btn-success btn-calculate" onClick={handleCalculate}>
    Calculate
  </button>
  <button className="btn btn-danger btn-clear" onClick={handleClear}>
    Clear
  </button>
</div>


              {result.first !== null && (
                <div className="result">
                  <p>Estimated Hrs: <strong>{result.first.toFixed(2)} Hrs</strong></p>
                  <p>Estimated Mins: <strong>{result.final.toFixed(2)} Mins</strong></p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupCalculator;
