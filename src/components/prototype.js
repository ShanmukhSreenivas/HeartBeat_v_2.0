import React, {useState, useEffect} from 'react';
import {
  IconButton,
  Grid,
  Text,
  useColorModeValue,
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
} from 'react-icons/fa';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Gauge from './gauge_final'


const stringConverter = (num) => {
  num=num.toString();
  var lastThree = num.substring(num.length-3);
  var otherNumbers = num.substring(0,num.length-3);
  if(otherNumbers != '')
      lastThree = ',' + lastThree;
  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return res
  }
function StatCard({ bgColor }) {
  return (
    <Stat 
      align="center"
      bg={bgColor}
      py="2"
      size = {['sm','md','lg']}
      marginLeft='30px'
    >
      <StatNumber fontSize={["md", "lg", "3xl"]}>{stringConverter(1342)}</StatNumber>
      <StatHelpText fontSize={["sm", "md", "xl"]}>
        <IconButton
          size="sm"
          fontSize="sm"
          aria-label={`departure flight`}
          variant="ghost"
          color="current"
          icon={<FaPlaneDeparture style={{color:'#015da9'}}/>}
        />
        {stringConverter(1132)}
        <br />
        <IconButton
          size="sm"
          fontSize="sm"
          aria-label={`departure flight`}
          variant="ghost"
          color="current"
          icon={<FaPlaneArrival style={{color:'#015da9'}}/>}
        />{' '}
        {stringConverter(254)}
      </StatHelpText>
    </Stat>
  );
}


function RowHeadings({ heading, icon, bgColor }) {
  return (
    <Text 
    fontSize="lg"
    align='left'
    py="3"
    bg={bgColor}
    whiteSpace="nowrap"
    wordBreak="revert"
    borderRadius='5px'

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
function TimeHeadings({ heading, icon, bgColor }) {
  return (
    <Text 
    fontSize="lg"
    align='center'
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

function Prototype({ handleCallback }) {

  const [screenwidth,setScreenWidth] = useState()
  // const highlightColor = useColorModeValue('blue.200', 'blue.800');
  const highlightColor = useColorModeValue('white', 'black');
  const textColor = useColorModeValue('black', 'white');

  useEffect(()=> {
    setScreenWidth(window.innerWidth)
    handleCallback(screenwidth)
  });


  return (
    <>
      <ColorModeSwitcher position="fixed" right="2" bottom="2" />

      <Grid templateColumns="repeat(5, 1fr)" w="100%" rowGap={0}>
        <RowHeadings
          heading="KLIA"
          icon={<FaBuilding />}
          bgColor='blue.200'
        />

        <TimeHeadings heading="0000-0800" icon={<FaCloudSun style={{color:'#015da9'}}/>} />
        <TimeHeadings heading="0800-1500" icon={<FaSun style={{color:'#015da9'}}/>} />
        <TimeHeadings heading="1500-2100" icon={<FaCloudMoon style={{color:'#015da9'}}/>} />
        <TimeHeadings heading="2100-2400" icon={<FaMoon style={{color:'#015da9'}}/>} />

        <RowHeadings heading="PAX flight" icon={<FaPlane style={{color:'#015da9'}}/>} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <RowHeadings heading="PAX" icon={<FaUsers style={{color:'#015da9'}}/>} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <RowHeadings heading="Cargo flight" icon={<FaTruckLoading style={{color:'#015da9'}}/>} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
          <StatCard statNumber={1342} />
        <RowHeadings heading="P Mover" icon={<FaBus style={{color:'#015da9'}}/>} />
              <Gauge min={0} max={303} lim={250} value={250} />
              <Gauge min={0} max={303} lim={200} value={250} />
              <Gauge min={0} max={303} lim={200} value={190} />
              <Gauge min={0} max={303} lim={200} value={260} />
        <RowHeadings heading="P BB" icon={<FaBus style={{color:'#015da9'}}/>} />
        <Gauge min={0} max={78} lim={70} value={75}/>
              <Gauge min={0} max={78} lim={60} value={75}/>
              <Gauge min={0} max={78} lim={60} value={55}/>
              <Gauge min={0} max={78} lim={73} value={75}/>
        <RowHeadings heading="P Vroom" icon={<FaRestroom style={{color:'#015da9'}}/>} />
        <Gauge min={0} max={129} lim={120} value={60}/>
              <Gauge min={0} max={129} lim={90} value={60}/>
              <Gauge min={0} max={129} lim={90} value={60}/>
              <Gauge min={0} max={129} lim={120} value={125}/>
        <RowHeadings heading="KATS" icon={<FaTrain style={{color:'#015da9'}}/>} />
        <Gauge min={0} max={129} lim={120} value={60}/>
              <Gauge min={0} max={129} lim={120} value={125}/>
              <Gauge min={0} max={129} lim={90} value={60}/>
              <Gauge min={0} max={129} lim={90} value={60}/>

        <RowHeadings
          heading="Departure"
          icon={<FaPlaneDeparture />}
          bgColor='blue.200'
        />
        <TimeHeadings heading="0000-0800" icon={<FaCloudSun style={{color:'#015da9'}}/>} />
        <TimeHeadings heading="0800-1500" icon={<FaSun style={{color:'#015da9'}}/>} />
        <TimeHeadings heading="1500-2100" icon={<FaCloudMoon style={{color:'#015da9'}}/>} />
        <TimeHeadings heading="2100-2400" icon={<FaMoon style={{color:'#015da9'}}/>} />

        <RowHeadings heading="Check In" icon={<FaMoneyCheck style={{color:'#015da9'}}/>} />
        <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
        <RowHeadings heading="Security" icon={<FaShieldAlt style={{color:'#015da9'}}/>} />
        <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
        <RowHeadings heading="Immigration" icon={<FaPassport style={{color:'#015da9'}}/>} />
        <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
        <RowHeadings
          heading="Arrival"
          icon={<FaPlaneArrival />}
          bgColor='blue.200'
        />

        <TimeHeadings heading="0000-0800" icon={<FaCloudSun style={{color:'#015da9'}}/>} />
        <TimeHeadings heading="0800-1500" icon={<FaSun style={{color:'#015da9'}}/>} />
        <TimeHeadings heading="1500-2100" icon={<FaCloudMoon style={{color:'#015da9'}}/>} />
        <TimeHeadings heading="2100-2400" icon={<FaMoon style={{color:'#015da9'}}/>} />
        <RowHeadings heading="Immigration" icon={<FaPassport style={{color:'#015da9'}}/>} />
              <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
        <RowHeadings heading="Luggage Claim" icon={<FaLuggageCart style={{color:'#015da9'}}/>} />
        <Gauge min={0} max={303} lim={250} value={250}/>
              <Gauge min={0} max={303} lim={200} value={250}/>
              <Gauge min={0} max={303} lim={200} value={190}/>
              <Gauge min={0} max={303} lim={200} value={260}/>
      </Grid>
    </>
  );
}

export default Prototype;
