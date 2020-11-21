import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native';

import { State } from '../../store';
import { Card, LoadingCard, Search } from '../../components';
import { LAZY_LOAD_PLACEHOLDER_COUNT } from '../../constants';
import { fetchConnectionsReqAction } from '../../store/actions/connections';

export const Home = () => {
  const { connections } = useSelector(
    ({ connectionsReducer }: State) => connectionsReducer,
  );

  const dispatch = useDispatch();
  const handleSearch = useCallback((value: string) => console.log(value), []);

  const handleConnectionsFetch = useCallback(
    () => dispatch(fetchConnectionsReqAction(50)),
    [dispatch],
  );

  useEffect(() => {
    handleConnectionsFetch();
  }, [handleConnectionsFetch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.subContainer]}>
        <Search onChange={handleSearch} />

        {connections?.length ? (
          <FlatList
            data={connections}
            renderItem={({ item, index }) =>
              index >= connections.length - LAZY_LOAD_PLACEHOLDER_COUNT &&
              index <= connections.length - 1 ? (
                <LoadingCard />
              ) : (
                <Card
                  name={item.name}
                  cell={item.cell}
                  email={item.email}
                  location={item.location}
                  thumbnail={item.thumbnail}
                />
              )
            }
            onEndReachedThreshold={1}
            keyExtractor={({ email }) => email}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            onEndReached={handleConnectionsFetch}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        ) : (
          <FlatList
            keyExtractor={(item) => item}
            contentContainerStyle={styles.list}
            renderItem={() => <LoadingCard />}
            showsVerticalScrollIndicator={false}
            data={[...Array(10).keys()].map((i: number) => String(i))}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        )}
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
