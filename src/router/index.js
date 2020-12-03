import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '~/pages/Main';

const Route = createStackNavigator();

export default () => {
  return (
    <Route.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Route.Screen name="Main" component={Main} />
    </Route.Navigator>
  );
};
