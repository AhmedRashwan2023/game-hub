import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <HStack>
        <Image src={logo} boxSize={"60px"}></Image>
        <Text fontSize="lg" fontWeight="bold">
          The GAME Hub
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
