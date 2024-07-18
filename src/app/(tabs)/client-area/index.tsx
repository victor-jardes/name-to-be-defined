import ClientCodeInputText from "../../components/inputText/clientCode";
import ClientCodeList from "../../components/flatList/clientCode";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function ClientInfos() {
  return (
    <View style={styles.container}>
      <ClientCodeInputText />
      <ClientCodeList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 100,
  },
});
