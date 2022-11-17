import { View, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import AllList from './search screen tabs/allList';
import DairyList from './search screen tabs/dairyList';
import FruitsList from './search screen tabs/fruitsList';
import MeatsList from './search screen tabs/meatsList';
import VegetablesList from './search screen tabs/vegetablesList';

import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AddButtonSearch = () => {
    const [allShow, setAllShow] = useState(true); //changed to false
    const [expiringShow, setExpiringShow] = useState(false);
    const [fridgeShow, setFridgeShow] = useState(false);
    const [pantryShow, setPantryShow] = useState(false);
    const [dairyShow,   setDairyShow] = useState(false);
    return (
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'center'}}>
        <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center'}}>
          
        <View style={styles.button}>
            <Button 
              title="All"
              onPress={() => {
                setAllShow(true); setExpiringShow(false); setFridgeShow(false); setPantryShow(false); setDairyShow(false); 
              } } >
              {' '}
              All
            </Button>   
          </View>

          <View style={styles.button}>
            <Button 
              title="Fruits"
              onPress={() => {
                setAllShow(false); setExpiringShow(true); setFridgeShow(false); setPantryShow(false); setDairyShow(false);
              } } >
              {' '}
              Fruits
            </Button>   
          </View>
  
  
          <View style={styles.button}>
            <Button 
              title="Vegetables"
              onPress={() => {
                setAllShow(false); setExpiringShow(false); setFridgeShow(true); setPantryShow(false); setDairyShow(false);
              } } >
              {' '}
              Vegetables
            </Button>   
          </View>
  
          <View style={styles.button}>
            <Button 
              title="Meats"
              onPress={() => {
                setAllShow(false); setExpiringShow(false); setFridgeShow(false); setPantryShow(true); setDairyShow(false);
              } } >
              {' '}
              Meats
            </Button>   
          </View>
  
          <View style={styles.button}>
            <Button 
              title="Dairy"
              onPress={() => {
                  setAllShow(false); setExpiringShow(false); setFridgeShow(false); setPantryShow(false); setDairyShow(true);
                } } >
              {' '}
              Dairy
            </Button>   
          </View>
  
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
  });
    
  export default AddButtonSearch;