import { Box, Text, ScrollView } from 'native-base'

export default function Home() {
  return (
    <ScrollView px={8} py={16}>
      <Box height={1000}>
        <Text bold fontSize={'3xl'}>Home</Text>
      </Box>
    </ScrollView>
  )
}
