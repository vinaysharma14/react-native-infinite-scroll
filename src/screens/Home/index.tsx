import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Text,
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

import { State } from '../../store';
import { FONT_FAMILY } from '../../assets';
import { Card, LoadingCard, Search } from '../../components';
import { LAZY_LOAD_PLACEHOLDER_COUNT } from '../../constants';

import {
  fetchConnectionsReqAction,
  searchConnectionsReqAction,
} from '../../store/actions/connections';

export const Home = () => {
  const {
    connections,
    fetchErrMsg,
    fetchingConnections,
    searchingConnections,
  } = useSelector(({ connectionsReducer }: State) => connectionsReducer);

  const dispatch = useDispatch();

  const handleSearch = useCallback(
    ({ nativeEvent }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) =>
      dispatch(searchConnectionsReqAction(nativeEvent.text, connections)),
    [dispatch, connections],
  );

  const handleConnectionsFetch = useCallback(
    () => dispatch(fetchConnectionsReqAction(50)),
    [dispatch],
  );

  useEffect(() => {
    handleConnectionsFetch();
  }, [handleConnectionsFetch]);

  const showListSkeleton = useMemo(() => {
    return searchingConnections || (fetchingConnections && !connections);
  }, [searchingConnections, fetchingConnections, connections]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.subContainer]}>
        <Search onSubmit={handleSearch} />

        {/* error message if API fails with a prompt to try again*/}
        {fetchErrMsg && !showListSkeleton && (
          <View style={styles.errorContainer}>
            <Text style={styles.regularFont}>
              We are unable to fetch results for you, please check your network
              connection. Connect to a nearby WiFi or a mobile network.
            </Text>

            <TouchableOpacity
              style={styles.tryAgain}
              onPress={handleConnectionsFetch}
            >
              <Text style={styles.regularFont}>Try Again</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* connection cards list */}
        {connections?.length && !showListSkeleton && (
          <FlatList
            data={connections}
            renderItem={({ item, index }) =>
              index >= connections.length - LAZY_LOAD_PLACEHOLDER_COUNT &&
              index <= connections.length - 1 ? (
                // placeholder cards for loading more cards
                // when user reaches end of the list
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
        )}

        {/* initial loading skeleton */}
        {showListSkeleton && (
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
  errorContainer: {
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
