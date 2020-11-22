import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { FONT_FAMILY } from '../../assets';

interface Props {
  label: string;
  handler?: () => void;
}

export const Error: FC<Props> = ({ label, handler }) => (
  <View style={styles.container}>
    <Text style={styles.regularFont}>{label}</Text>

    {handler && (
      <TouchableOpacity style={styles.tryAgain} onPress={handler}>
        <Text style={styles.regularFont}>Try Again</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  regularFont: {
    fontFamily: FONT_FAMILY.MontserratRegular,
  },
  tryAgain: {
    padding: 5,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
