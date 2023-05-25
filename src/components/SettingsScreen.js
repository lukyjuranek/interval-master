import React, { Component, useState, useEffect, useRef, Profiler } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Alert, Share, Switch, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5, Entypo, Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';

var bg_img = require('./../img/gray-gradient-bg.png');

const SettingsScreen = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground source={bg_img} style={styles.container} resizeMode='cover'>
                <View style={styles.topBar}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.headingText}>IntervalMaster</Text>
                        {/* <Text style={styles.headingMiniText}>Some random text</Text> */}
                    </View>
                    {/* <Entypo name="plus" size={24} color="grey" /> */}
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Feather name="x" size={30} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={[styles.mainWhiteContainer, styles.shadow]}>
                    <Text style={styles.settingsHeading}>Settings</Text>

                    <TouchableOpacity style={styles.settingsLine} onPress={() => Alert.alert('hi')}>
                        <Text style={styles.settingsLineText}>Reset on app restart</Text>
                        <View style={{ width: 50, flexDirection: 'row', justifyContent: 'center' }}>
                            <Switch
                                onValueChange={() => setIsEnabled((previousState) => !previousState)}
                                value={isEnabled}
                                thumbColor={isEnabled ? '#014795' : '#f4f3f4'}
                                trackColor={{ false: '#767577', true: '#4d75b3' }}
                            // style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsLine} onPress={() => Alert.alert('hi')}>
                        <Text style={styles.settingsLineText}>Keep screen on</Text>
                        <View style={{ width: 50, flexDirection: 'row', justifyContent: 'center' }}>
                            <Switch
                                onValueChange={() => setIsEnabled((previousState) => !previousState)}
                                value={isEnabled}
                                thumbColor={isEnabled ? '#014795' : '#f4f3f4'}
                                trackColor={{ false: '#767577', true: '#4d75b3' }}
                            // style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsLine} onPress={() => Alert.alert('hi')}>
                        <Text style={styles.settingsLineText}>How to use</Text>
                        <View style={{ width: 50, flexDirection: 'row', justifyContent: 'center' }}>
                            <AntDesign name="questioncircleo" size={25} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsLine} onPress={() => Alert.alert('hi')}>
                        <Text style={styles.settingsLineText}>Go pro</Text>
                        <View style={{ width: 50, flexDirection: 'row', justifyContent: 'center' }}>
                            <MaterialCommunityIcons name="crown-outline" size={25} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsLine} onPress={() => Alert.alert('hi')}>
                        <Text style={styles.settingsLineText}>Rate us</Text>
                        <View style={{ width: 50, flexDirection: 'row', justifyContent: 'center' }}>
                            <AntDesign name="right" size={25} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsLine} onPress={() => Alert.alert('hi')}>
                        <Text style={styles.settingsLineText}>Language</Text>
                        <View style={{ width: 50, flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={[styles.settingsLineText, { color: 'grey', fontSize: 15 }]}>English</Text>
                        </View>
                    </TouchableOpacity>

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
        marginBottom: 30,
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

    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },

});

export default SettingsScreen;