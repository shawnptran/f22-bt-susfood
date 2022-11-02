import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
 
const TwoColumn = () => {
 
  const ANIMAL_NAMES = [
    {
      id: 1,
      name: 'Beef',
    },
    {
      id: 2,
      name: 'Lettuce',
    },
    {
      id: 3,
      name: 'Chicken',
    },
    {
      id: 4,
      name: 'Tomato',
    },
    {
      id: 5,
      name: 'Avocado',
    },
    {
      id: 6,
      name: 'Lemon',
    },
    {
      id: 7,
      name: 'Lime',
    },
    {
        id: 8,
        name: 'Beef',
      },
      {
        id: 9,
        name: 'Lettuce',
      },
      {
        id: 10,
        name: 'Chicken',
      },
      {
        id: 11,
        name: 'Tomato',
      },
      {
        id: 12,
        name: 'Avocado',
      },
      {
        id: 13,
        name: 'Lemon',
      },
      {
        id: 14,
        name: 'Lime',
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
          height: 10,
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
 
      <FlatList
        style={{margin:20}}
        columnWrapperStyle={styleSheet.row}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        data={ANIMAL_NAMES}
        renderItem={({ item }) => <ItemRender name={item.name} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        horizontal={false}
        numColumns={2}
        // showsHorizontalScrollIndicator={false}

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
    flex: 0.5,
    backgroundColor: 'white'
  },
 
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12
  },
 
  item: {
    padding: 8,
    backgroundColor: '#9b7ede',
    width: '35%',
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

export default TwoColumn; 