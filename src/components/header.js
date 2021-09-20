import React from "react";
import {
  Box,
  Stack,
  Flex,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";
const Header = (props) => {

  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      padding={0}
      bg="white"
      color="black"
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
