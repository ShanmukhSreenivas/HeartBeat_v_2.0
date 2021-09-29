import React from "react";
import {
  Flex,
  IconButton,
  Text,
  Image,
  useColorModeValue
} from "@chakra-ui/react";

const Header = (props) => {
  const textColor = useColorModeValue('black','white')
  const backColor = useColorModeValue('white','#1a202c')

  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      padding={0}
      bg={backColor}
      color={textColor}
      marginBottom='20px'
      {...props}
    >
      <Flex align="center" >
        <IconButton
          size="xl"
          aria-label={`MAHB`}
          variant="ghost"
          color="current"
          icon={<Image src='.../public/MAHBLogo.png' />}  
        />
        <Text fontSize="3xl" letterSpacing={"tighter"}>
          Operational Heartbeat Dashboard
        </Text>
      </Flex>

    </Flex>
  );
};

export default Header;
