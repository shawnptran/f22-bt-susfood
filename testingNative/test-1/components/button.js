import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
  
const AddButton = () => {
  return (
    <View>
      <View style={styles.button}>
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
      </View>
      <View style={styles.button}>
        <Button mode="text" onPress={() => 
             Alert.alert('button style : text ')}>
          {' '}
          click
        </Button>
      </View>
      <View style={styles.button}>
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
      </View>
    </View>
  );
};
  
const styles = StyleSheet.create({
  button: {
    margin: 20,
  },
});
  
export default AddButton;