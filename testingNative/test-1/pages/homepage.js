import React from 'react';
import { Cards } from '../components/card';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Cards>
                    <Text style={styles.paragraph}>
                        React Native Card View for Android and IOS using "react-native-paper"
                    </Text>
                </Cards>
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});
