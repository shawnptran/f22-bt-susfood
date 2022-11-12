import { Alert, View, StyleSheet, SafeAreaView, FlatList, Text, Image, Item, 
  TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
 
const TwoColumn = () => {
 
  const TEMPORARY = [];
  const ANIMAL_NAMES = [
    {
      id: 1,
      name: 'Beef',
      src:require('../icons/random.png')
    },
    {
      id: 2,
      name: 'Lettuce',
      src:require('../icons/random.png')
    },
    {
      id: 3,
      name: 'Chicken',
      src:require('../icons/random.png')
    },
    {
      id: 4,
      name: 'Tomato',
      src:require('../icons/random.png')
    },
    {
      id: 5,
      name: 'Avocado',
      src:require('../icons/random.png')
    },
    {
      id: 6,
      name: 'Lemon',
      src:require('../icons/random.png')
    },
    {
      id: 7,
      name: 'Lime',
      src:require('../icons/random.png')
    },
    {
      id: 8,
      name: 'Beef',
      src:require('../icons/random.png')
    },
  ];

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [text, onChangeText] = useState("Use");

  useEffect(() => {
        setFilteredDataSource(ANIMAL_NAMES);
        setMasterDataSource(ANIMAL_NAMES);
  }, [search]);

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
      <View style={styleSheet.item}>
        <TouchableWithoutFeedback onPress={()=> getItem(item.name)} >
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
          backgroundColor: "white",
        }}
      />
    );
  }
 
  return (
    <SafeAreaView style={styleSheet.MainContainer}>
 
      <Text style={styleSheet.titleText}>
        testing
      </Text>
      {/* <TextInput
          style={styleSheet.textInputStyle}
          onChangeText={onChangeText}
          // value = {search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        /> */}
      <TextInput
          style={styleSheet.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          // underlineColorAndroid="transparent"
          // placeholder="Search Here"
        />
      <FlatList
        style={{margin: 20}}
        columnWrapperStyle={styleSheet.row}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
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
    backgroundColor: 'white'
  },
 
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12
  },

  image: {
    width: '100%',
    height: '100%',
    marginTop: 0,
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
    marginTop: 11,
  },

  textInputStyle: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
 
});

export default TwoColumn; 