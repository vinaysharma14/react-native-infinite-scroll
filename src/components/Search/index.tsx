import React, { FC, useCallback, useState } from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

import { useSelector } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { State } from '../../store';
import { FONT_FAMILY } from '../../assets';

interface Props {
  onClear: () => void;
  onSubmit: (value: string) => void;
}

export const Search: FC<Props> = ({ onSubmit, onClear }) => {
  const [value, setValue] = useState('');
  const [showSearchIcon, setShowSearchIcon] = useState(true);

  const { searchingConnections } = useSelector(
    ({ connectionsReducer }: State) => connectionsReducer,
  );

  const handleSubmit = useCallback(
    ({
      nativeEvent,
    }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
      onSubmit(nativeEvent.text);
      setShowSearchIcon(false);
    },
    [onSubmit],
  );

  const clearSearch = useCallback(() => {
    onClear();
    setValue('');
    setShowSearchIcon(true);
  }, [onClear]);

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        onChangeText={setValue}
        autoCapitalize="words"
        selectionColor={'#333'}
        onSubmitEditing={handleSubmit}
        placeholderTextColor="#555"
        placeholder="Search your connections"
      />

      {!searchingConnections && (
        <>
          {showSearchIcon ? (
            <MaterialCommunityIcon size={20} name="magnify" color="#555" />
          ) : (
            <TouchableOpacity onPress={clearSearch}>
              <MaterialCommunityIcon size={20} name="close" color="#555" />
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    elevation: 10,
    shadowRadius: 5,
    borderRadius: 5,
    marginBottom: 40,
    shadowOpacity: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 0 },
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    fontFamily: FONT_FAMILY.MontserratMedium,
  },
});
