import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
  
const AddButton = () => {
  return (
    <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center'}}>
      {/* <View style={styles.button}>
        <Button mode="contained" onPress={() => 
            Alert.alert('button style : contained')}>
          {' '}
          click{' '}
        </Button>
      </View>
      <View style={styles.button}>
        <Button
          mode="outlined"
          icon="camera"
          onPress={() =>
             Alert.alert('button style : outlined and icon ')}>
          click
        </Button>
      </View> */}
      <View style={styles.button}>
        <Button mode="text" onPress={() => 
             Alert.alert('button style : text ')}>
          {' '}
          All
        </Button>
      </View>
      <View style={styles.button}>
        <Button mode="text" onPress={() => 
             Alert.alert('button style : text ')}>
          {' '}
          Expiring Soon
        </Button>
      </View>
      <View style={styles.button}>
        <Button mode="text" onPress={() => 
             Alert.alert('button style : text ')}>
          {' '}
          Fridge
        </Button>
      </View>
      <View style={styles.button}>
        <Button mode="text" onPress={() => 
             Alert.alert('button style : text ')}>
          {' '}
          Pantry
        </Button>
      </View>
      {/* <View style={styles.button}>
        <Button
          mode="contained"
          color="green"
          onPress={() =>
             Alert.alert('button style : coloured and contained ')}>
          click
        </Button>
      </View>
      <View style={styles.button}>
        <Button mode="contained" disabled>
          click
        </Button>
      </View> */}
    </View>
  );
};
  
const styles = StyleSheet.create({
  button: {
    margin: 1,
  },
});
  
export default AddButton;
