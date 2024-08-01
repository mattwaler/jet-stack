import { View, Text } from 'react-native'
import Counter from '@/components/Counter'
import useTestQuery from '@/queries/test'

export default function Home() {
  const query = useTestQuery()

  return (
    <View className="px-4 pt-16">
      <Text className="font-bold text-3xl mb-4">Jet Stack</Text>
      {!query.isLoading &&
        query.data?.map((test, index) => <Text key={index}>{test.name}</Text>)}
      <Counter />
    </View>
  )
}
