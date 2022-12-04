import { Alert, View, StyleSheet, SafeAreaView, FlatList, Text, Image, Item, 
  TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
 
const DairyList = () => {
 
  
  const bottomSheet = useRef();
 
  const TEMPORARY = [];
  const ANIMAL_NAMES = [
    {
      id: 1,
      name: 'Apple',
      src:require('../../icons/apple.png'),
      color: '#FFA8A3'
    },
    {
        id: 2,
        name: 'Lemons',
        src:require('../../icons/lemons.png'),
        color: '#FFED9E'
    },
    {
        id: 3,
        name: 'Bananas',
        src:require('../../icons/bananas.png'),
        color: '#FFE58E'
    },
    {
        id: 4,
        name: 'Grapes',
        src:require('../../icons/redgrapes.png'),
        color: '#D2A0E8'
    },
    {
        id: 5,
        name: 'Pineapple',
        src:require('../../icons/pineapple.png'),
        color: '#FFDE99'
    },
    {
        id: 6,
        name: 'Watermelon',
        src:require('../../icons/watermelon.png'),
        color: '#94E7B5'
    },
    {
            id: 7,
        name: 'Lime',
        src:require('../../icons/lime.png'),
        color: '#FFFFFF'
    },
    {
            id: 8,
        name: 'Beef',
        src:require('../../icons/beef.png'),
        color: '#FFFFFF'
    },
    {
        id: 9,
        name: 'Red Bell Peppers',
        src:require('../../icons/redbell.png'),
        color: '#FFC0BC'
    },
    {
        id: 10,
        name: 'Zucchini',
        src:require('../../icons/zucchini.png'),
        color: '#D4EEB0'
    },
    {
        id: 11,
        name: 'Tomato',
        src:require('../../icons/tomato.png'),
        color: '#FF928C'
    },
    {
        id: 12,
        name: 'Avocado',
        src:require('../../icons/avocado.png'),
        color: '#D4EEB0'
    },
    {
        id: 13,
        name: 'Milk',
        src:require('../../icons/milk.png'),
        color: '#FFCE65'
    },
    {
        id: 14,
        name: 'Yogurt',
        src:require('../../icons/yogurt.png'),
        color: '#FF928C'
    },
    {
        id: 15,
        name: 'Butter',
        src:require('../../icons/butter.png'),
        color: '#FF928C'
    },
    {
        id: 16,
        name: 'Cheese',
        src:require('../../icons/cheese.png'),
        color: '#D4EEB0'
    },
  ];

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [text, onChangeText] = useState("Use");

  useEffect(() => {
        setFilteredDataSource(ANIMAL_NAMES);
        setMasterDataSource(ANIMAL_NAMES);
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View style={{
        adding: 8,
        backgroundColor: item.color,
        elevation: 7,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: '43%',
        height: 135,
        alignItems: 'center',
        borderRadius: 30,
        }}>
        <TouchableWithoutFeedback onPress={() => 
          bottomSheet.current.show()} >
          <Image source={item.src} style={styleSheet.image} ></Image>
        </TouchableWithoutFeedback>
        <Text style={styleSheet.itemText}> {item.name} </Text>
      </View>
    );
  };

  const getItem = (name) => {
    Alert.alert(name);
  }
 
  const Separator = () => {
    return (
      <View
        style={{
          height: 40,
          width: 10,
          backgroundColor: '#f9f8f8',
        }}
      />
    );
  }
 
  return (
    <SafeAreaView style={styleSheet.MainContainer}>
        <BottomSheet hasDraggableIcon ref={bottomSheet} height={670} sheetBackgroundColor={"#FFEF87"} radius={50} style={styleSheet.modal}>
        <View style={styleSheet.topContainer}>
        <Image
            style={styleSheet.mainPic}
            resizeMode='contain'
            source={require('../../icons/realbanana.png')}
          />
        </View>
        <View style={styleSheet.bottomContainer}>
        <View alignItems='center'>
            <NumericInput 
                value={0} 
                onChange={value => value+1} 
                type='plus-minus'
                totalWidth={80} 
                totalHeight={40} 
                iconSize={25}
                step={1.5}
                minValue={0}
                rounded={true}
                textColor='black' 
                iconStyle={{ color: 'black' }} 
                borderColor='white'
             />
            </View>
          <Title
            style={styleSheet.title}>
              Bananas</Title>
          <Text
            style={styleSheet.calories}>
              105 cal</Text>
          <Text></Text>
          <Text
            style={styleSheet.howToStore}>
            How to Store</Text>
          <Text
            style={styleSheet.textBody}>
            Bananas should be kept in a dry environment, away from sunlight for the longest shelf life</Text>
          <Text
          style={styleSheet.useWithin}>
            Use within 3 days</Text>
            <LinearGradient
              colors={['#A7EBA5', '#D3751D']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={styleSheet.progressBar}>            
              <Text></Text>
            {/* </ProgressBar> */}
            </LinearGradient>
            <Text style={styleSheet.freshAged}>Fresh                                                                                              Aged</Text>
            
            <View style={styleSheet.condition}>
              <View style={styleSheet.eachCondition}>
                <Image
                  source={require('../../icons/clock.png')}
                  />
                <Text>1 week</Text>
              </View>
              <View style={styleSheet.eachCondition}>
              <Image
                  source={require('../../icons/dry.png')}
                  style={styleSheet.ImageIconStyle}/>
                <Text style={{marginTop: 5,}}>Dry</Text>
              </View>
              <View style={styleSheet.eachCondition}>
              <Image
                  source={require('../../icons/sync.png')}
                  />
                <Text>Compost</Text>
              </View>
            </View>
            
        </View>
        
        </BottomSheet>
      <TextInput
          style={styleSheet.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
      <FlatList
        style={{margin: 20}}
        columnWrapperStyle={styleSheet.row}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-start', paddingBottom: 115}}
        data={filteredDataSource}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={ ItemView }
        horizontal={false}
        numColumns={2}
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}

      />
 
    </SafeAreaView>
  );
}
 
const styleSheet = StyleSheet.create({
 
  row: {
      flex: 1,
      justifyContent: "space-around"
      
  },

  MainContainer: {
    flex: 1,
    backgroundColor: "#f9f8f8",
    alignItems: 'center',
  },
 
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12
  },

  image: {
    width: '52%',
    height: '52%',
    // position: 'center',
    // position: 'absolute', 
    resizeMode: 'contain',
    marginTop: '19%',
  },
 
  item: {
    padding: 8,
    backgroundColor: '#94C973',
    width: '43%',
    height: 135,
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,

  },
 
  itemText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 44,
  },

  textInputStyle: {
    height: 40,
    width: 300,
    borderRadius: 20,
    // borderWidth: 1,
    padding: 10,
    // borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    elevation: 10,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 3,
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

export default DairyList; 