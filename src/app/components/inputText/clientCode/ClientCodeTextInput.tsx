import { TextInput, StyleSheet } from "react-native";
import { useClientCodeStore } from "../../../../zustand/clientCodeStore";
import IClientCodeInfos from "../../../../types/IClientCodeInfos";

export const ClientCodeTextInputComponent = () => {
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
  );
};

const style = StyleSheet.create({
  TextInput: {
    borderColor: "black",
    borderWidth: 2,
    width: 230,
    height: 25,
  },
});
