import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useClientCodeStore } from "../../../../zustand/clientCodeStore";
import { ButtonActionsList } from "./ButtonActionsList";

export const ListCodes = () => {
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
            <ButtonActionsList
              iconName="check"
              action={() => console.log("terminar")}
            >
              Finalizar
            </ButtonActionsList>

            <ButtonActionsList
              iconName="remove"
              action={() => console.log("remover")}
            >
              Remover
            </ButtonActionsList>

            <ButtonActionsList
              iconName="content-copy"
              action={() => console.log("copiado")}
            >
              Copy
            </ButtonActionsList>
          </View>
        )}
        // extraData={listWithClientCodes}
        // keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

