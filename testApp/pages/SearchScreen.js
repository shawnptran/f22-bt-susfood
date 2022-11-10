import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Alert, ScrollView, Image } from 'react-native';
import AddButton from '../components/button';
import IOTD from '../components/IOTD';
import Hello from '../components/hello';
import TestCard from '../components/expiringCard';
import TwoColumn from '../components/columnList';
import CustomAlert from '../components/customAlert';

const SearchScreen = () => {
    return (
      // <ScrollView >
        <View style={styles.container}> 
          <Text>Search!</Text>
          <TwoColumn />
          {/* <CustomAlert /> */}
        </View>
      // </ScrollView>
    );
  }

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})