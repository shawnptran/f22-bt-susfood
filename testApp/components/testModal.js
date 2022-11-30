import React, { useRef, useState } from "react";
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { Title } from "react-native-paper";
import { initialWindowMetrics } from "react-native-safe-area-context";
import IOTD from "./IOTD";

const Example = () => {
  // Needed in order to use .show()
  const bottomSheet = useRef();
  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={670} sheetBackgroundColor={"#FFEF87"} style={styles.modal}>
        <View style={styles.topContainer}>
          <Image
            style={styles.mainPic}
            resizeMode='contain'
            source={require('../icons/realbanana.png')}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Title
            style={styles.title}>
              Bananas</Title>
          <Text
            style={styles.calories}>
              105 cal</Text>
          <Text></Text>
          <Text
            style={styles.howToStore}>
            How to Store</Text>
          <Text
            style={styles.textBody}>
            Bananas should be kept in a dry environment, away from sunlight for the longest shelf life</Text>
        </View>
      </BottomSheet>
      <TouchableOpacity
        style={styles.button}
        onPress={() => 
          bottomSheet.current.show()}>
        <Text style={styles.text}>Open modal</Text>
      </TouchableOpacity>

    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 150,
    backgroundColor: "#140078",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#8559da",
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    sheetBackgroundColor: "#FFEF87",
  },
  topContainer:{
    flex:1,
    backgroundColor: '#FFEF87',    
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer:{
    flex:3,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
  },
  mainPic:{
    height: '80%',
  },
  calories:{
    // backgroundColor: '#FFEF87',
    padding: 5,
    borderRadius: 40,
    alignSelf: 'flex-start',
    borderColor: '#000000',
    borderWidth: 1,
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    padding: 2, 
  },
  howToStore:{
    fontSize: 24,
    fontWeight: 'bold',
    padding: 2, 
  },
  textBody:{
    padding: 2,
  },
});

export default Example;