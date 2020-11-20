import React, { useCallback } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Search } from '../../components';

export const Home = () => {
  const handleSearch = useCallback((value: string) => console.log(value), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.subContainer]}>
        <Search onChange={handleSearch} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    padding: 20,
  },
});
