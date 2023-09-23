import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data: platforms } = usePlatforms();

  return (
    <div style={divStyle}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} width="200px">
          Platforms
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatformSelector;

const divStyle = {
  paddingBottom: "20px",
};
