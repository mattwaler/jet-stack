import { View, Text} from "react-native";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <View className="p-4">
      <Text className="font-bold text-3xl">React Native Starter</Text>
      <Counter />
    </View>
  )
}
