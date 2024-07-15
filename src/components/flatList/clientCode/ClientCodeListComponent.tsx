import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useClientCodeStore } from "../../../zustand/clientCodeStore";

export default function ClientCodeListComponent() {
  const listWithClientCodes = useClientCodeStore(
    (state) => state.listWithClientCodes
  );
  return (
    <SafeAreaView>
      <FlatList
        data={listWithClientCodes}
        renderItem={({ item }) => (
          <View>
            <Text>{item.clientCode}</Text>
            <Pressable onPress={() => console.log("finished")}>
              <Text style={style.pressableFinished}>FINISH</Text>
            </Pressable>
          </View>
        )}
        // extraData={listWithClientCodes}
        // keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  pressableFinished: {
    borderColor: "black",
    borderWidth: 2,
    width: 54,
    height: 20,
  },
});
