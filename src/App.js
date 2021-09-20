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
  const [height, setHeight] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)

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
              {width > height ? <Prototype_Single /> : <Prototype />}
            </TabPanel>
            <TabPanel>
            {width > height ? <Prototype_Single /> : <Prototype />}
            </TabPanel>
          </TabPanels>
        </Tabs>
        </span>
    </ChakraProvider>
  );
}

export default App;
