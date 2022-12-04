import { View, StyleSheet, Alert, Text } from 'react-native';
import { Button } from 'react-native-paper';

import AddList from './fridge screen tabs/allList';
import ExpiringList from './fridge screen tabs/expiringList';
import FridgeList from './fridge screen tabs/fridgeList';
import PantryList from './fridge screen tabs/pantryList';


import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const AddButton = () => {
  const [allShow, setAllShow] = useState(true);
  const [expiringShow, setExpiringShow] = useState(false);
  const [fridgeShow, setFridgeShow] = useState(false);
  const [pantryShow, setPantryShow] = useState(false);
  return (
    <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'center', marginLeft: -12, marginRight: -12}}>
      <View style={styles.intro}>
        <View style={styles.container}>
          <Text style={styles.hello}>My Kitchen </Text> 
        </View>
      </View>
      <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center'}}>
        
        <View style={styles.button}>
          <Button 
            textColor="green"
            title="All"
            onPress={() => {
              setAllShow(true); setExpiringShow(false); setFridgeShow(false); setPantryShow(false); 
            } } >
            {' '}
            All
          </Button>   
        </View>


        <View style={styles.button}>
          <Button 
            title="Expiring Soon"
            onPress={() => {
              setAllShow(false); setExpiringShow(true); setFridgeShow(false); setPantryShow(false); 
            } } >
            {' '}
            Expiring Soon
          </Button>   
        </View>

        <View style={styles.button}>
          <Button 
            title="Fridge"
            onPress={() => {
              setAllShow(false); setExpiringShow(false); setFridgeShow(true); setPantryShow(false); 
            } } >
            {' '}
            Fridge
          </Button>   
        </View>

        <View style={styles.button}>
          <Button 
            title="Pantry"
            onPress={() => {
                setAllShow(false); setExpiringShow(false); setFridgeShow(false); setPantryShow(true); 
              } } >
            {' '}
            Pantry
          </Button>   
        </View>

      </View>
      {allShow ?
      ( <AddList/> ) : null}
      {expiringShow ?
      ( <ExpiringList/>   ) : null}
      {fridgeShow ?
      ( <FridgeList/> ) : null}
      {pantryShow ?
      ( <PantryList/> ) : null}
    </View>
  );
};
  
const styles = StyleSheet.create({
  button: {
    margin: 1,

  },
  buttonName: {
    fontSize: 20,

  },
  container: {
    flexDirection:'row'

  },
  intro: {
    marginTop: 25,
    marginLeft: 20,
  },
  hello: {
    fontSize: 36,
    color: '#000000',
    marginTop: 70,
    fontWeight: 'bold',
    marginBottom: 5,
  }, 
});
  
export default AddButton;
