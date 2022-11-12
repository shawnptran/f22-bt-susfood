import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        tabBarStyle: {height: 80, borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor:"#FFFFFF", color: "#3cb371", marginTop: -100,}
        }}
       >
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./icons/homeicon.png')                  
              }/>
         ),
         tabBarLabel:() => {return null}       
        }}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./icons/searchicon.png')                  
              }/>
         ),
         tabBarLabel:() => {return null}             
        }}/>
      <Tab.Screen name="Fridge" component={FridgeScreen} options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./icons/fridgeicon.png')                  
              }/>
         ),
         tabBarLabel:() => {return null}    
        }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./icons/settingicon.png')                  
              }/>
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