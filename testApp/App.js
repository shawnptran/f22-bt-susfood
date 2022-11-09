import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import SearchScreen from './pages/SearchScreen';
import FridgeScreen from './pages/FridgeScreen';
import SettingsScreen from './pages/SettingsScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions = {{
        tabBarStyle: {height: 80},
        }} >
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./homeicon.png')                  
              }/>
         ), 
         tabBarLabel: 'Home'             
        }}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./searchicon.png')                  
              }/>
         ), 
         tabBarLabel: 'Search'             
        }}/>
      <Tab.Screen name="Fridge" component={FridgeScreen} options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./fridgeicon.png')                  
              }/>
         ), 
         tabBarLabel: 'Fridge'             
        }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./settingicon.png')                  
              }/>
         ), 
         tabBarLabel: 'Settings'             
        }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
