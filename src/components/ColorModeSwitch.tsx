import { HStack, Switch, Text, useColorMode, Image } from '@chakra-ui/react'
import { BsMoonFill, BsSunFill } from "react-icons/bs";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack padding="1rem">
      { colorMode === 'light' ? 
      <BsMoonFill onClick={toggleColorMode} /> :
      <BsSunFill onClick={toggleColorMode} /> }
    </HStack>
  );
}

export default ColorModeSwitch