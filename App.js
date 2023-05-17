import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import Athlete from './src/components/Athlete';
import React, { Component, useState } from 'react';

export default function App() {

    const [data, setData] = useState([
        { name: 'Athlete 1', time: '1:08.9', descriptionVisible: true },
        { name: 'Lukas', time: '1:08.9', descriptionVisible: false },
        { name: 'Athlete 3', time: '1:08.9', descriptionVisible: false }
    ]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>IntervalMaster</Text>
            </View>

            <View style={[styles.mainWhiteContainer, styles.shadow]}>

                <View style={styles.timeTitle}>
                    <Text><Text style={styles.textBold}>Time </Text>Lap/Int.</Text>
                </View>

                {data.map((item, index) => (
                    <TouchableHighlight underlayColor='trasnparent' onPress={() => {
                        // toggleDescriptionVisible(index);
                        setData(data.map((item, i) => {
                            if (i === index) {
                                item.descriptionVisible = !item.descriptionVisible;
                            }
                            return item;
                        }));
                    }}>
                        <Athlete data={item} key={index} />
                    </TouchableHighlight>
                ))}

            <View style={styles.threeButtonsContainer}>
                    <TouchableOpacity style={[styles.button, styles.shadow, {backgroundColor: '#9E9E9E'}]} onPress={() => Alert.alert('Start')}>
                        {/* background color grey */}
                        <Text style={styles.buttonText}>ResetAll</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.shadow]} onPress={() => Alert.alert('Lap')}>
                        <Text style={styles.buttonText}>StartAll</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.shadow]} onPress={() => Alert.alert('Stop')}>
                        <Text style={styles.buttonText}>Stop All</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#02327A',
        // linear-gradient(312.04deg, #02327A 38.29%, #0058A9 100%)
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    timeTitle: {
        alignItems: 'center',
    },
    mainWhiteContainer: {
        backgroundColor: '#F5F5F5',
        width: '100%',
        flex: 1,
        // alignItems: 'center',
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
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#fff',
        marginTop: 60,
        marginBottom: 30,
        marginLeft: 20,
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
