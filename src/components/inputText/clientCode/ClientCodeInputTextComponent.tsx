import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { useClientCodeStore } from "../../../zustand/clientCodeStore";
import IClientCodeInfos from "../../../types/IClientCodeInfos";

export default function ClientCodeInputTextComponent() {
  const clientCode = useClientCodeStore((state) => state.clientCode);
  const setClientCode = useClientCodeStore((state) => state.setClientCode);
  const setListWithClientCodes = useClientCodeStore(
    (state) => state.setListWithClientCodes
  );

  const addCodesChange = (clientCode: IClientCodeInfos["clientCode"]) => {
    setListWithClientCodes(clientCode);
    setClientCode("");
  };

  return (
    <View>
      <Text>Insert code, with containr 8 numbers</Text>
      <TextInput
        style={style.TextInput}
        placeholder="XXXX-XXXX"
        keyboardType="numeric"
        value={clientCode}
        onChangeText={(text) => setClientCode(text)}
        onSubmitEditing={({ nativeEvent: { text: clientCode } }) =>
          addCodesChange(clientCode)
        }
      />
    </View>
  );
}

const style = StyleSheet.create({
  TextInput: {
    borderColor: "black",
    borderWidth: 2,
    width: 230,
    height: 25,
  },
});
