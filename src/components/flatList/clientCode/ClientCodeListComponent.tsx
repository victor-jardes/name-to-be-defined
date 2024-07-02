import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { useClientCodeStore } from "../../../zustand/clientCodeStore";

export default function ClientCodeListComponent() {
  const listWithClientCodes = useClientCodeStore(
    (state) => state.listWithClientCodes
  );
  return (
    <SafeAreaView>
      <FlatList
        data={listWithClientCodes}
        renderItem={({ item }) => <Text>{item.clientCode}</Text>}
        // extraData={listWithClientCodes}
        // keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({});
