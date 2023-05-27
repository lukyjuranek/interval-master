import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';

const RenameDialog = (props) => {
    const [newName, setNewName] = useState('');

    const handleRename = () => {
        if (newName.trim() !== '') {
            props.onRename(newName);
        }
        // Clear input
        setNewName('');
    };

    return (
        <Modal visible={props.visible} animationType="slide" transparent={true}>
            <View style={styles.container}>
                <View style={styles.dialog}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new name"
                        value={newName}
                        onChangeText={setNewName}
                    />
                    <View style={styles.buttonContainer}>
                        {/* <Button title="Cancel" onPress={props.onClose} style={styles.buttonRename} /> */}
                        <TouchableOpacity style={[styles.buttonCancel]} onPress={props.onClose}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        {/* <Button title="Rename" onPress={handleRename} style={styles.buttonCancel} /> */}
                        <TouchableOpacity style={[styles.buttonRename]} onPress={handleRename}>
                                <Text style={styles.buttonText}>Rename</Text>
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

export default RenameDialog;