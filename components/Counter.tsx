import { View, Pressable, Text } from "react-native";
import useCount from "@/atoms/count";

export default function Counter() {
  const [count, setCount] = useCount();
  return (
    <View>
      <Pressable
        className="mt-2 bg-gray-900 px-4 py-2 rounded-lg w-32 "
        onPress={() => setCount(count + 1)}
      >
        <Text className="text-white text-center">Increment</Text>
      </Pressable>
      <Text className="mt-2">The count is {count}!</Text>
    </View>
  );
}
