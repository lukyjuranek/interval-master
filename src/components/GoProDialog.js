import React, { useState } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';

const GoProDialog = (props) => {

    return (
        <Modal visible={props.visible} animationType="slide" transparent={true}>
            <View style={styles.container}>
                <View style={styles.dialog}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.buttonCancel]} onPress={props.onClose}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonRename]} onPress={""}>
                            <Text style={styles.buttonText}>Go Pro</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dialog: {
        backgroundColor: '#fff',
        padding: 40,
        borderRadius: 10,
        elevation: 5,
    },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 30,
        paddingHorizontal: 10,
        borderRadius: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonRename: {
        backgroundColor: '#014795',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 2,
        marginRight: 5,
    },
    buttonCancel: {
        backgroundColor: '#9E9E9E',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 2,
        marginRight: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default GoProDialog;