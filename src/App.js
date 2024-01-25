
import React, { useState } from 'react';
import './App.css';

const ColorChanger = () => {
  const colorArray = ['red', 'yellow', 'blue', 'green', 'brown', 'orange', 'gray', 'wheat', 'pink', 'purple', 'indigo', 'violet', 'skyblue','maroon'];
  const [inputColor, setInputColor] = useState('');

  const handleInputChange = (event) => {
    const color = event.target.value.toLowerCase();
    setInputColor(color);

    if (colorArray.includes(color)) {
      document.body.style.backgroundColor = color;
    } else {
      
    }
  };

  return (
    <div className="color-container">
      <input
        type="text"
        placeholder="Enter color name"
        value={inputColor}
        onChange={handleInputChange}
      />

      {colorArray.includes(inputColor) && (
        <div className="selected-color" style={{ backgroundColor: inputColor }}>
          Selected Color: {inputColor}
        </div>
      )}
      {!colorArray.includes(inputColor) && (
        <div className="error-message">
          Color not found in the array.
        </div>
      )}
    </div>
  );
};

export default ColorChanger;
