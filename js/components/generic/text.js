import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";

const Text = ({
  children,
  bold,
  size,
  _style,
  alignRight,
  alignCenter,
  color,
  paddedTop
}) => (
  <NativeText
    style={[
      styles.font,
      bold && styles.bold,
      alignRight && { textAlign: "right" },
      alignCenter && { textAlign: "center" },
      color && { color },
      { fontSize: size },
      paddedTop && { paddingTop: 10 },
      _style
    ]}
  >
    {children}
  </NativeText>
);

const styles = StyleSheet.create({
  font: {
    fontFamily: "AppleSDGothicNeo-Medium"
  },
  bold: {
    fontFamily: "AppleSDGothicNeo-Bold"
  }
});

export default Text;
