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
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'center', marginLeft: 15, marginRight: -40}}>
        <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center'}}>
          <ScrollView horizontal={true}>
          
          <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}
          onPress={() => {
            setAllShow(true); setExpiringShow(false); setFridgeShow(false); setPantryShow(false); setDairyShow(false);
          } }>
            <Image
            source={require('../icons/ic_cake.png')}
            style={styles.ImageIconStyle}
            />
            <View style={styles.SeparatorLine} />
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
          </TouchableOpacity>
          
          </ScrollView>
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
      padding: 22,
    },
    FStyle: {
      padding: 22,
      marginLeft: 15,
    },
  });
    
  export default AddButtonSearch;