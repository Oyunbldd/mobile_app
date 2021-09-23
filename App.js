import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';

const App = () => {
  const translation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(translation, {
        toValue: {x: 290, y: 350},
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(translation, {
        toValue: {x: 0, y: 650},
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translation]);
  return (
    <SafeAreaView>
      <Animated.View
        style={[
          styles.animation,
          {
            transform: [
              {translateX: translation.x},
              {translateY: translation.y},
            ],
          },
        ]}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  animation: {backgroundColor: 'deeppink', height: 100, width: 100},
});
export default App;
