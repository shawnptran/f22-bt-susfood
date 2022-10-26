import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
 
const TestCard = () => {
 
  const ANIMAL_NAMES = [
    {
      id: 1,
      name: 'Cat',
    },
    {
      id: 2,
      name: 'Dog',
    },
    {
      id: 3,
      name: 'Chicken',
    },
    {
      id: 4,
      name: 'Duck',
    },
    {
      id: 5,
      name: 'Cow',
    },
    {
      id: 6,
      name: 'Deer',
    },
    {
      id: 7,
      name: 'Horse',
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
          width: 1,
          backgroundColor: "white",
        }}
      />
    );
  }
 
  return (
    <SafeAreaView style={styleSheet.MainContainer}>
 
      <Text style={styleSheet.titleText}>
        Horizontal FlatList in React Native
      </Text>
 
      <FlatList
        data={ANIMAL_NAMES}
        renderItem={({ item }) => <ItemRender name={item.name} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        horizontal={true}
      />
 
    </SafeAreaView>
  );
}
 
const styleSheet = StyleSheet.create({
 
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
 
  item: {
    padding: 20,
    backgroundColor: '#333333',
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  itemText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  }
 
});

export default TestCard; 