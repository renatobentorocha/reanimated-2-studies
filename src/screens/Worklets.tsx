import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  runOnUI,
  runOnJS,
} from 'react-native-reanimated';
import { ReText } from 'react-native-redash';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#3434c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const formatDatetime = (datetime: Date) => {
  'worklet';
  return `${datetime.getFullYear()}-${
    datetime.getMonth() + 1
  }-${datetime.getDate()} ${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
};

const sayHello = (
  text: Animated.SharedValue<string>,
  from: string,
  cb: () => void
) => {
  'worklet';
  text.value = `Hello from ${from}(${Platform.OS}) at ${formatDatetime(
    new Date()
  )}`;
  runOnJS(cb)();
};

const Worklets = () => {
  const [jsText, setJsText] = useState('');
  const text = useSharedValue('');
  const sayHelloOnTheJSThread = () =>
    setJsText(`Hello world at ${formatDatetime(new Date())}`);
  return (
    <View style={styles.container}>
      <Text>JS thread says:</Text>
      <Text>{jsText}</Text>
      <Text>UI thread says:</Text>
      <ReText {...{ text }} />
      <Pressable
        style={styles.button}
        onPress={() =>
          runOnUI(sayHello)(
            text,
            'Beautiful Zuerich Switzerland',
            sayHelloOnTheJSThread
          )
        }
      >
        <Text style={{ color: 'white' }}>Say heelo</Text>
      </Pressable>
    </View>
  );
};

export { Worklets };
