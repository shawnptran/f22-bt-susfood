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

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };
 
  // const getItem = (name) => {

  //   Alert.alert(name);

  // }

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
      <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
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
  },

  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
 
});

export default TwoColumn; 