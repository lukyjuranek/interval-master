import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const FlashingIcon = ({ isRunning, isFlashing}) => {
    // const [isFlashing, setIsFlashing] = useState(false);

    // useEffect(() => {
    //     let interval;

    //     if (isRunning) {
    //         interval = setInterval(() => {
    //             setIsFlashing((prevIsFlashing) => !prevIsFlashing);
    //         }, 1000);
    //     }

    //     return () => {
    //         clearInterval(interval);
    //         setIsFlashing(false);
    //     };
    // }, [isRunning]);


    return (
        <View><FontAwesome5 name="running" size={20} color={(isFlashing && isRunning) ? 'white' : 'black'} /></View>
        // <Text>{isFlashing}</Text>

    );
};

export default FlashingIcon;