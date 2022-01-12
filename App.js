import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Mandus portfolio Nice</Text>
      <StatusBar style="auto" />
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",

  },
  h1: {
    fontSize: 35,
    color: "#D02323",
    textAlign: "center",
    paddingTop: 100,
  },
});
