import * as React from 'react';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Alert, ScrollView, Image } from 'react-native';
import AddButton from '../components/button';
import IOTD from '../components/IOTD';
import Hello from '../components/hello';
import TestCard from '../components/expiringCard';
import BottomModal from '../components/bottomModal';
import Example from '../components/testModal';

const SettingsScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <BottomModal /> */}
        <Example />
        {/* <TestModal2 /> */}
      </View>
    );
  }

export default SettingsScreen;

