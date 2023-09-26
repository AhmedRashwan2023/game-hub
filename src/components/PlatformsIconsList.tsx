import * as reactFA from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiMacos } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platform: any[];
}
const PlatformsIconsList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: reactFA.FaWindows,
    macos: SiMacos,
    playstation3: reactFA.FaPlaystation,
    playstation4: reactFA.FaPlaystation,
    playstation5: reactFA.FaPlaystation,
    "xbox-series-x": reactFA.FaXbox,
    xbox360: reactFA.FaXbox,
    "xbox-one": reactFA.FaXbox,
    nintendo: SiNintendo,
    "nintendo-switch": SiNintendo,
    ios: MdPhoneIphone,
    android: reactFA.FaAndroid,
    web: BsGlobe,
    linux: reactFA.FaLinux,
  };

  return (
    <HStack paddingTop={3} marginY={1}>
      {platform.map(({ platform }) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformsIconsList;
