import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Switch } from 'react-native';
import Card from '../components/Card';

const data = [
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Info 1',
    number: 1.68,
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Info 2',
    number: 11.3,
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Info 3',
    number: '99%',
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Info 4',
    number: '34 kWh',
  },
];


const Services3 = () => {

 
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

export default Services3;

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