import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Worklets } from '../screens/Worklets';
import { HomeScreen } from '../screens/Home';
import PanGesture from '../screens/PanGesture';
import Transitions from '../screens/Transitions/Transitions';
import { ChatBubbleAnimation } from '../screens/Animations/Bubble';
import { CircularSlider } from '../screens/CircularSlider';
import { Graph } from '../screens/Graph';
import { Swipe } from '../screens/Swiping';
import DynamicSpring from '../screens/DynamicSpring';
import { DragToSort } from '../screens/DragToSort';
import { Bezier } from '../screens/Bezier';
import { ShapeMorphing } from '../screens/ShapeMorphing';

export type RootStackParamList = {
  Home: undefined;
  Worklets: undefined;
  PanGesture: undefined;
  Transitions: undefined;
  ChatBubbleAnimation: undefined;
  CircularSlider: undefined;
  Graph: undefined;
  Swipe: undefined;
  DynamicSpring: undefined;
  DragToSort: undefined;
  Bezier: undefined;
  ShapeMorphing: undefined;
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
        <Stack.Screen
          name="ChatBubbleAnimation"
          component={ChatBubbleAnimation}
        />
        <Stack.Screen name="CircularSlider" component={CircularSlider} />
        <Stack.Screen name="Graph" component={Graph} />
        <Stack.Screen name="Swipe" component={Swipe} />
        <Stack.Screen name="DynamicSpring" component={DynamicSpring} />
        <Stack.Screen name="DragToSort" component={DragToSort} />
        <Stack.Screen name="Bezier" component={Bezier} />
        <Stack.Screen name="ShapeMorphing" component={ShapeMorphing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { Route };
