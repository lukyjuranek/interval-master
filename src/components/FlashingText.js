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

const FlashingText = (props) => {
    const textStyles = [
        styles.textBold,
        styles.text,
        { color: '#0094C6' },

    ];

    return (
        <Text style={[textStyles, { color: props.isFlashing && !props.isRunning && !props.firstStartEver ? 'black' : '#0094C6' }]}>
            {props.isRunning
                ? formatTime(props.currentTime - props.startTime, 1)
                : formatTime(props.stopTime - props.startTime, 1)}
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