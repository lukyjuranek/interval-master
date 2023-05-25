import React, { Component, useState, useEffect, useRef, Profiler } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Alert, Share, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5, Entypo, Feather } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';
// TODO: only import one part of sharing
// Disabel button
import Athlete from './Athlete';
var bg_img = require('./../img/blue-gradient-bg.png');

const MainScreen = ({ navigation }) => {

    // const names = ['Athlete 1', 'Lukas', 'Athlete 3'];
    // const [currentTime, setCurrentTime] = useState(new Date().getTime());

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentTime(new Date().getTime());
    //     }, 100);

    //     return () => {
    //         clearInterval(interval); // Clear the interval when the component is unmounted
    //     };
    // }, []); // Empty dependency array ensures the effect runs only once


    // Lets us access the Athlete components methods to start all timers at once for instance
    const athleteRefs = useRef([]);

    const startAll = () => {
        athleteRefs.current.forEach((athleteRef) => {
            athleteRef.start();
        });
    }

    const stopAll = () => {
        athleteRefs.current.forEach((athleteRef) => {
            athleteRef.stop();
        });
    }

    const resetAll = () => {
        athleteRefs.current.forEach((athleteRef) => {
            athleteRef.reset();
        });
    }

    // const shareText = async (text) => {
    //     await Sharing.shareAsync(text);
    // };

    const shareText = async (text) => {
        // try {
        //   await Sharing.shareAsync({ message: text });
        // } catch (error) {
        //   console.log('Sharing failed with error:', error);
        // }

        try {
            const result = await Share.share({
                message:
                    text,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    const share = () => {
        let result = '';
        // console.log(athleteRefs);
        athleteRefs.current.forEach((athleteRef) => {
            result += athleteRef.getAllTimes();
        });
        // Alert.alert(result);
        shareText(result);
    }

    let renderCount = 0;
    const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
        // Aggregate or log render timings...
        // console.log(actualDuration);
        renderCount++;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // Log the rendering frequency per second
            console.log(`Rendering frequency: ${renderCount} renders per second`);
            // Reset the render count
            renderCount = 0;
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={bg_img} style={styles.container} resizeMode='cover'>
                <View style={styles.topBar}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.headingText}>IntervalMaster</Text>
                        <Text style={styles.headingMiniText}>Some random text</Text>
                    </View>
                    {/* <Entypo name="plus" size={24} color="grey" /> */}
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Feather name="menu" size={30} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={[styles.mainWhiteContainer, styles.shadow]}>



                    <View style={styles.timeTitle}>
                        <View><FontAwesome5 name="running" size={24} color="transparent" /></View>
                        <Text style={styles.timeTitleText}>Name</Text>
                        <Text style={[styles.textBold, styles.timeTitleText, { color: '#0094C6' }]}>
                            Time
                        </Text>
                        <View>
                            <Text style={styles.timeTitleText}>Lap</Text>
                            {/* <Text style={styles.timeTitleText}>Int</Text> */}
                        </View>
                        <View style={{ width: 157, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={styles.timeTitleText}>Controls</Text>
                        </View>
                    </View>

                    {/* 
                {names.map((item, index) => (
                     */}
                    <Profiler id="Athlete1" onRender={onRender}>
                        <Athlete name={"Athlete 1"} ref={(ref) => (athleteRefs.current[0] = ref)} />
                    </Profiler>
                    <Profiler id="Athlete1" onRender={onRender}>
                        <Athlete name={"Athlete 2"} ref={(ref) => (athleteRefs.current[1] = ref)} />
                    </Profiler>
                    <Profiler id="Athlete1" onRender={onRender}>
                        <Athlete name={"Athlete 3"} ref={(ref) => (athleteRefs.current[2] = ref)} />
                    </Profiler>

                    <TouchableOpacity style={styles.addAthlete} onPress={() => Alert.alert('Add Athlete')}>
                        <View>
                            <Entypo name="plus" size={24} color="grey" />
                        </View>
                        <Text style={[styles.buttonText, { color: 'grey', marginLeft: 15, fontWeight: 'normal', fontSize: 15 }]}>Add Athlete</Text>
                    </TouchableOpacity>
                    {/* ))} */}

                    <View style={styles.threeButtonsContainer}>
                        <TouchableOpacity style={[styles.button, styles.shadow, { backgroundColor: '#f06c6c' }]} onPress={() => resetAll()}>
                            {/* background color grey */}
                            {/* <Text style={styles.buttonText}> */}
                            <Feather name="trash" size={20} color="white" />
                            {/* </Text> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.shadow, { backgroundColor: '#9E9E9E'}]} onPress={() => share()}>
                            {/* <Text style={styles.buttonText}>Share</Text> */}
                            <Entypo name="share" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.shadow]} onPress={() => startAll()}>
                            <Text style={styles.buttonText}>Start all</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.shadow]} onPress={() => stopAll()}>
                            <Text style={styles.buttonText}>Stop all</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    timeTitle: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    timeTitleText: {
        fontSize: 10
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 30,
        marginHorizontal: 20,
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
        fontSize: 9,
        textAlign: 'left',
        color: '#fff',
        marginLeft: 2,
    },
    threeButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 15,
        width: '100%',
    },
    button: {
        // backgroundColor: '#02327A',
        backgroundColor: '#014795',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },

});

export default MainScreen;