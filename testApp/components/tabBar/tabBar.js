import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
  
import Feed from "../HomeScreen";
// import ImagesScreen from "./tabBar/ImagesScreen";
// import VideoScreen from "./tabBar/VideosScreen";



const Tab = createMaterialTopTabNavigator();

export function MyFridgeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Notifications"
        component={Feed}
        options={{ tabBarLabel: 'Updates' }}
      />
      <Tab.Screen
        name="Profile"
        component={Feed}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}