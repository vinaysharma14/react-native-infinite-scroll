import React, { FC } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { FONT_FAMILY } from '../../assets';

import { Connection } from '../../types';

export const Card: FC<
  Pick<Connection, 'name' | 'cell' | 'email' | 'location' | 'thumbnail'>
> = ({ name, cell, email, location, thumbnail }) => (
  <View style={styles.container}>
    <Image source={{ uri: thumbnail }} style={styles.image} />

    <View style={styles.flex1}>
      <View style={styles.flex1}>
        <Text style={[styles.flex1, styles.mb5, styles.font]}>{name}</Text>
        <Text style={[styles.flex1, styles.mb5, styles.font]}>{cell}</Text>
        <Text style={[styles.flex1, styles.mb5, styles.font]}>{email}</Text>
        <Text style={[styles.flex1, styles.font]}>{location.country}</Text>
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
  font: {
    fontFamily: FONT_FAMILY.MontserratRegular,
  },
});
