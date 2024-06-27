import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export default function ClientCode() {
  const [clientNumber, setClientNumber] = useState<string>("");
  return (
    <View>
      <Text>Insert code, with containr 8 numbers</Text>
      <TextInput
        style={style.TextInput}
        placeholder="XXXX-XXXX"
        keyboardType="numeric"
        value={clientNumber}
        onChangeText={(text) => setClientNumber(text)}
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
