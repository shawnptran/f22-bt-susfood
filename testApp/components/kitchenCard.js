import { View, StyleSheet, SafeAreaView, FlatList, Text, Image, ScrollView } from 'react-native';
 
const TestCard = () => {
 
  const ANIMAL_NAMES = [
   
    {
      id: 2,
      name: 'Mangos',
      src:require('../icons/mangos.png'),
      color: '#FFCE65'
    },
    {
      id: 3,
      name: 'Strawberries',
      src:require('../icons/strawberries.png'),
      color: '#FF928C'
    },
    {
      id: 13,
      name: 'Milk',
      src:require('../icons/milk.png'),
      color: '#Daf0ff'
    },
    {
        id: 14,
        name: 'Yogurt',
        src:require('../icons/yogurt.png'),
        color: '#fff7f0'
    },
    {
        id: 15,
        name: 'Butter',
        src:require('../icons/butter.png'),
        color: '#Fff9da'
    },
  ];
 
  const Separator = () => {
    return (
      <View
        style={{
          height: 50,
          width: 20,
          backgroundColor: "#f9f8f8",
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styleSheet.MainContainer}>
 
      <Text style={styleSheet.titleText}>
        My Kitchen
      </Text>
 
      <FlatList
        data={ANIMAL_NAMES}
        rowWrapperStyle={styleSheet.column}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        renderItem={({ item }) => 
        <View>
          <View style={{
            padding: 8,
            backgroundColor: item.color,
            width: 110,
            height: 100,
            alignItems: 'center',
            borderRadius: 30,
            elevation: 5,
            shadowColor: '#171717',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
            <Image source={item.src}style={styleSheet.image}></Image>
            <Text style={styleSheet.foodText}> {item.name}</Text>
          </View>
          <View style={styleSheet.emptySpace}></View>
        </View>
      }
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      
    </SafeAreaView>
  );
}
 
const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    backgroundColor: '#f9f8f8',
    // backgroundColor: 'skyblue',
    marginLeft: 20
  },

  image: {
    height: '65%',
    // width: '50%',
    resizeMode: 'contain',
    marginTop: '10%',
  },
 
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 12
  },
  itemText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  },

  foodText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 36,
  },

  column: {
    flex: 1,
    justifyContent: "space-around",
  },
  emptySpace: {
    height: 50,
  }

});

export default TestCard; 