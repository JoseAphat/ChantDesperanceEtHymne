// 📂 components/AppText.tsx
import React from "react";
import { Text, TextProps } from "react-native";
import { useFont } from "../font/FontContext";

const AppText: React.FC<TextProps> = ({ style, children, ...props }) => {
  const { fontFamily } = useFont();
  return (
    <Text {...props} style={[{ fontFamily }, style]}>
      {children}
    </Text>
  );
};

export default AppText;
