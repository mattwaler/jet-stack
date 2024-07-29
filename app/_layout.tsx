import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen options={{ headerTitle: "Home" }} name="index" />
    </Stack>
  );
}
