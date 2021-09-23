import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Easing,
} from 'react-native';

const App = () => {
  const translation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(translation, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(translation, {
        toValue: 1,
        duration: 900,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(translation, {
        toValue: 2,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.timing(translation, {
        toValue: 3,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.timing(translation, {
        toValue: 4,
        duration: 900,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translation]);
  const spin = translation.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: ['0deg', '90deg', '180deg', '270deg', '360deg'],
  });
  return (
    <SafeAreaView>
      <Animated.View
        style={[
          styles.animation,
          {
            transform: [{rotateY: spin}],
          },
        ]}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  animation: {
    backgroundColor: 'deeppink',
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 100,
  },
});
export default App;
