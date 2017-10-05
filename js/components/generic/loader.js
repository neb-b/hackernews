import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator />
  </View>
);

const styles = StyleSheet.create({
  loader: {
    marginTop: 100
  }
});

export default Loader;
