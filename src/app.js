import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Router from '~router';

const App = () => (
  <>
    <StatusBar backgroundColor="black" />
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  </>
);

export default App;
