import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../generic/text";

const NoComments = () => (
  <View style={styles.container}>
    <Text size={20}>No comments</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 300
  }
});

export default NoComments;
