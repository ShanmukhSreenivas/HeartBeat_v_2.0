import React from 'react';
import {
  IconButton,
  Grid,
  Text,
  useColorModeValue,
  Divider,
  Heading,
} from '@chakra-ui/react';
import { Stat, StatNumber, StatHelpText } from '@chakra-ui/react';
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaPlane,
  FaUsers,
  FaTruckLoading,
  FaSun,
  FaCloudSun,
  FaMoon,
  FaCloudMoon,
  FaBus,
  FaBuilding,
  FaTrain,
  FaLuggageCart,
  FaShieldAlt,
  FaMoneyCheck,
  FaPassport,
  FaRestroom,
  FaBluetooth
} from 'react-icons/fa';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import GaugeDemo from './gauge_main';
function StatCard({ bgColor }) {
  return (
    <Stat 
      align="center"
      bg={bgColor}
      py="2"
      border="2px"
      borderColor="white"
      borderRadius="5px"
      size = {['sm','md','lg']}
    >
      <StatNumber fontSize={["md", "lg", "3xl"]}>1342</StatNumber>
      <StatHelpText fontSize={["sm", "md", "xl"]}>
        <IconButton
          size="sm"
          fontSize="sm"
          aria-label={`departure flight`}
          variant="ghost"
          color="current"
          icon={<FaPlaneDeparture />}
        />
        - 1132
        <br />
        <IconButton
          size="sm"
          fontSize="sm"
          aria-label={`departure flight`}
          variant="ghost"
          color="current"
          icon={<FaPlaneArrival />}
        />{' '}
        - 254
      </StatHelpText>
    </Stat>
  );
}


function RowHeadings({ heading, icon, bgColor }) {
  return (
    <Text 
    fontSize="lg"
    align="center"
    py="3"
    bg={bgColor}
    whiteSpace="nowrap"
    wordBreak="revert"
>
      <IconButton
        size="lg"
        fontSize="lg"
        aria-label={`departure flight`}
        variant="ghost"
        color="current"
        icon={icon}
      />
      {heading}
    </Text>
  );
}
function App() {
  // const highlightColor = useColorModeValue('blue.200', 'blue.800');
  const highlightColor = useColorModeValue('white', 'white');

  return (
    <>
      <ColorModeSwitcher position="fixed" right="2" bottom="2" />

      <Grid templateColumns="repeat(5, 1fr)" w="100%" rowGap={0}>
        <RowHeadings
          heading="KLIA"
          icon={<FaBuilding />}
          bgColor='blue.200'
        />

        <RowHeadings heading="0000-0800" icon={<FaCloudSun />} />
        <RowHeadings
          heading="0800-1500"
          icon={<FaSun />}
          bgColor={highlightColor}
        />
        <RowHeadings heading="1500-2100" icon={<FaCloudMoon />} />
        <RowHeadings heading="2100-2400" icon={<FaMoon />} />

        <RowHeadings heading="PAX flight" icon={<FaPlane />} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <RowHeadings heading="PAX" icon={<FaUsers />} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <RowHeadings heading="Cargo flight" icon={<FaTruckLoading />} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
        <RowHeadings heading="P Mover" icon={<FaBus />} />
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.8} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.5}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.7} percentage={0.3}/>
        <RowHeadings heading="P BB" icon={<FaBus />} />
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.8} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.7} percentage={0.3}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.5}/>
        <RowHeadings heading="P Vroom" icon={<FaRestroom />} />
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.5}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.8} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.7} percentage={0.3}/>
        <RowHeadings heading="KATS" icon={<FaTrain />} />
        <GaugeDemo bgColor={highlightColor} arcLim={0.8} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.7} percentage={0.3}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.5}/>

        <RowHeadings
          heading="Departure"
          icon={<FaPlaneDeparture />}
          bgColor='blue.200'
        />
        <RowHeadings heading="0000-0800" icon={<FaCloudSun />} />
        <RowHeadings
          heading="0800-1500"
          icon={<FaSun />}
          bgColor={highlightColor}
        />
        <RowHeadings heading="1500-2100" icon={<FaCloudMoon />} />
        <RowHeadings heading="2100-2400" icon={<FaMoon />} />

        <RowHeadings heading="Check In" icon={<FaMoneyCheck />} />
        <GaugeDemo bgColor={highlightColor} arcLim={0.8} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.7} percentage={0.3}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.5}/>
        <RowHeadings heading="Security" icon={<FaShieldAlt />} />
        <GaugeDemo bgColor={highlightColor} arcLim={0.8} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.7} percentage={0.3}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.5}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.6}/>
        <RowHeadings heading="Immigration" icon={<FaPassport />} />
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.8} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.7} percentage={0.3}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.5}/>
        <RowHeadings
          heading="Arrival"
          icon={<FaPlaneArrival />}
          bgColor='blue.200'
        />

        <RowHeadings heading="0000-0800" icon={<FaCloudSun />} />
        <RowHeadings
          heading="0800-1500"
          icon={<FaSun />}
          bgColor={highlightColor}
        />
        <RowHeadings heading="1500-2100" icon={<FaCloudMoon />} />
        <RowHeadings heading="2100-2400" icon={<FaMoon />} />
        <RowHeadings heading="Immigration" icon={<FaPassport />} />
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.5}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.8} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.7} percentage={0.3}/>
        <RowHeadings heading="Luggage Claim" icon={<FaLuggageCart />} />
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.8} percentage={0.6}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.7} percentage={0.3}/>
        <GaugeDemo bgColor={highlightColor} arcLim={0.5} percentage={0.5}/>
      </Grid>
    </>
  );
}

export default App;
