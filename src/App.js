import React, { useState }  from 'react';
import {
  ChakraProvider,
  theme,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Header from './components/header'
import Prototype from './components/prototype';



function App() {

  const [width,setWidth] = useState()

  return (
    <ChakraProvider theme={theme}>
      <span>
      <Header style={{width:width}}/>
        <Tabs isFitted isLazy variant="enclosed" style={{width:width}} colorScheme='yellow'>
          <TabList mb="1em">
            <Tab style={{fontSize:'20px'}}>KLIA</Tab>
            <Tab style={{fontSize:'20px'}}>klia2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Prototype handleCallback={screenwidth => setWidth(screenwidth)} />
            </TabPanel>
            <TabPanel>
              <Prototype handleCallback={screenwidth => setWidth(screenwidth)}/>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </span>
    </ChakraProvider>
  );
}

export default App;
