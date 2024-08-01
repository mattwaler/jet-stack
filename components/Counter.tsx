import { View, Pressable, Text } from "react-native";
import useCount from "@/atoms/count";

export default function Counter() {
  const [count, setCount] = useCount();
  return (
    <View className="bg-gray-300 rounded-lg p-4 mt-4">
      <Text className="font-black text-xl">Counter Component</Text>
      <Pressable
        className="mt-2 bg-gray-900 px-4 py-2 rounded-lg w-full items-start"
        onPress={() => setCount(count + 1)}
      >
        <Text className="text-white text-center">Increment Jotai State</Text>
      </Pressable>
      <Text className="mt-2">The current count is {count}!</Text>
    </View>
  );
}
