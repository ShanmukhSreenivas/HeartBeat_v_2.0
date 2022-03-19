import React from "react";
import {
  Flex,
  IconButton,
  Text,
  Image,
  Box,
  Spacer,
  useColorModeValue
} from "@chakra-ui/react";

const Header = ({ screenWidth }) => {
  const textColor = useColorModeValue('black','white')
  const backColor = useColorModeValue('white','#1a202c')

  return (
    <Flex height='5em' marginTop='10px' bgColor='#0066ae' width={screenWidth}>
      <Flex justifyContent='space-between' width='4%' marginLeft='0.5%'>
        <Box height='100%' width='10%' bgColor={backColor} />
        <Box height='100%' width='10%' bgColor={backColor} />
        <Box height='100%' width='10%' bgColor={backColor} />
        <Box height='100%' width='10%' bgColor={backColor} />
        <Box height='100%' width='10%' bgColor={backColor} />
      </Flex>
      <Flex justifyContent='center' alignItems='center' marginLeft='2%' wrap='nowrap'>
      <Text fontSize='3xl' color="white" wrap='nowrap'>Operational Dashboard</Text>
      </Flex>
      <Spacer />
      <Flex bgColor={backColor} justifyContent='center' width='14%'>
      <Image
        height='90%'
        marginRight='5%'
        marginLeft='5%'
        objectFit="cover"
        src="./MAHBLogo.png"
      />
      </Flex>
    </Flex>
  );
};

export default Header;



/*
*/