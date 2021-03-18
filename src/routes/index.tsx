import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Worklets } from '../screens/Worklets';
import { HomeScreen } from '../screens/Home';

export type RootStackParamList = {
  Home: undefined;
  Worklets: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Worklets" component={Worklets} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { Route };
