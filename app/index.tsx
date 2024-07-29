import { View, Text, Pressable } from "react-native";
import useCountAtom from "@/atoms/count";

export default function Home() {
  const [count, setCount] = useCountAtom()
  return (
    <View className="p-4">
      <Text className="font-bold text-3xl">React Native Starter</Text>
      <Pressable className="mt-2 bg-gray-900 px-4 py-2 rounded-lg w-32" onPress={() => setCount(count + 1)}>
        <Text className="text-white text-center">
          Increment
        </Text>
      </Pressable>
      <Text className="mt-2">The count is {count}!</Text>
    </View>
  )
}
