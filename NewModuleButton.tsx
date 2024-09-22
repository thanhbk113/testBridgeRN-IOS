import React, {useEffect} from 'react';
import {NativeModules, Button, View, NativeEventEmitter} from 'react-native';

const {Counter} = NativeModules;

const CounterButton = () => {
  // console.log(Counter);
  // console.log(Counter.getConstants());
  // console.log(Counter.initialCount);

  const counterEvent = new NativeEventEmitter(Counter);

  useEffect(() => {
    const subscription = counterEvent.addListener(
      'onIncrement',
      (value: number) => console.log('event value onIncrement: ', value),
    );

    const subscription1 = counterEvent.addListener(
      'onDecrement',
      (value: number) => console.log('event value onDecrement: ', value),
    );

    return () => {
      subscription.remove();
      subscription1.remove();
    };
  });
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
