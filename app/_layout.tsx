import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DevToolsBubble } from 'react-native-react-query-devtools';
import '@/styles/tailwind.css'

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen options={{ headerShown: false }} name="index" />
      </Stack>
      <DevToolsBubble />
    </QueryClientProvider>
  );
}
