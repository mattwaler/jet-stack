import { View, Text } from 'react-native'
import Counter from '@/components/Counter'
import useTestQuery from '@/queries/test'

export default function Home() {
  const query = useTestQuery()

  return (
    <View className="px-4 pt-20">
      <Text className="font-bold text-5xl mb-4">Jettison</Text>
      {!query.isLoading &&
        query.data?.map((test, index) => <Text className='text-lg' key={index}>{test.name}</Text>)}
      <Counter />
    </View>
  )
}
