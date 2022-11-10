import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class CustomAlert extends Component {
    render(){
        return(
            <View style={styles.mainContainer}>
                
                <View style={styles.topPart}>
                    <Image 
                        source={require('../icons/random.png')}
                        resizeMode={'contain'}
                        style={styles.alertIconStyle}
                    />
                    <Text style={styles.alertTitleTextStyle}>
                        Alert Title Text
                    </Text>
                </View>
                <View style={styles.middlePart}>
                    <Text style={styles.alertMessageTextStyle}>
                        Alert Message for custom alert component that we are designing in this react native
                    </Text>
                </View>
                <View style={styles.bottomPart}>
                    <TouchableOpacity style={styles.alertMessageButtonStyle}>
                        <Text style={styles.alertMessageButtonTextStyle}>
                            OK/YES
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.alertMessageButtonStyle}>
                        <Text style={styles.alertMessageButtonTextStyle}>
                            CANCEL/NO
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    alertMessageButtonStyle: {
        paddingHorizontal: 6,
        marginVertical: 4,
        borderRadius: 10,
        backgroundColor: '#808FFF',
        justifyContent: 'center',
    },
    alertMessageButtonTextStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    alertMessageTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        padding: 2,
    },
    alertIconStyle: {
        borderWidth: 1,
        borderColor: '#cc00cc',
        height: 40,
        width: 40, 
    },
    alertTitleTextStyle: {
        flex: 1,
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#660066',
        padding: 2,
        marginHorizontal: 2,
    },
    mainContainer: {
        flexDirection: 'column',
        height: '50%',
        width: '80%',
        justifyContent: 'center',
        backgroundColor: '#404040',
        borderWidth: 2,
        borderColor: '#FF0000',
        borderRadius: 10,
        padding: 4,
    },
    topPart: {
        flex: 0.5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#00FF00',
        paddingHorizontal: 2,
        paddingVertical: 4, 
    },
    middlePart: {
        flex: 1,
        width: '100%',
        borderWidth: 1,
        borderColor: '#FF6600',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 4,
        color: '#FFFFFF',
        fontSize: 16,
        marginVertical: 2,
    },
    bottomPart: {
        flex: 0.5,
        width: '100%',
        borderWidth: 1,
        borderColor: '#0066FF',
        flexDirection: 'row',
        padding: 4,
        justifyContent: 'space-evenly',
    },
});