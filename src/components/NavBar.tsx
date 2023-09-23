import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";
interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchBox onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
