import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

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
    result = result.slice(0, -decimalPlaces);

    return result;
}

const FlashingText = ({ isRunning, currentTime, startTime, stopTime, firstStartEver }) => {
    const [isFlashing, setIsFlashing] = useState(false);

    useEffect(() => {
        let interval;

        if (!isRunning && stopTime != startTime && !firstStartEver) {
            interval = setInterval(() => {
                setIsFlashing((prevIsFlashing) => !prevIsFlashing);
            }, 500); // Interval time for flashing (in milliseconds)
        }

        return () => {
            clearInterval(interval);
            setIsFlashing(false);
        };
    }, [isRunning, firstStartEver]);

    const textStyles = [
        styles.textBold,
        styles.text,
        { color: '#0094C6' },

    ];

    return (
        <Text style={[textStyles, { color: isFlashing ? 'black' : '#0094C6' }]}>
            {isRunning
                ? formatTime(currentTime - startTime, 1)
                : formatTime(stopTime - startTime, 1)}
        </Text>

    );
};

const styles = StyleSheet.create({
    textBold: {
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16
    }
});

export default FlashingText;