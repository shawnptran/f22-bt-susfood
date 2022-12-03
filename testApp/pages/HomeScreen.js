import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, ScrollView, Image } from 'react-native';
import AddButton from '../components/button';
import IOTD from '../components/IOTD';
import Hello from '../components/hello';
import ExpiringCard from '../components/expiringCard';
import KitchenCard from '../components/kitchenCard';

const HomeScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: '#f9f8f8' }}>
    <Hello />
    <IOTD />
    <ExpiringCard />
    <KitchenCard />
  </ScrollView>
  );
}

export default HomeScreen;