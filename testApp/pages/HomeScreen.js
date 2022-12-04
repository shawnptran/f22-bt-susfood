import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, ScrollView, Image, Text } from 'react-native';
import AddButton from '../components/button';
import ExpiringCard from '../components/expiringCard';
import KitchenCard from '../components/kitchenCard';

const HomeScreen = () => {
  return (
      <ScrollView style={{ backgroundColor: '#f9f8f8', marginBottom: 0 }}>
      <View style={styles.intro}>
        <View style={styles.container}>
          <Text style={styles.hello}>Hello, </Text> 
          <Text style={styles.name}>Rahul</Text>
        </View>
        <Text style={styles.subheading}>Your food has missed you!</Text>
      </View>
      <View style={styles.container}>
      <View style={styles.leftIOTD}>
        <Text></Text>
      </View>
        <View style={styles.IOTD}>
          <View style={styles.leftContainer}>
            <Text style={styles.IOTDheading}>
              Item of the Day</Text>
            <Text style={styles.IOTDitemname}
            >Maluma Avocado</Text>
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={require('../icons/avocado.png')}
            />
          </View>
          <Text>      </Text>
        </View>
        <View style={styles.rightIOTD}>
          <Text></Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.scroll}></View>
        <View style={styles.scroll}>
          <View style={styles.option}></View> 
          <View style={styles.optionSelected}></View> 
          <View style={styles.option}></View> 
        </View>
        <View style={styles.scroll}></View>
      </View>
      <View style={{height: 15,}}></View>
      <ExpiringCard />
      <KitchenCard />
      <View style={{ backgroundColor: '#f9f8f8', height: 100}}>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection:'row'

  },
  leftContainer:{
    flex:1,
  },
  rightContainer:{
    flex:1,
    // alignItems: 'left',
  },
  IOTD: {
    backgroundColor: '#07582D', 
    padding: 20, 
    borderRadius: 30, 
    margin: 15, 
    flex: 1, 
    flexDirection: 'row'
  },
  IOTDheading:{
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  IOTDitemname: {
    fontSize: 16,
    color: 'white',
    fontStyle: 'italic'
  },
  hello: {
    fontSize: 32,
    color: '#4ACC87',
  }, 
  name: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#4ACC87',
  },
  subheading: {
    fontSize: 16,
    color: '#BDBBBB'
  },
  leftIOTD: {
    flex: 0.1,
    backgroundColor: '#F15C53',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  rightIOTD: {
    flex: 0.1,
    backgroundColor: '#F1C40D',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  intro: {
    marginTop: 25,
    marginLeft: 20,
  },
  scroll: {
    flex: 1,
    flexDirection: 'row', 
    // backgroundColor: 'pink',
    // borderWidth: 2,
    // borderColor: 'yellow'
    
  },
  option: {
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 5,
    height: 10,
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  optionSelected: {
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 5,
    height: 10,
    flex: 1,
    backgroundColor: '#4ACC87',
  },
}) 

export default HomeScreen;