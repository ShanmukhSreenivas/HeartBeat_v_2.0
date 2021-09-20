import React from 'react';
import { useColorMode, useColorModeValue, IconButton, Center } from '@chakra-ui/react';
import { FaGlasses } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaGlasses, FaGlasses);

  return (
    <Center>
    <IconButton
      size="lg"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      color="current"
      marginLeft="2"
      colorScheme="blue"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    /></Center>
  );
};
