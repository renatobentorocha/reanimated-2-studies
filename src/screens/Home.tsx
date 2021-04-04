import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';

import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';

type WorkletsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Worklets'
>;

type Props = {
  navigation: WorkletsScreenNavigationProp;
};

const { width } = Dimensions.get('window');

export function HomeScreen({ navigation }: Props) {
  const items = () => [
    <TouchableOpacity
      key={1}
      style={{
        width: '100%',
        height: 55,
        backgroundColor: '#3a3ad1',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.navigate('Worklets')}
    >
      <Text style={{ color: 'white' }}>Worklets & Shared Values</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      key={2}
      style={{
        width: '100%',
        height: 55,
        backgroundColor: '#3a3ad1',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.navigate('PanGesture')}
    >
      <Text style={{ color: 'white' }}>Pan Gesture</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      key={3}
      style={{
        width: '100%',
        height: 55,
        backgroundColor: '#3a3ad1',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.navigate('Transitions')}
    >
      <Text style={{ color: 'white' }}>Transitions</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      key={4}
      style={{
        width: '100%',
        height: 55,
        backgroundColor: '#3a3ad1',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.navigate('ChatBubbleAnimation')}
    >
      <Text style={{ color: 'white' }}>Higher-order Animations</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      key={5}
      style={{
        width: '100%',
        height: 55,
        backgroundColor: '#3a3ad1',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.navigate('CircularSlider')}
    >
      <Text style={{ color: 'white' }}>Circular Slider</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      key={6}
      style={{
        width: '100%',
        height: 55,
        backgroundColor: '#3a3ad1',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.navigate('Graph')}
    >
      <Text style={{ color: 'white' }}>Graph</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      key={7}
      style={{
        width: '100%',
        height: 55,
        backgroundColor: '#3a3ad1',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.navigate('Swipe')}
    >
      <Text style={{ color: 'white' }}>Swipe</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      key={8}
      style={{
        width: '100%',
        height: 55,
        backgroundColor: '#3a3ad1',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.navigate('DynamicSpring')}
    >
      <Text style={{ color: 'white' }}>Dynamic Spring</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      key={9}
      style={{
        width: '100%',
        height: 55,
        backgroundColor: '#3a3ad1',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.navigate('DragToSort')}
    >
      <Text style={{ color: 'white' }}>Drag To Sort</Text>
    </TouchableOpacity>,
  ];

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
        contentContainerStyle={{ width }}
        data={items()}
        renderItem={({ item }) => item}
      />
    </View>
  );
}
