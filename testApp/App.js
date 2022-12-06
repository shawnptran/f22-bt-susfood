import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from './pages/HomeScreen';
import SearchScreen from './pages/SearchScreen';
import FridgeScreen from './pages/FridgeScreen';
import SettingsScreen from './pages/SettingsScreen';

const Tab = createBottomTabNavigator();


function MyTabs() {  
  const [homePage, setHome] = useState(true);
  const [searchPage, setSearch] = useState(false);
  const [fridgePage, setFridge] = useState(false);
  const [settingsPage, setSettings] = useState(false);

  return (
    <Tab.Navigator 
      screenOptions = {{
        tabBarActiveTintColor: '#4ACC87',
        tabBarStyle: {height: 80, borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor:"#FFFFFF", marginTop: -100,}
        }}  
       >
      <Tab.Screen name="Home" component={HomeScreen} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" color={color} size={35} /> 
         ),
         tabBarLabel:() => {return null}       
        }}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={35}/> 
         ),
         tabBarLabel:() => {return null}             
        }}/>
      <Tab.Screen name="Fridge" component={FridgeScreen} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fridge-industrial-outline" color={color} size={45}/>
         ),
         tabBarLabel:() => {return null}    
        }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={45}/>
         ),
         tabBarLabel:() => {return null}           
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}