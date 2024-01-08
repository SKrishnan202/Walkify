import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Switch } from 'react-native';
import Card from '../components/Card';


const data = [
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Add Services 1',
    number: '60%',
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Add Services 2',
    number: '18 pts',
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Add Services 3',
    number: '25%',
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Add Services 4',
    number: 112,
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Add Services 5',
    number: 468,
  },
  {
    image: require("../assets/icons/twodrop.png"),
    title: 'Add Services 6',
    number: 13,
  },
];


const Services2 = () => {


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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default Services2;

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