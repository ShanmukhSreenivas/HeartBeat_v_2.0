import React from 'react';
import {
  IconButton,
  Grid,
  Text,
  useColorModeValue,
  Divider,
  Heading,
  GridItem,
  Flex,
  AspectRatio,
  Container,
  Spacer
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
  FaRestroom
} from 'react-icons/fa';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Gauge from './gauge_final'

import GaugeDemo from './gauge_main';

const highColor = statNum => {
  if (statNum > 1342) {
    return ['green'];
  } else if (statNum == 1342) {
    return ['red'];
  } else {
    return ['#ff7e00'];
  }
};

function StatCard({ bgColor, statNumber }) {
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
      <StatNumber fontSize={["md", "lg", "2xl"]}>1342</StatNumber>
      <StatHelpText fontSize={["sm", "md", "lg"]}>
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
function StatCard_Arrival({ bgColor, statNumber }) {
  return (
    <Stat
      align="center"
      bg={bgColor}
      py="3"
      border="2px"
      borderColor="white"
      borderRadius="5px"
    >
      <StatNumber fontSize="xl">{statNumber}</StatNumber>
    </Stat>
  );
}

function StatCard_Depature({ bgColor, statNumber }) {
  return (
    <Stat
      align="center"
      bg={bgColor}
      py="3"
      border="2px"
      borderColor="white"
      borderRadius="5px"
    >
      <StatNumber fontSize="xl">{statNumber}</StatNumber>
    </Stat>
  );
}
function RowHeadings({ heading, icon, bgColor }) {
  return (
    <Text
      fontSize={['md','md','md']}
      align="center"
      py="3"
      bg={bgColor}
      whiteSpace="nowrap"
      wordBreak="revert"
    >
      <IconButton
        fontSize="lg"
        aria-label={`departure flight`}
        variant="ghost"
        color="current"
        icon={icon}
        size={['sm','sm','sm']}
        marginRight='5px'
      />
      {heading}
    </Text>
  );
}
function App() {
  // const highlightColor = useColorModeValue('blue.200', 'blue.800');
  const highlightColor = useColorModeValue('white', 'white');

  return (
    <Flex
      direction='row'
    >
        <Grid
          templateColumns="repeat(5, 1fr)" rowGap={0} columnGap={0} >
          <RowHeadings
            heading="KLIA"
            icon={<FaBuilding />}
            bgColor="blue.200"
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
              <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
          <RowHeadings heading="P BB" icon={<FaBus />} />
          <Gauge min={0} max={78} lim={70} value={75}/>
              <Gauge min={0} max={78} lim={60} value={75}/>
              <Gauge min={0} max={78} lim={60} value={55}/>
              <Gauge min={0} max={78} lim={73} value={75}/>
          <RowHeadings heading="P Vroom" icon={<FaRestroom />} />
          <Gauge min={0} max={129} lim={120} value={60}/>
              <Gauge min={0} max={129} lim={90} value={60}/>
              <Gauge min={0} max={129} lim={90} value={60}/>
              <Gauge min={0} max={129} lim={120} value={125}/>
          <RowHeadings heading="KATS" icon={<FaTrain />} />
          <Gauge min={0} max={129} lim={120} value={60}/>
              <Gauge min={0} max={129} lim={120} value={125}/>
              <Gauge min={0} max={129} lim={90} value={60}/>
              <Gauge min={0} max={129} lim={90} value={60}/>
        </Grid>
        
        <Flex direction='column'> 
        <Grid templateColumns="repeat(5, 1fr)" rowGap={0}>
          <RowHeadings
            heading="Arrival"
            icon={<FaPlaneArrival />}
            bgColor="blue.200"
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
          <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
          <RowHeadings heading="Luggage Claim" icon={<FaLuggageCart />} />
          <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" w="100%" rowGap={0}>
          <RowHeadings
            heading="Departure"
            icon={<FaPlaneDeparture />}
            bgColor="blue.200"
            borderRadius="55px"
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
          <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
          <RowHeadings heading="Security" icon={<FaShieldAlt />} />
          <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
          <RowHeadings heading="Immigration" icon={<FaPassport />} />
          <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
        </Grid>
        </Flex>
    </Flex>
   );
}

export default App;
