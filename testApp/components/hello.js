import * as React from 'react';
import { Text, StyleSheet } from "react-native";
import { Headline } from 'react-native-paper';

const Hello = () => (
  <Headline style={styles.title}>Hello, Shawn</Headline>
);

const styles = StyleSheet.create({
    title: {
      flex: 1,
      justifyContent: "space-between",
      paddingTop: '15%',
      paddingLeft: '10%',
      color: '#3cb371',
      fontWeight: 'bold',
    
    }
});

export default Hello;