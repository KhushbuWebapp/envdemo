import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
const ReactColorfull = () => {
  const [currentColor, setCurrentColor] = useState("#F37423");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleToggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: currentColor,
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          marginTop: "2rem",
          cursor: "pointer",
        }}
        onClick={handleToggleColorPicker}
      />
      {showColorPicker && (
        <HexColorPicker color={currentColor} onChange={handleColorChange} />
      )}
    </div>
  );
};

export default ReactColorfull;
