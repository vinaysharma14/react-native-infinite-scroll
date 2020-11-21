import React, { FC } from 'react';

import {
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FONT_FAMILY } from '../../assets';

interface Props {
  onSubmit: (
    value: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
}

export const Search: FC<Props> = ({ onSubmit }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      autoCapitalize="words"
      selectionColor={'#333'}
      onSubmitEditing={onSubmit}
      placeholderTextColor="#555"
      placeholder="Search your connections"
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
    marginBottom: 40,
    shadowOpacity: 0.3,
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 0 },
  },
  input: {
    fontFamily: FONT_FAMILY.MontserratMedium,
  },
});
