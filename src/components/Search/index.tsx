import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FONT_FAMILY } from '../../assets';

interface Props {
  onChange: (value: string) => void;
}

export const Search: FC<Props> = ({ onChange }) => (
  <View style={styles.container}>
    <TextInput
      placeholder="Search"
      style={styles.input}
      autoCapitalize="words"
      selectionColor={'#333'}
      onChangeText={onChange}
      placeholderTextColor="#555"
    />

    <MaterialCommunityIcon size={20} name="magnify" color="#555" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 15,
    elevation: 10,
    shadowRadius: 5,
    borderRadius: 5,
    shadowOpacity: 0.3,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 0 },
  },
  input: {
    fontFamily: FONT_FAMILY.MontserratMedium,
  },
});
