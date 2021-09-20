import React from 'react'

import {
Flex,
Text,
Box,
Center,
useColorModeValue,
IconButton,
Stat,
StatNumber,
StatHelpText,
Grid,
GridItem
} from '@chakra-ui/react'
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
  } from 'react-icons/fa';
import GaugeDemo from './gauge_main';
import Gauge from './gauge_final'


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
        <StatNumber fontSize={[ "md", "lg", "2xl"]}>1342</StatNumber>
        <StatHelpText fontSize={["sm", "md", "md"]}>
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
        return(
          <Grid 
            width="-webkit-max-content" 
            flexWrap='wrap' 
            templateRows="repeat(2, 1fr)" 
            templateColumns="repeat(2, 0fr)"
            gap={0}
            autoFlow='column'      
          >
            <GridItem
              rowSpan={2}
              colSpan={1}
            >
              <Grid templateColumns="repeat(5, 1fr)">
                <RowHeadings
                heading="KLIA"
                icon={<FaBuilding />}
                bgColor="blue.300"
              />

              <RowHeadings heading="0000-0800" icon={<FaCloudSun />} />
              <RowHeadings heading="0800-1500" icon={<FaSun />} bgColor={highlightColor} />
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
              <RowHeadings heading="P Vroom" icon={<FaBus />} />
              <Gauge min={0} max={129} lim={120} value={60}/>
              <Gauge min={0} max={129} lim={90} value={60}/>
              <Gauge min={0} max={129} lim={90} value={60}/>
              <Gauge min={0} max={129} lim={120} value={125}/>
              <RowHeadings heading="KATS" icon={<FaBus />} />
              <Gauge min={0} max={129} lim={120} value={60}/>
              <Gauge min={0} max={129} lim={120} value={125}/>
              <Gauge min={0} max={129} lim={90} value={60}/>
              <Gauge min={0} max={129} lim={90} value={60}/>
              </Grid>
          </GridItem>
          <GridItem >
            <Grid templateColumns="repeat(5, 1fr)">
                    <RowHeadings
            heading="Arrival"
            icon={<FaPlaneArrival />}
            bgColor={highlightColor}
            bgColor="blue.300"
          />

          <RowHeadings heading="0000-0800" icon={<FaCloudSun />} />
          <RowHeadings
            heading="0800-1500"
            icon={<FaSun />}
            bgColor={highlightColor}
          />
          <RowHeadings heading="1500-2100" icon={<FaCloudMoon />} />
          <RowHeadings heading="2100-2400" icon={<FaMoon />} />

          <RowHeadings heading="Immigration" icon={<FaBus />} />
          <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
          <RowHeadings heading="Luggage Claim" icon={<FaBus />} />
          <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
          </Grid>
          <Grid templateColumns="repeat(5, 1fr)" autoColumns='auto'>
                    <RowHeadings
            heading="Departure"
            icon={<FaPlaneDeparture />}
            bgColor={highlightColor}
            bgColor="blue.300"
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

          <RowHeadings heading="Check In" icon={<FaBus />} />
          <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
          <RowHeadings heading="Security" icon={<FaBus />} />
          <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
          <RowHeadings heading="Immigration" icon={<FaBus />} />
          <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
          </Grid>
          </GridItem>
          </Grid>
        );
  }

  export default App;