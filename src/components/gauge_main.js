// import { Chart } from "react-google-charts";
import { Center,useColorModeValue } from '@chakra-ui/react';
import GaugeChart from 'react-gauge-chart';
export default function GaugeDemo({ bgColor ,arcLim, percentage}) {
  const memory = 60;
  const textColor = useColorModeValue('black', 'white');
// green color code : #5BE12C   #f05e1b

  const arcLen = [arcLim,1-arcLim]
  const arcCol = (arcLen,percentage) => {
    if(arcLen[0] < percentage){
      return ['red','#edeceb']
    }
    else if(arcLen[0] == percentage){
      return ['green','#edeceb']
    }
    else{
      return ['#ff7e00','#edeceb']
    }
  }
  return (
    <Center align="center" bg={bgColor} py="3">
      <GaugeChart
      style={{width:'70%'}}
        id="gauge-chart5"
        nrOfLevels={420}
        arcsLength={arcLen}
        colors={arcCol(arcLen,percentage)}
        percent={percentage}
        needleColor={'white'}
        needleBaseColor={'white'}
        textColor={textColor}
        arcPadding={0.02}
        marginInPercent={0.05}
        arcWidth={0.3}
        hideText={false}
        
      />
    </Center>
  );
}
