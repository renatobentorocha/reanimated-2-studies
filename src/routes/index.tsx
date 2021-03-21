import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Worklets } from '../screens/Worklets';
import { HomeScreen } from '../screens/Home';
import PanGesture from '../screens/PanGesture';
import Transitions from '../screens/Transitions/Transitions';

export type RootStackParamList = {
  Home: undefined;
  Worklets: undefined;
  PanGesture: undefined;
  Transitions: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Worklets" component={Worklets} />
        <Stack.Screen name="PanGesture" component={PanGesture} />
        <Stack.Screen name="Transitions" component={Transitions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { Route };
