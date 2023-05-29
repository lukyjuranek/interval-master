import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';

var bg_img = require('./../img/gray-gradient-bg.png');

const HelpScreen = ({ navigation }) => {

    const [resetOnRestart, setResetOnRestart] = useState(false);
    const [keepScreenOn, setKeepScreenOn] = useState(true)

    return (
        <View style={styles.container}>
            <ImageBackground source={bg_img} style={styles.container} resizeMode='cover'>
                <View style={styles.topBar}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.headingText}>IntervalMaster</Text>
                    </View>
                    {/* <Entypo name="plus" size={24} color="grey" /> */}
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Feather name="x" size={30} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={[styles.mainWhiteContainer, styles.shadow]}>
                    <ScrollView style={{ flex: 1, width: '100%' }} overScrollMode='never'>
                        <View style={{ flex: 1, alignItems: 'center', marginBottom: 20 }}>
                            <Text style={styles.settingsHeading}>How to use</Text>
                            <Text style={{ marginHorizontal: 40, marginBottom: 20 }}>This app is meant to be used for timing several athletes during running, swimming or any type interval training. It keeps track of interval as well as lap times.{'\n\n'}Example:{'\n\u2022'} A swimmer is swimming sets of 400m. {'\n\u2022'} When the swimmer starts you press the <Text style={styles.textBold}>start</Text> button.{'\n\u2022'} Every 100m you press the <Text style={styles.textBold}>lap</Text> button to keep track of all splits{'\n\u2022'} When he/she finishes you press <Text style={styles.textBold}>stop</Text>. It shows you the break time and break time including the interval time in case you want to start every 5:00 for example.{'\n\u2022'} And now you just repeat the same procedure and the app records all your times which can be shared as a text message later. All this can be done for several athletes at once.</Text>
                            <Image source={require('./../img/howtouse.png')} style={{ height: 650, }} resizeMode='contain' />
                            {/* <TouchableOpacity style={[styles.button, styles.shadow]} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Dismiss</Text>
                    </TouchableOpacity> */}
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
            <StatusBar style="light" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    timeTitle: {
        width: '100%',
        paddingLeft: 120
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 30,
        marginHorizontal: 20,
    },
    settingsHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
    },
    settingsLine: {
        width: '80%',
        marginBottom: 30,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // alignContent: 'space-between'
    },
    settingsLineText: {
        fontSize: 20,
    },
    addAthlete: {
        width: '93%',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        // backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 15,
        marginTop: 10,
        // marginBottom: 10,
    },
    mainWhiteContainer: {
        backgroundColor: '#F5F5F5',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 30,

    },
    textBold: {
        fontWeight: 'bold',
    },
    shadow: {
        elevation: 2, //Adjust the elevation value to control the shadow depth
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 15,
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#fff',
    },
    headingMiniText: {
        fontSize: 8,
        textAlign: 'left',
        color: '#fff',
    },
    threeButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 15,
        width: '100%',
    },
    button: {
        backgroundColor: '#02327A',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 2,
        position: 'absolute',
        bottom: 15,

    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },

});

export default HelpScreen;