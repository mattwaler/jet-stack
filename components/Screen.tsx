import { Box, Text } from "native-base"

interface Props {
  title: string
  children: Element
}

export default function Screen(props: Props) {
  return (
    <>
      <Box pt={16} pb={2} borderBottomWidth={1} borderBottomColor={'gray.200'}>
        <Text fontSize={'lg'} bold textAlign={'center'}>{props.title}</Text>
      </Box>
      {props.children}
    </>
  )
}
