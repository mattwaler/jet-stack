import { Box, Text, ScrollView } from 'native-base'

export default function Detail() {
  return (
    <ScrollView px={8} py={16}>
      <Box height={1000}>
        <Text bold fontSize={'3xl'}>Detail</Text>
      </Box>
    </ScrollView>
  )
}
