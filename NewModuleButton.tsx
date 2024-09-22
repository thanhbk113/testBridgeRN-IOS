import React from 'react';
import {NativeModules, Button, View} from 'react-native';

const {Counter} = NativeModules;

const CounterButton = () => {
  console.log(Counter);
  console.log(Counter.getConstants());
  console.log(Counter.initialCount);
  const onPress = () => {
    Counter.increment((value: number) => console.log('calback value: ', value));
  };
  const decrement = () => {
    Counter.decrement()
      .then((value: number) => console.log('promise value: ', value))
      .catch((e: any) => console.log(e));
  };

  return (
    <View>
      <Button title="Increment" onPress={onPress} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export default CounterButton;
