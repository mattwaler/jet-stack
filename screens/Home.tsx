import { Box, Text, ScrollView } from 'native-base'
import Screen from '../components/Screen'

export default function Home() {
  return (
    <Screen title="Home">
      <ScrollView px={8} py={4} backgroundColor={'gray.100'}>
        <Box height={1000}>
          <Text bold fontSize={'3xl'}>Home</Text>
        </Box>
      </ScrollView>
    </Screen>
  )
}
