import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Switch } from 'react-native';
import Card from '../components/Card';
import SwipeButton from 'rn-swipe-button';

const data = [
  {
    image: require("../assets/icons/vitals.png"),
    title: 'set1',
    number: '25%',
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'set2',
    number: '75%',
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'set3',
    number: '22%',
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'set4',
    number: '25%',
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'set2',
    number: '75%',
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'set3',
    number: '22%',
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'set4',
    number: '25%',
  },
];


const Services1 = () => {

 

  const renderItem = useCallback(({ item, index }) => {
    return (
      <Card
        item={item}
        onPress={null}
        style={{ marginRight: index % 2 === 0 ? 4 : 0, marginBottom: 4, flexDirection:'row' }}
        numberStyle={{marginRight:15, marginLeft:15, fontSize:30}}
        imageStyle={{width:50,height:50}}
      />
    );
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        //numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
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