import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

export const LoadingCard = () => (
  <View style={styles.container}>
    {/* image */}
    <View style={[styles.bg, styles.image]} />

    <View style={styles.flex1}>
      <View style={styles.flex1}>
        {/* gender + show icon */}
        <View style={[styles.flex1, styles.bg, styles.mb5]} />

        {/* name + mobile + email */}
        <View style={[styles.flex1, styles.bg, styles.mb5]} />
        <View style={[styles.flex1, styles.bg, styles.mb5]} />
        <View style={[styles.flex1, styles.bg]} />
      </View>
    </View>
  </View>
);

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    flexDirection: 'row',
    height: height * 0.12,
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  image: {
    marginRight: 10,
    borderRadius: 5,
    width: height * 0.12 - 20,
  },
  flex1: {
    flex: 1,
  },
  mb5: {
    marginBottom: 5,
  },
  bg: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
});
