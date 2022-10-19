import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph, Text } from 'react-native-paper';
import { StyleSheet, Image } from 'react-native';

const IOTD = () => (
  <Card style={styles.container} > 
    <Card.Cover Image source={require('../IMG_1322.jpg')}/>
    <Text style={styles.text}>
            ITEM OF THE DAY
    </Text>
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
      borderRadius: 35,
      overflow: 'hidden',
    //   elevation: 100, doesn't work
    //   shadowColor: '#52006A', doesn't work
    },
    text: {
        fontWeight: "bold",
        color: "white",
        position: "absolute", // child
        bottom: '3%', // position where you want
        left: '15%',
    },

});

export default IOTD;