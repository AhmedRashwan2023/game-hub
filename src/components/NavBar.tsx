import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchBox />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
