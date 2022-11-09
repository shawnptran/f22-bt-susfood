import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const Videos = () => {
  return (
    <View style={{ flex: 1, 
                   alignItems: "center",
                   justifyContent: "center" }}>
      <Text style={{ color: "#006600", fontSize: 40 }}>
         Videos Screen!
      </Text>
      <Ionicons name="ios-videocam-outline" 
                size={80} color="#006600" />
    </View>
  );
};
  
export default Videos;