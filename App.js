import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  function Zbroji(e) {
    return setCount((prevCount) => prevCount + 1);
  }

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>{count}</Text>
      <Button title="Test" onPress={(e) => Zbroji(e)} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
