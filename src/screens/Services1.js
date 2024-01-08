import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Switch } from 'react-native';
import Card from '../components/Card';
import SwipeButton from 'rn-swipe-button';

const data = [
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Listed Service 1',
    number: '25%',
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Listed Service 2',
    number: 112,
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Listed Service 3',
    number: 468,
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Listed Service 4',
    number: 13,
  },
];


const Services1 = () => {

 

  const renderItem = useCallback(({ item, index }) => {
    return (
      <Card
        item={item}
        onPress={null}
        style={{ marginRight: index % 2 === 0 ? 4 : 0, marginBottom: 4 }}
      />
    );
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        //scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        //ListFooterComponent={footer}
      />

      <StatusBar style="auto" />
    </View>
  );
}

export default Services1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 25
  },

  contentContainerStyle: {
    paddingHorizontal: 4,
    paddingBottom: 49,
  },
});