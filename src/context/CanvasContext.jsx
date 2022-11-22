import React, { useContext, useState } from "react";

const CanvasContext = React.createContext();

const CanvasProvider = ({ children }) => {
  const [canvas,setCanvas] = useState(null)

  return (
    <CanvasContext.Provider
      value={{canvas,setCanvas}}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CanvasContext);
};

export { CanvasContext, CanvasProvider };