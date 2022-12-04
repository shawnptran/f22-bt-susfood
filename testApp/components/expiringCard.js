import { View, StyleSheet, SafeAreaView, FlatList, Text, Image, ScrollView } from 'react-native';
 
const TestCard = () => {
 
  const ANIMAL_NAMES = [
    {
      id: 1,
      name: 'Apple',
      src:require('../icons/apple.png'),
      color: '#FFA8A3'
    },
    {
      id: 2,
      name: 'Red Bell Peppers',
      src:require('../icons/redbell.png'),
      color: '#FFC0BC'
    },
    {
      id: 3,
      name: 'Zucchini',
      src:require('../icons/zucchini.png'),
      color: '#D4EEB0'
    },
    {
      id: 4,
      name: 'Tomato',
      src:require('../icons/random.png'),
      color: '#FF928C'
    },
    {
      id: 5,
      name: 'Avocado',
      src:require('../icons/random.png'),
      color: '#D4EEB0'
    },
    {
      id: 6,
      name: 'Lemon',
      src:require('../icons/random.png'),
      color: '#FFED9E'
    },
    {
      id: 7,
      name: 'Lime',
      src:require('../icons/random.png'),
      color: '#BAECB2'
    }
 
  ];
 
  const ItemRender = ({ name }) => (
    <View style={styleSheet.item}>
      <Text style={styleSheet.itemText}>{name}</Text>
    </View>
  );
 
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
        Expiring Soon
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
    marginTop: 33,
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