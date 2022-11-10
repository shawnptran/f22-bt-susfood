import { Alert, View, StyleSheet, SafeAreaView, FlatList, Text, Image, Item, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

 
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
  ];
 
  const getItem = (name) => {

    Alert.alert(name);

  }

  const ImageType = ({ image }) => (
    <View style={styleSheet.item}>
      <Image source={image}/>
    </View>
  );

  const NameRender = ({ item }) => (
    <View style={styleSheet.item}>
      
      {/* <Image source={item.src} />  */}
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
          // <View style={styleSheet.item}>
            // <ImageType image={item.src}/>
            <View style={styleSheet.item}>
              <TouchableWithoutFeedback onPress={()=> getItem(item.name)} >
                <Image source={item.src} style={styleSheet.image} ></Image>
              </TouchableWithoutFeedback>
              <Text style={styleSheet.itemText}> {item.name} </Text>
            </View>
          
          // <NameRender item={item} />


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
  }
 
});

export default TwoColumn; 