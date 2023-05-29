import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const FlashingIcon = (props) => {
    return (
        <View><FontAwesome5 name="running" size={20} color={(props.isFlashing && props.isRunning) ? 'white' : 'black'} /></View>
        // <Text>{isFlashing}</Text>

    );
};

export default FlashingIcon;