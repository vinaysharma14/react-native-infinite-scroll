import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import { SCREENS, SPLASH_TIMEOUT } from '../../constants';
import LottieJSON from '../../assets/animations/lottie.json';

export const Splash = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      // navigate to home screen after "SPLASH_TIMEOUT" milliseconds
      navigate(SCREENS.home);
    }, SPLASH_TIMEOUT);
  }, [navigate]);

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
  },
});
