import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, Alert, TouchableHighlight
} from 'react-native';
// import { Feather, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const getCurrentTime = () => {
    const now = new Date().getTime();
    return now;
}

const formatTime = (time) => {
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 10);
    return `${minutes}:${seconds}:${milliseconds}`;
}

const Athlete = (props) => {

    const [name, setName] = useState(props.name);
    const [startTime, setStartTime] = useState(getCurrentTime());
    const [lapTime, setLapTime] = useState(getCurrentTime());
    const [elapsedTime, setElapsedTime] = useState(getCurrentTime() - startTime);
    const [descriptionVisible, setDescriptionVisible] = useState(false);

    const [currentTime, setCurrentTime] = useState(new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().getTime());
        }, 200);

    }, []); // Empty dependency array ensures the effect runs only once



    return (
        <TouchableHighlight underlayColor='trasnparent' onPress={() => {
            // toggles the descriptionVisible state
            setDescriptionVisible(!descriptionVisible);
        }}>
            <View style={styles.container}>
                <View style={[styles.athlete, styles.shadow]}>
                    <View><FontAwesome5 name="running" size={24} color="black" /></View>
                    <View><Text style={styles.text}>{name}</Text></View>
                    <View><Text style={[styles.textBold, styles.text]}>{formatTime(currentTime-startTime)}
                    {/* <TimeComponent
            startTime={startTime}
            currentTime={currentTime}
          /> */}
          </Text></View>
                    <View><Text style={styles.text}>Text><Text style={styles.text}>1:27.1</Text></View>

                    <View style={styles.threeButtonsContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => setStartTime(getCurrentTime())}>
                            <Text style={styles.buttonText}>Start</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => setLapTime(getCurrentTime())}>
                            <Text style={styles.buttonText}>Lap</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Stop')}>
                            <Text style={styles.buttonText}>Stop</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {descriptionVisible &&
                    <View style={[styles.detailsPanel, styles.shadow]}>
                        <View style={styles.detailsPanelLineOfText}>
                            <Text style={[styles.text, styles.textBold]}>Interval 1</Text>
                            <Text style={[styles.text, styles.textBold]}>2:07.8</Text>
                        </View>
                        <View style={styles.detailsPanelLineOfText}>
                            <Text style={[styles.text, styles.lap]}>Lap 1</Text>
                            <Text style={styles.text}>2:07.8</Text>
                        </View>
                        <View style={styles.detailsPanelLineOfText}>
                            <Text style={[styles.text, styles.lap]}>Lap 2</Text>
                            <Text style={styles.text}>2:07.8</Text>
                        </View>
                        <View style={styles.detailsPanelLineOfText}>
                            <Text style={[styles.text, styles.textBold]}>Interval 1</Text>
                            <Text style={[styles.text, styles.textBold]}>2:07.8</Text>
                        </View>
                        <View style={styles.detailsPanelLineOfText}>
                            <Text style={[styles.text, styles.lap]}>Lap 1</Text>
                            <Text style={styles.text}>2:07.8</Text>
                        </View>
                        <View style={styles.detailsPanelLineOfText}>
                            <Text style={[styles.text, styles.lap]}>Lap 2</Text>
                            <Text style={styles.text}>2:07.8</Text>
                        </View>
                    </View>
                }

            </View>
        </TouchableHighlight>

    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
    },
    athlete: {
        width: '93%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 15,
        marginTop: 10,
        // marginBottom: 10,
    },
    detailsPanel: {
        width: '87%',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // height: 100,
        backgroundColor: '#fff',
        padding: 15,
        paddingBottom: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: -1,
        zIndex: -1,
    },
    detailsPanelLineOfText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
    },
    lap: {
        paddingLeft: 15,
    },
    threeButtonsContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#F5F5F5',
        borderRadius: 30,
        padding: 10,
        margin: 2,
    },
    buttonText: {
        fontSize: 13,
        color: '#000000',
        fontWeight: 'bold',
    },
    textBold: {
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
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
})

export default Athlete;