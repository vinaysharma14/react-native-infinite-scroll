import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native';

import { LoadingCard, Search } from '../../components';
import { fetchConnectionsReqAction } from '../../store/actions/connections';

export const Home = () => {
  const dispatch = useDispatch();
  const handleSearch = useCallback((value: string) => console.log(value), []);

  useEffect(() => {
    dispatch(fetchConnectionsReqAction(50));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.subContainer]}>
        <Search onChange={handleSearch} />

        <FlatList
          keyExtractor={(item) => item}
          contentContainerStyle={styles.list}
          renderItem={() => <LoadingCard />}
          showsVerticalScrollIndicator={false}
          data={[...Array(10).keys()].map((i: number) => String(i))}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
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
    paddingTop: 20,
  },
  separator: {
    height: 20,
  },
  list: {
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
});
