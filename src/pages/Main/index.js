import React from 'react';

import {Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '~components/Home';

import CustomTabBar from '../../components/CustomTabBar';

export default () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
