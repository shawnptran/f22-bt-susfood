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
      <View style={{height: 15}}></View>
      <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center'}}>
        
        <View style={styles.button}>
          <Button 
            textColor="#4ACC87"
            title="All"
            onPress={() => {
              setAllShow(true); setExpiringShow(false); setFridgeShow(false); setPantryShow(false); 
            } } >
            {' '}
            <Text style={{fontSize: 22}}>All</Text>
          </Button>   
        </View>


        <View style={styles.button}>
          <Button 
            title="Expiring Soon"
            textColor="#4ACC87"
            onPress={() => {
              setAllShow(false); setExpiringShow(true); setFridgeShow(false); setPantryShow(false); 
            } } >
            {' '}
            <Text style={{fontSize: 22}}>Expiring Soon</Text>
          </Button>   
        </View>

        <View style={styles.button}>
          <Button 
            title="Fridge"
            textColor="#4ACC87"
            onPress={() => {
              setAllShow(false); setExpiringShow(false); setFridgeShow(true); setPantryShow(false); 
            } } >
            <Text style={{fontSize: 22}}>Fridge</Text>
            
          </Button>   
        </View>

        <View style={styles.button}>
          <Button 
            title="Pantry"
            textColor="#4ACC87"
            onPress={() => {
                setAllShow(false); setExpiringShow(false); setFridgeShow(false); setPantryShow(true); 
              } } >
            {' '}
            <Text style={{fontSize: 22}}>Pantry</Text>
          </Button>
          <View style={{height: 15}}></View>
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
    // borderColor: 'red',
    // borderWidth: 1,

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
