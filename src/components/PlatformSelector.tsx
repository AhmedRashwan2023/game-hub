import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectedPlatform }: Props) => {
  const { data: platforms } = usePlatforms();

  return (
    <div style={divStyle}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} width="200px">
          Platforms
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectedPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
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
