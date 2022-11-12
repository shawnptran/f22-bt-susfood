import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Alert, ScrollView, Image } from 'react-native';
import AddButton from '../components/button';
import IOTD from '../components/IOTD';
import Hello from '../components/hello';
import TestCard from '../components/expiringCard';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import MyFridgeTabs from '../components/tabBar/tabBar';
import FridgeList from '../components/fridge screen tabs/fridgeList';

const FridgeScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        {/* <Text>Frige!</Text> */}
        {/* <MyFridgeTabs/> */}
        <AddButton />
      </View>
    );
  }

export default FridgeScreen;
