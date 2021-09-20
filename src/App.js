import React ,{useState, useEffect} from 'react';
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
import Prototype_Single from './components/prototype_single_page';
import Prototype from './components/prototype';
import Prototype_side from './components/prototype_side';



function App() {

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
    console.log(width)
  })
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
              {width > '1366' ? <Prototype_Single /> : <Prototype />}
            </TabPanel>
            <TabPanel>
            {width > '1366' ? <Prototype_Single /> : <Prototype />}
            </TabPanel>
          </TabPanels>
        </Tabs>
        </span>
    </ChakraProvider>
  );
}

export default App;
