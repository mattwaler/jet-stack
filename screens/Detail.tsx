import { Box, Text, ScrollView } from 'native-base'
import Screen from '../components/Screen'

export default function Detail() {
  return (
    <Screen title="Detail">
      <ScrollView px={8} py={4} bgColor="gray.100">
        <Box height={1000}>
          <Text bold fontSize={'3xl'}>Detail</Text>
        </Box>
      </ScrollView>
    </Screen>
  )
}
