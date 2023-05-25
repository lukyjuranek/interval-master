import React, { Component, useState, useEffect, useRef, Profiler } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5, Entypo, Feather } from '@expo/vector-icons';
import { useKeepAwake } from 'expo-keep-awake';
import * as Sharing from 'expo-sharing';

// Imports custom components
import MainScreen from './src/components/MainScreen';
import SettingsScreen from './src/components/SettingsScreen';
import HelpScreen from './src/components/HelpScreen';

// Creates stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
    useKeepAwake();
    return (
        <NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={MainScreen} options={{
					headerShown: false,
				}} />
				< Stack.Screen name="Settings" component={SettingsScreen} options={{
                    headerShown: false,
				}} />
                < Stack.Screen name="Help" component={HelpScreen} options={{
                    headerShown: false,
				}} />
				{/* <Stack.Screen name="Compare" component={CompareScreen} options={{
					headerStyle: {
						backgroundColor: '#202020',
					},
					headerTintColor: 'white'
				}} /> */}
			</Stack.Navigator>
		</NavigationContainer>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#02327A',
//         // linear-gradient(312.04deg, #02327A 38.29%, #0058A9 100%)
//         flex: 1,
//         // alignItems: 'center',
//         justifyContent: 'center',
//     },
//     timeTitle: {
//         width: '100%',
//         paddingLeft: 120
//     },
//     topBar: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginTop: 60,
//         marginBottom: 30,
//         marginHorizontal: 20,
//     },
//     addAthlete: {
//         width: '93%',
//         flexDirection: 'row',
//         // justifyContent: 'space-between',
//         alignItems: 'center',
//         height: 70,
//         // backgroundColor: '#fff',
//         borderRadius: 10,
//         padding: 5,
//         paddingHorizontal: 15,
//         marginTop: 10,
//         // marginBottom: 10,
//     },
//     mainWhiteContainer: {
//         backgroundColor: '#F5F5F5',
//         width: '100%',
//         flex: 1,
//         alignItems: 'center',
//         // justifyContent: 'center',
//         borderTopLeftRadius: 25,
//         borderTopRightRadius: 25,
//         paddingTop: 30,

//     },
//     textBold: {
//         fontWeight: 'bold',
//     },
//     shadow: {
//         elevation: 2, //Adjust the elevation value to control the shadow depth
//         shadowColor: '#000',
//         shadowOpacity: 0.15,
//         shadowRadius: 15,
//         shadowOffset: {
//             width: 0,
//             height: 0,
//         },
//     },
//     headingText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'left',
//         color: '#fff',
//     },
//     headingMiniText: {
//         fontSize: 8,
//         textAlign: 'left',
//         color: '#fff',
//     },
//     threeButtonsContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         position: 'absolute',
//         bottom: 15,
//         width: '100%',
//     },
//     button: {
//         backgroundColor: '#02327A',
//         borderRadius: 30,
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         margin: 2,

//     },
//     buttonText: {
//         fontSize: 18,
//         color: '#fff',
//         fontWeight: 'bold',
//     },

// });
