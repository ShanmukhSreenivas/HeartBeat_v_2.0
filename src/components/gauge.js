import { Chart } from "react-google-charts";
import { Center} from '@chakra-ui/react';

export default function GaugeDemo({bgColor}){
    const memory = 60
    
    return(
        <Center align="center" bg={bgColor} py="3">
        <Chart
        width={100}
        height={100}
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        data={[
          ['Label', 'Value'],
          ['', memory]
        ]}
        options={{
          redFrom: 90,
          redTo: 100,
          yellowFrom: 75,
          yellowTo: 90,
          minorTicks: 5,
        }}
        rootProps={{ 'data-testid': '1' }}
      />
      </Center>
    )
}