import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph, Text } from 'react-native-paper';
import { StyleSheet, Image } from 'react-native';

const IOTD = () => (
  <Card style={styles.container} > 
    <Card.Cover Image source={require('../icons/IOTD.png')}/>
  </Card>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      margin: '5%',
      marginRight: '10%',
      marginLeft: '10%',
      borderRadius: 40,
      overflow: 'hidden',
      height: 170,
    //   elevation: 100, doesn't work
    //   shadowColor: '#52006A', doesn't work
    },
    text: {
        fontWeight: "bold",
        color: "white",
        position: "absolute", // child
        bottom: '15%', // position where you want
        left: '15%',
    },

});

export default IOTD;