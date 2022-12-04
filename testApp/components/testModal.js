import React, { useRef, useState } from "react";
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { Title, ProgressBar, Colors, MD3Colors } from "react-native-paper";
import IOTD from "./IOTD";
import { LinearGradient } from "expo-linear-gradient";
import CounterInput from "react-native-counter-input";
import { ScrollView } from "react-native-gesture-handler";
import NumericInput from 'react-native-numeric-input'

const Example = () => {

  const bottomSheet = useRef();
  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={670} sheetBackgroundColor={"#FFEF87"} radius={50} style={styles.modal}>
        <View style={styles.topContainer}>
        <Image
            style={styles.mainPic}
            resizeMode='contain'
            source={require('../icons/realbanana.png')}
          />
        </View>
        <View style={styles.bottomContainer}>
        <View alignItems='center'>
        {/* <CounterInput
              horizontal={true}
              increaseButtonBackgroundColor='#4ACC87'
              decreaseButtonBackgroundColor='#4ACC87'
              inital='1'
              style={styles.counter}
              min='0'
            /> */}
            <NumericInput 
                type='plus-minus'
                totalWidth={80} 
                totalHeight={40} 
                iconSize={25}
                step={1.5}
                minValue={0}
                // initValue={1}
                rounded={true}
                textColor='black' 
                iconStyle={{ color: 'black' }} 
                onChange={{}}
                // rightButtonBackgroundColor='white' 
                // leftButtonBackgroundColor='lightgray'
                // elevation={0}
                borderColor='white'
             />
            </View>
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
          <Text
          style={styles.useWithin}>
            Use within 3 days</Text>
            <LinearGradient
              colors={['#A7EBA5', '#D3751D']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={styles.progressBar}>            
              <Text></Text>
            {/* </ProgressBar> */}
            </LinearGradient>
            <Text style={styles.freshAged}>Fresh                                                                                              Aged</Text>
            
            <View style={styles.condition}>
              <View style={styles.eachCondition}>
                <Image
                  source={require('../icons/clock.png')}
                  />
                <Text>1 week</Text>
              </View>
              <View style={styles.eachCondition}>
              <Image
                  source={require('../icons/dry.png')}
                  style={styles.ImageIconStyle}/>
                <Text style={{marginTop: 5,}}>Dry</Text>
              </View>
              <View style={styles.eachCondition}>
              <Image
                  source={require('../icons/sync.png')}
                  />
                <Text>Compost</Text>
              </View>
            </View>
            
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
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
  mainPic:{
    height: '80%'
  },
  calories:{
    // backgroundColor: '#FFEF87',
    padding: 5,
    borderRadius: 40,
    alignSelf: 'flex-start',
    borderColor: '#000000',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    padding: 2, 
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  howToStore:{
    fontSize: 24,
    fontWeight: 'bold',
    padding: 2, 
    marginLeft: 20,
    marginRight: 20,
  },
  textBody:{
    padding: 2,
    color: '#979797',
    marginLeft: 20,
    marginRight: 20,
  },
  progressBar: {
    marginLeft: 30,
    marginRight: 30,
    height: 20,
    borderRadius: 20,
  },
  useWithin: {
    marginTop: 10,
    marginLeft: 35,
    marginBottom: 3,
    padding: 2,
    color: '#E74F47',
  },
  freshAged: {
    marginLeft: 20,
    marginRight: 20,
    padding: 2,
    marginTop: 3,
    fontSize: 10,
  },
  condition: {
    flexDirection: 'row',
    marginTop: 20,
    // backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
    paddingTop: 15,
    paddingBottom: 15,
    overflow: 'hidden',
  },
  eachCondition: {
    flex: 1,
    // borderColor: 'white',
    borderLeftColor: 'black',
    borderRightColor: 'black',
    // borderTopColor: 'white',
    // borderBottomColor: 'white',
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    padding: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  ImageIconStyle: {
    marginTop: 6,
  },
  counter: {
    height: 1,
    elevation: 0,
  },
});

export default Example;