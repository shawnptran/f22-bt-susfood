import { View, StyleSheet, Alert, Text, TouchableOpacity, Image} from 'react-native';
import { Button } from 'react-native-paper';

import MeatsList from './search screen tabs/meatsList';
import AllList from './search screen tabs/allList';
import VegetablesList from './search screen tabs/vegetablesList';
import DairyList from './search screen tabs/dairyList';
import FruitsList from './search screen tabs/fruitsList';

import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import TwoColumn from './columnList';
import { ScrollView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const AddButtonSearch = () => {
    const [allShow, setAllShow] = useState(true);
    const [expiringShow, setExpiringShow] = useState(false);
    const [fridgeShow, setFridgeShow] = useState(false);
    const [pantryShow, setPantryShow] = useState(false);
    const [dairyShow,   setDairyShow] = useState(false);
    return (
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'center', marginRight: -16, marginLeft: -11}}>
        <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center'}}>
      
          
          <TouchableOpacity style={styles.FStyle} activeOpacity={0.5}
          onPress={() => {
            setAllShow(true); setExpiringShow(false); setFridgeShow(false); setPantryShow(false); setDairyShow(false);
          } }>
            <Image
            source={require('../icons/kitchen-tools.png')}
            style={styles.AllIconStyle}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.buttonAllStyle}>
            All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}
          onPress={() => {
            setAllShow(false); setExpiringShow(true); setFridgeShow(false); setPantryShow(false); setDairyShow(false);
          } }>
            <Image
            source={require('../icons/ic_lemon.png')}
            style={styles.ImageIconStyle}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.buttonFruitStyle}>
            Fruits
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}
          onPress={() => {
            setAllShow(false); setExpiringShow(false); setFridgeShow(true); setPantryShow(false); setDairyShow(false);
          } }>
            <Image
            source={require('../icons/ic_cabbage.png')}
            style={styles.ImageIconStyle}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.buttonVegStyle}>
            Vegetables
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}
          onPress={() => {
            setAllShow(false); setExpiringShow(false); setFridgeShow(false); setPantryShow(true); setDairyShow(false);
          } }>
            <Image
            source={require('../icons/ic_chicken.png')}
            style={styles.ImageIconStyle}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.buttonTextStyle}>
            Meats
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}
          onPress={() => {
            setAllShow(false); setExpiringShow(false); setFridgeShow(false); setPantryShow(false); setDairyShow(true);
          } }>
            <Image
            source={require('../icons/ic_cake.png')}
            style={styles.ImageIconStyle}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.buttonTextStyle}>
            Dairy
            </Text>
          </TouchableOpacity>
          
          
        </View>
        {allShow ?
        ( <AllList/> ) : null}
        {expiringShow ?
        ( <FruitsList/> ) : null}
        {fridgeShow ?
        ( <VegetablesList/> ) : null}
        {pantryShow ?
        ( <MeatsList/> ) : null}
        {dairyShow ?
        ( <DairyList/> ) : null}
      </View>
    );
  };
    
  const styles = StyleSheet.create({
    button: {
      margin: 1,
    },
    FacebookStyle: {
      padding: 18 ,
      alignItems: 'center',
    },
    FStyle: {
      padding: 22,
      alignItems: 'center', 
    },
    buttonTextStyle: {
      color: '#000',
      marginTop: 10,
      marginLeft: 5,
      fontSize: 15,
    },
    buttonFruitStyle: {
      color: '#000',
      marginTop: 5,
      marginLeft: 5,
      fontSize: 15,
    },
    buttonVegStyle: {
      color: '#000',
      marginTop: 8,
      marginLeft: 5,
      fontSize: 15,
    },
    buttonAllStyle: {
      color: '#000',
      marginTop: 7,
      marginLeft: 5,
      fontSize: 15,
    },
    AllIconStyle: {
      marginTop: -3,
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
  });
    
  export default AddButtonSearch;