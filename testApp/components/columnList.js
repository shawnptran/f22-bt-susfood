import { Alert, View, StyleSheet, SafeAreaView, FlatList, Text, Image } from 'react-native';

 
const TwoColumn = () => {
 
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
    //   {
    //     id: 9,
    //     name: 'Lettuce',
    //     image:require('../icons/random.png')
    //   },
    //   {
    //     id: 10,
    //     name: 'Chicken',
    //     image:require('../icons/random.png')
    //   },
    //   {
    //     id: 11,
    //     name: 'Tomato',
    //     image:require('../icons/random.png')
    //   }
  ];
 
  const getItem = (name) => {

    Alert.alert(name);

  }

  
  const ItemRender = ({ name }) => (
    <View style={styleSheet.item}>
      <Text style={styleSheet.itemText} onPress={()=> getItem(name)}>{name}</Text>
    </View>
  );
 
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
 
      <FlatList
        style={{margin:20}}
        columnWrapperStyle={styleSheet.row}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        data={ANIMAL_NAMES}
        
        renderItem={({ item }) => 
          
          (        
          <Image source={item.src} style={styleSheet.item}/>
          )
          // (<ItemRender name={item.name} />)
            
            
        
        }


        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
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
 
  item: {
    padding: 8,
    backgroundColor: '#9b7ede',
    width: '40%',
    height: 130,
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