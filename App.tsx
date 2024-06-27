import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ClientCode from "./src/components/ClientCode";

export default function App() {
  return (
    <View style={styles.container}>
      <ClientCode />

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
