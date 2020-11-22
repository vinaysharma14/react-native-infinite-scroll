import React, { useCallback, useMemo } from 'react';

import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';

import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import EvilIcon from 'react-native-vector-icons/EvilIcons';

import { State } from '../../store';
import { FONT_FAMILY } from '../../assets';

const { height, width } = Dimensions.get('window');

export const ConnectionDetails = () => {
  const { params } = useRoute();
  const { goBack } = useNavigation();

  const { connections } = useSelector(
    ({ connectionsReducer }: State) => connectionsReducer,
  );

  const handleBackNav = useCallback(() => {
    goBack();
  }, [goBack]);

  const connection = useMemo(
    // find connection details using email address
    () => {
      const result = connections?.find(({ email }) => email === params.email);

      if (result) {
        const { name, age, image, cell, phone, location, gender } = result;
        const { city, state, postcode, street } = location;

        return {
          age,
          name,
          image,
          // details have been segregated into sections
          details: [
            [
              { label: 'Gender', value: gender },
              { label: 'Mobile', value: cell },
              { label: 'Telephone', value: phone },
            ],
            [
              { label: 'Street', value: `#${street.number}, ${street.name}` },
              { label: 'City', value: city },
              { label: 'State', value: state },
              { label: 'Post', value: postcode },
            ],
            [
              { label: 'Gender', value: gender },
              { label: 'Mobile', value: cell },
              { label: 'Telephone', value: phone },
            ],
            [
              { label: 'Street', value: `#${street.number}, ${street.name}` },
              { label: 'City', value: city },
              { label: 'State', value: state },
              { label: 'Post', value: postcode },
            ],
          ],
        };
      }

      return {};
    },
    [params],
  );

  return (
    <SafeAreaView style={[styles.bgWhite, styles.flex1]}>
      <View style={[styles.pt20, styles.alignCenter]}>
        <TouchableOpacity style={styles.back} onPress={handleBackNav}>
          <EvilIcon size={40} name="chevron-left" color="#555" />
        </TouchableOpacity>

        <View style={styles.shadow}>
          <Image source={{ uri: connection?.image }} style={styles.image} />
        </View>

        <Text style={styles.name}>
          {connection?.name}, {connection?.age}
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.alignCenter}
      >
        {connection.details?.map((values, key) => (
          <View key={key} style={[styles.detailsContainer, styles.shadow]}>
            <View>
              {values.map(({ label, value }, index) => (
                <Text
                  key={index}
                  style={[
                    styles.detail,
                    index === values.length - 1 && styles.mb0,
                  ]}
                >
                  {label}: {value}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mb0: {
    marginBottom: 0,
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  flex1: {
    flex: 1,
  },
  pt20: {
    paddingTop: 20,
  },
  alignCenter: {
    alignItems: 'center',
  },
  back: {
    top: 20,
    zIndex: 1,
    right: 20,
    position: 'absolute',
  },
  shadow: {
    margin: 10,
    elevation: 10,
    shadowRadius: 5,
    borderRadius: 5,
    marginBottom: 20,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 0 },
  },
  image: {
    aspectRatio: 1,
    borderRadius: 5,
    height: height * 0.18,
  },
  name: {
    marginBottom: 30,
    fontSize: height * 0.02,
    fontFamily: FONT_FAMILY.MontserratRegular,
  },
  detail: {
    marginBottom: 10,
    fontSize: height * 0.017,
    fontFamily: FONT_FAMILY.MontserratRegular,
  },
  detailsContainer: {
    padding: 20,
    borderRadius: 5,
    width: width * 0.8,
  },
});
