import React, {useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MySlider from '../components/Slider';
import Container from '../components/Container';

const Alerts = (props) => {

const data = [
    {month:'Walking',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'Running',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'Jogging',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'Pulse',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'Daily Calories',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'Cholesterol Level',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'Value 1',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'Value 2',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'Value 3',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'Value 4',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'Value 5',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'Value 6',icon:'lightning-bolt',familyIcon:'material-community'},
]

useEffect(() => {

    const unsubscribe = props.navigation.addListener('tabPress', (e) => {
      e.preventDefault();
      props.navigation.navigate('Home', { screen: 'Tab6', title:'Energy Usage' })
    });
  
    return unsubscribe;
}, []);

const renderItem = ({ item, index }) => {

    return(
        <MySlider month={item.month} icon={item.icon} familyIcon={item.familyIcon}  />
    )
}

return (

  <Container style={styles.container}>
     <FlatList
        data={data}
        renderItem={renderItem}
      />
  </Container>

);

};

const styles = StyleSheet.create({

  container: {
    marginBottom:50
  },
  
  });
  
  export default Alerts;