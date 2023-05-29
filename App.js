import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useKeepAwake } from 'expo-keep-awake';

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