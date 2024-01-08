import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Switch } from 'react-native';
import Card from '../components/Card';
import SwipeButton from 'rn-swipe-button';

const data = [
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Your Info',
    number: '60%',
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Your Info',
    number: 4.68,
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Your Info',
    number: '18 kWh',
  },null,
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Your Info',
    number: '30 knt',
  },
  {
    image: require("../assets/icons/vitals.png"),
    title: 'Your Info',
    number: 112.3,
  },
];


const Home = () => {

  const [buttonTitle, setButtonTitle] = useState("Your intended action!");
  const [buttonColors, setButtonColors] = useState({
    railFillBackgroundColor: "#007fff",
    thumbIconBackgroundColor: "#007fff",
    railBackgroundColor: "green",
  });

  const handleSwipeSuccess = () => {

    // Toggle the button title
    if (buttonTitle === "Make Water!") {
      setButtonTitle("This Action");
    } else {
      setButtonTitle("Start Walk");
    }

    // Toggle the button colors
    if (buttonColors.railBackgroundColor === "green") {
      setButtonColors({
        railFillBackgroundColor: "#007fff",
        thumbIconBackgroundColor: "#ffffff",
        railBackgroundColor: "#007fff",
      });
      alert('Walk Completed!');
    } else {
      setButtonColors({
        railFillBackgroundColor: "4cd9e2",
        thumbIconBackgroundColor: "#ffffff",
        railBackgroundColor: "green",
      });
      alert('Walk Completed!');
    }
    
  };

  const renderItem = ({ item, index }) => {
    return (item!=null?
      <Card
        item={item}
        onPress={null}
        style={{ marginRight: index % 2 === 0 ? 4 : 0, marginBottom: 4,  flexDirection: index===2?'row':'column' }}
        numberStyle={{fontSize:index===2?26:30,marginRight:index===2?20:0}}
        imageStyle={{width:index===2?80:100,height:index===2?80:100}}
      />:null
    );
  };

  const footer = () => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
        <SwipeButton
          disabled={false}
          swipeSuccessThreshold={100}
          height={70}
          width={300}
          title={buttonTitle}
          titleColor='#FFF'
          onSwipeSuccess={handleSwipeSuccess}
          railFillBackgroundColor={buttonColors.railFillBackgroundColor}
          railFillBorderColor="#fff"
          thumbIconBackgroundColor={buttonColors.thumbIconBackgroundColor}
          thumbIconBorderColor="#fff"
          railBackgroundColor={buttonColors.railBackgroundColor}
          railBorderColor="#fff"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        ListFooterComponent={footer}
      />


      <StatusBar style="auto" />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25
  },

  contentContainerStyle: {
    paddingHorizontal: 4,
    paddingBottom: 49,
  },
});