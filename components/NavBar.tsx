import { Box, Text, Row, Column } from "native-base";
import { Link } from "react-router-native";
import { FontAwesome } from "@expo/vector-icons";
import { useLocation } from "react-router-native";

interface Link {
  path: string
  name: string
  icon: 'home' | 'info-circle'
}

const links: Link[] = [
  { path: "/", name: "Home", icon: "home" },
  { path: "/detail", name: "Detail", icon: "info-circle" },
];

export default function NavBar() {
  const location = useLocation();
  return (
    <Box
      pb={8}
      pt={4}
      px={6}
      bgColor={"white"}
      borderTopWidth={1}
      borderTopColor="gray.200"
    >
      <Row space={8} justifyContent={"space-around"} alignItems={"center"}>
        {links.map((link) => (
          <Link key={link.path} to={link.path} underlayColor={"transparent"}>
            <Column
              alignItems={"center"}
              opacity={location.pathname === link.path ? "1" : ".5"}
            >
              <FontAwesome size={24} name={link.icon} />
              <Text>{link.name}</Text>
            </Column>
          </Link>
        ))}
      </Row>
    </Box>
  );
}
