import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';
import { TouchableOpacity, View, Text } from 'react-native';

type WorkletsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Worklets'
>;

type Props = {
  navigation: WorkletsScreenNavigationProp;
};

export function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ width: '100%' }}>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
    </View>
  );
}
