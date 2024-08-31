import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ClientCodeInfos } from "../../components/inputText/clientCode";
import { ClientCodeListItens } from "../../components/flatList/clientCode";

export default function ClientInfos() {
  return (
    <View style={styles.container}>
      <ClientCodeInfos.RootTextInput>
        <ClientCodeInfos.LabelTextInput valor="Digite o codigo de 8 digitos" />
        <ClientCodeInfos.InsertTextInput />
        <ClientCodeInfos.SendTextButton text="Adicionar" />
      </ClientCodeInfos.RootTextInput>
      <ClientCodeListItens.ListRootComponent>
        <ClientCodeListItens.ListWithItens />
      </ClientCodeListItens.ListRootComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",

    // alignItems: "center",

    // justifyContent: "center",
    paddingVertical: 12,
    // paddingHorizontal: 32,
    // borderRadius: 4,
    // elevation: 3,
    // backgroundColor: "red",
  },
});
