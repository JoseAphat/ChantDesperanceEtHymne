import React, { createContext, ReactNode, useContext, useState } from "react";

type FontContextType = {
  fontFamily: string;
  setFontFamily: (font: string) => void;
};

const FontContext = createContext<FontContextType>({
  fontFamily: "Roboto",
  setFontFamily: () => {},
});

export const FontProvider = ({ children }: { children: ReactNode }) => {
  const [fontFamily, setFontFamily] = useState("Roboto");

  return (
    <FontContext.Provider value={{ fontFamily, setFontFamily }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => useContext(FontContext);
