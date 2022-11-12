import { View, StyleSheet, SafeAreaView, FlatList, Text, Image } from 'react-native';
 
const TestCard = () => {
 
  const ANIMAL_NAMES = [
    {
      id: 1,
      name: 'Beef',
      src:require('../icons/bananas.png')
    },
    {
      id: 2,
      name: 'Lettuce',
      src:require('../icons/mangos.png')
    },
    {
      id: 3,
      name: 'Chicken',
      src:require('../icons/strawberries.png')
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
          backgroundColor: "#f2f2f2",
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
        renderItem={({ item }) => 
        <View style={styleSheet.item}>
          <Image source={item.src}style={styleSheet.image}></Image>
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
    backgroundColor: '#f2f2f2',
    marginLeft: 20
  },

  image: {
    height: 50,
    width: 50,
  },
 
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 12
  },
 
  item: {
    padding: 8,
    backgroundColor: '#94C973',
    width: 110,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
 
  itemText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  }
 
});

export default TestCard; 