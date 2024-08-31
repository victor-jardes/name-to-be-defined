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
      className="border-black border-solid w-58 h-8 border-2 rounded placeholder:italic placeholder:text-slate-400 placeholder:text-center "
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
