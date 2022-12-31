import { Box, Text, Row, Column } from "native-base";
import { Link } from "react-router-native";
import { FontAwesome } from '@expo/vector-icons';
import { useLocation } from "react-router-native";

const links = [
  { path: '/', name: 'Home', icon: <FontAwesome size={24} name="home" /> },
  { path: '/detail', name: 'Detail', icon: <FontAwesome size={24} name="info-circle" /> },
]

export default function NavBar() {
  const location = useLocation()
  return (
    <Box pb={8} pt={4} px={6} bgColor={'white'} borderTopWidth={1} borderTopColor="gray.200">
      <Row space={8} justifyContent={'space-around'} alignItems={'center'}>
        {links.map(link => (
          <Link key={link.path} to={link.path} underlayColor={'transparent'}>
            <Column alignItems={'center'} opacity={location.pathname === link.path ? '1' : '.5'}>
              {link.icon}
              <Text>{link.name}</Text>
            </Column>
          </Link>
        ))}
      </Row>
    </Box>
  )
}
