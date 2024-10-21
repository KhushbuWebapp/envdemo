import React, { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("#e92121");

  return (
    <ColorContext.Provider value={{ currentColor, setCurrentColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Corrected export
export const useColor = () => useContext(ColorContext);
