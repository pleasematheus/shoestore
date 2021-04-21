import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar'
import React from 'react'
import AppLoading  from 'expo-app-loading'
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter'

import Routes from './src/router'

export default function App() {

	let [fontsLoaded] = useFonts({
		Inter_700Bold
	})

	if (!fontsLoaded) {
		return <AppLoading/>
	}

	return (
		<>
			<StatusBar
				style="light"
				backgroundColor="#000"
				translucent={true}
		  	/>
		  	<Routes/>
    	</>
	);
}