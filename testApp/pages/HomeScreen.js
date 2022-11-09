import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, ScrollView, Image } from 'react-native';
import AddButton from '../components/button';
import IOTD from '../components/IOTD';
import Hello from '../components/hello';
import TestCard from '../components/testCard';

const HomeScreen = () => {
  return (
    <ScrollView>
    <Hello />
    <IOTD />
    <TestCard />
    <TestCard />
  </ScrollView>
  );
}

export default HomeScreen;