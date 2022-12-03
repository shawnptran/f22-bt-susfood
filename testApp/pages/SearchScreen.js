import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Alert, ScrollView, Image } from 'react-native';
import AddButtonSearch from '../components/buttonSearch';
import IOTD from '../components/IOTD';
import Hello from '../components/hello';
import TestCard from '../components/expiringCard';
import TwoColumn from '../components/columnList';
import CustomAlert from '../components/customAlert';
import AddButton from '../components/button';

const SearchScreen = () => {
    return (
       
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f9f8f8'}}> 
          <AddButtonSearch/>
        </View>
      //   <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      //   <AddButton />
      // </View>
       
    );
  }

export default SearchScreen;