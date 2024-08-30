import "../styles/global.css";
import { Stack } from "expo-router";

export function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ title: "tabs" }} />
    </Stack>
  );
}
