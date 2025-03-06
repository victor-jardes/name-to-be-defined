import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="client-area/index"
        options={{ headerShown: false, title: "codigos" }}
      />
    </Tabs>
  );
}
