import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../generic/text";
import Button from "../generic/button";

const LoadReplies = props => {
  const { loadReplies, kids, isLoading, id, commentChain } = props;
  return (
    <View style={styles.container}>
      <Button
        _style={styles.button}
        onPress={() => loadReplies(id, commentChain, kids)}
      >
        <Text bold _style={styles.buttonText} size={12}>
          {isLoading && "Loading..."}
          {!isLoading && `${kids.length} repl${kids.length > 1 ? "ies" : "y"}`}
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  button: {
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonText: {
    textAlign: "center",
    color: "#19467a"
  }
});

export default LoadReplies;
