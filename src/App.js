import React  from 'react';
import {
  ChakraProvider,
  Box,
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

  return (
    <ChakraProvider theme={theme}>
      <span>
      <Header w="100%"/>
        <Tabs isFitted isLazy variant="enclosed">
          <TabList mb="1em">
            <Tab>KLIA</Tab>
            <Tab>klia2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Prototype />
            </TabPanel>
            <TabPanel>
              <Prototype />
            </TabPanel>
          </TabPanels>
        </Tabs>
        </span>
    </ChakraProvider>
  );
}

export default App;
