
import { View, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import AddList from './fridge screen tabs/allList';
import ExpiringList from './fridge screen tabs/expiringList';
import FridgeList from './fridge screen tabs/fridgeList';
import PantryList from './fridge screen tabs/pantryList';

import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="FridgeList" component={FridgeList} />
//       {/* <Stack.Screen name="Notifications" component={Notifications} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} /> */}
//     </Stack.Navigator>
//   );
// }

const AddButton = () => {
  const [allShow, setAllShow] = useState(true);
  const [expiringShow, setExpiringShow] = useState(false);
  const [fridgeShow, setFridgeShow] = useState(false);
  const [pantryShow, setPantryShow] = useState(false);
  return (
    <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'center'}}>
      <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center'}}>
        
        <View style={styles.button}>
          <Button 
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
      ( <ExpiringList/> ) : null}
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
});
  
export default AddButton;
