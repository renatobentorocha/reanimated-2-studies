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
