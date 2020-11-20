import React, { FC, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Lottie from 'lottie-react-native';

import { Navigation } from '../../types';
import { SCREENS, SPLASH_TIMEOUT } from '../../constants';
import LottieJSON from '../../assets/animations/lottie.json';

interface Props {
  navigation: Navigation;
}

export const Splash: FC<Props> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // replaces splash by home screen after "SPLASH_TIMEOUT" milliseconds
      navigation.replace(SCREENS.home);
    }, SPLASH_TIMEOUT);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={StyleSheet.absoluteFill}>
          <Lottie source={LottieJSON} autoPlay loop />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
