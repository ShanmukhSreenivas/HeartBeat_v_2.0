import React from "react";
import {
  Flex,
  Text,
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
        <Text fontSize="3xl" letterSpacing={"tighter"}>
          Operational Heartbeat Dashboard
        </Text>
      </Flex>

    </Flex>
  );
};

export default Header;
