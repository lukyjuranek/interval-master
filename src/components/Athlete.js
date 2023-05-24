import React, { Component, useState, useEffect, useRef, useImperativeHandle } from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, Alert, TouchableHighlight
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import FlashingText from './FlashingText';

const getCurrentTime = () => {
    const now = new Date().getTime();
    return now;
}

const formatTime = (time, decimalPlaces) => {
    let result;

    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60)
        .toString()
        .padStart(2, '0');
    const milliseconds = Math.floor((time / 10) % 100)
        .toString()
        .padStart(2, '0');

    if (time < 0 || minutes < 0 || seconds < 0 || milliseconds < 0) {
        result = '0:00.00';
    } else {
        result = `${minutes}:${seconds}.${milliseconds}`;
    }
    // Remove decimals
    if (decimalPlaces == 2) {
        // removes the decimal point
        result = result.slice(0, -3);
    } else {
        result = result.slice(0, -(2 - decimalPlaces));
    }

    return result;
}

const Athlete = React.forwardRef((props, ref) => {

    const [name, setName] = useState(props.name);
    const [startTime, setStartTime] = useState(getCurrentTime());
    const [previousLapTime, setPreviousLapTime] = useState(getCurrentTime());
    const [lapTime, setLapTime] = useState(getCurrentTime());
    const [breakTime, setBreakTime] = useState(getCurrentTime());
    const [stopTime, setStopTime] = useState(getCurrentTime());
    // const [elapsedTime, setElapsedTime] = useState(getCurrentTime() - startTime);
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const [isRunning, setIsRunning] = useState(false);

    const [currentTime, setCurrentTime] = useState(new Date().getTime());

    const [storedIntTimes, setStoredIntTimes] = useState([]);
    const [storedLapTimes, setStoredLapTimes] = useState([]);
    const [intervalNumber, setIntervalNumber] = useState(0);

    const [firstStartEver, setFirstStartEver] = useState(true);
    const [intervalId, setIntervalId] = useState(0);


    // useEffect(() => {
    //     const inter
    // }, []); // Empty dependency array ensures the effect runs only once

    // Adding an item to the nested array at index
    const addLapTime = (lapTime, index) => {
        setStoredLapTimes(prevState => {
            // console.log("Prev state");
            // console.log(prevState);
            const updatedLapTimes = [...prevState]; // Create a copy of the original array

            // Check if the nested array at the specified index exists
            if (updatedLapTimes[index]) {
                // If it exists, add the lapTime to the existing nested array
                updatedLapTimes[index] = [...updatedLapTimes[index], lapTime];
            } else {
                // If it doesn't exist, create a new nested array with the lapTime
                updatedLapTimes[index] = [lapTime];
            }

            return updatedLapTimes;
        });
    }

    const start = () => {
        if (!isRunning) {
            setStartTime(getCurrentTime());
            setIsRunning(true);
            setBreakTime(getCurrentTime());
            setLapTime(getCurrentTime());
            setPreviousLapTime(getCurrentTime());

            if (!firstStartEver) {
                setIntervalNumber(intervalNumber + 1);
            }
            // Resets the js interval if it already exists
            if (firstStartEver) {
                setFirstStartEver(false);
            } else {
                clearInterval(intervalId);
            }

            // Starts the inteval/timer that updates the current time every 100 milliseconds
            setIntervalId(setInterval(() => {
                setCurrentTime(new Date().getTime());
            }, 100));
            console.log("Lap"+storedLapTimes);

        }
    }

    const lap = () => {
        if (isRunning) {
            setPreviousLapTime(lapTime);
            setLapTime(getCurrentTime())
            // I use getCurrentTime() becuase the state doesn't update instantly
            addLapTime(getCurrentTime() - previousLapTime, intervalNumber);
        }
    }

    const stop = () => {
        if (isRunning) {
            setBreakTime(getCurrentTime());
            setStopTime(getCurrentTime());
            setIsRunning(false);
            // reset lap time
            setLapTime(getCurrentTime());
            setPreviousLapTime(getCurrentTime());

            setStoredIntTimes([...storedIntTimes, stopTime]);
            // console.log("Int"+storedIntTimes);
            console.log("Lap"+storedLapTimes);
        }
    }

    const reset = () => {
        let currentT = getCurrentTime();
        setStartTime(currentT);
        setStopTime(currentT);
        setPreviousLapTime(currentT);
        setLapTime(currentT);
        setBreakTime(currentT);
        setIsRunning(false);
        setStoredIntTimes([]);
        setStoredLapTimes([]);
        setIntervalNumber(0);
        clearInterval(intervalId);
        setFirstStartEver(true);
    }

    // const getAllTimes = () => {
    //     // Returns all interval times and lap times as a simple string so we can share it as a text message
    //     return storedIntTimes.map((time, index) => {
    //         return `Interval ${index + 1}: ${formatTime(time)}\nLap times: ${storedLapTimes[index].map((lapTime, index) => {
    //             return `${index + 1}: ${formatTime(lapTime)}\n`
    //         })}`
    //     })
    // }

    const getAllTimes = () => {
        // Returns all interval times and lap times as a simple string so we can share it as a text message

        let result = name + "\n";
        result += storedIntTimes.map((intTime, index) => {
            const intervalText = `Int ${index + 1}:\t\t\t\t${formatTime(intTime, 1)}`;
            const lapTimesText = storedLapTimes[index]
                .map((lapTime, lapIndex) => `\tLap ${lapIndex + 1}:\t\t\t\t${formatTime(lapTime, 1)}`)
                .join('\n');

            return `${intervalText}\n${lapTimesText}`;
        }).join('\n');
        result += "\n"
        return result;
    }

    // const remove = () => {

    // }

    // Expose the start method to the parent component
    useImperativeHandle(ref, () => ({
        start, stop, reset, getAllTimes
    }))

    return (
        <View style={styles.container}>
            {/* <View> */}
            <TouchableHighlight style={{flexDirection: 'row'}} underlayColor='transparent' onPress={() => {
                // toggles the descriptionVisible state
                setDescriptionVisible(!descriptionVisible);
            }}>
                <View style={[styles.athlete, styles.shadow]}>

                    <View><FontAwesome5 name="running" size={24} color="black" /></View>
                    <View><Text style={styles.text}>{name}{isRunning ? intervalNumber : ""}</Text></View>
                    <View>
                        <Text style={[styles.textBold, styles.text, { color: '#0094C6' }]}>
                            {/* {isRunning ? formatTime(currentTime - startTime) : formatTime(stopTime - startTime)} */}
                            <FlashingText
                                isRunning={isRunning}
                                currentTime={currentTime}
                                startTime={startTime}
                                stopTime={stopTime}
                                firstStartEver={firstStartEver}
                            />
                        </Text>
                    </View>


                    {isRunning ? (
                        <Text style={styles.text}>{formatTime(lapTime - previousLapTime, 1)}</Text>
                    ) : (
                        <View>
                            <Text style={styles.text}>{formatTime(currentTime - breakTime, 2)}</Text>
                            <Text style={styles.text}>{formatTime(currentTime - startTime, 2)}</Text>
                        </View>
                    )}

                    <View style={styles.threeButtonsContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => start()}>
                            <Text style={[styles.buttonText, { fontWeight: isRunning ? 'normal' : 'bold' }]}>Start</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => lap()}>
                            <Text style={[styles.buttonText, { fontWeight: isRunning ? 'bold' : 'normal' }]}>Lap</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => stop()}>
                            <Text style={[styles.buttonText, { fontWeight: isRunning ? 'bold' : 'normal' }]}>Stop</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableHighlight>
            {/* </View> */}
            {descriptionVisible &&
                <View style={[styles.detailsPanel, styles.shadow]}>
                    {storedIntTimes.map((item, index) => (
                        <View style={[{ flexDirection: 'column' }]}>
                            <View style={styles.detailsPanelLineOfText}>
                                <Text style={[styles.text, styles.textBold]}>Interval {index + 1}</Text>
                                <Text style={[styles.text, styles.textBold]}>{formatTime(item, 1)}</Text>
                            </View>
                            {/* <Text>{storedLapTimes[index][0]}</Text> */}
                            {storedLapTimes[index] && storedLapTimes[index].map((lapItem, lapIndex) => (
                                <View style={styles.detailsPanelLineOfText}>
                                    {/* <View style={[{ flexDirection: 'column' }]}> */}
                                    <Text style={[styles.text, styles.lap]}>Lap {lapIndex + 1}</Text>
                                    <Text style={styles.text}>{formatTime(lapItem, 1)}</Text>
                                    {/* </View> */}
                                </View>
                            ))}
<<<<<<< HEAD
                        </View>
                    ))}
                    
=======
                        </View>
                    ))}
                    {/* <View style={styles.detailsPanelLineOfText}>
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
                        </View> */}
>>>>>>> d19a4458cdd744e5c32e1087aca52f725ab276bc
                    <View style={styles.threeButtonsContainer}>
                        <TouchableOpacity style={[styles.button]} onPress={() => reset()}>
                            <Text style={styles.buttonText}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button]} onPress={() => reset()}>
                            <Text style={styles.buttonText}>Rename</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <TouchableOpacity style={styles.button} onPress={() => remove()}>
                            <Text style={styles.buttonText}>Remove</Text>
                        </TouchableOpacity> */}
                </View>
            }

        </View>

    );

});

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
    },
    athlete: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 15,
        marginTop: 10,
        // marginBottom: 10,
    },
    detailsPanel: {
        width: '87%',
        // width: '100%',
        // display: 'flex',
        // flexDirection: 'row',
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
        fontSize: 16,
        color: '#000000',
        // fontWeight: 'bold',
    },
    textBold: {
        fontWeight: 'bold',
    },
    text: {
        fontSize: 11,
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