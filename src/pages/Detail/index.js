import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'

import Dot from '../../component/Dot'

export default function Detail({ navigation }) {

	useEffect(() => {
		navigation.setOptions({
			headerTitle: 'Nike Downshifter 10'
		})
	}, [])

	return (
		<ScrollView style={styles.container}>
			<Image
				source={require('../../assets/detail.png')}
				style={styles.image}
				resizeMode="cover"
			/>
			<View>
				<View>
					<Text style={[styles.title, {fontSize: 24}]}>
						R$ 280,90
					</Text>
				</View>

				<View opacity={0.3}>
					<Text style={[styles.title, { fontSize: 30 }]}>
						Nike Downshifter 10
					</Text>
				</View>

				<View style={styles.dotContainer}>
					<Dot color="#2379F4"/>
					<Dot color="#FB6E53"/>
					<Dot color="#DDD"/>
					<Dot color="#000"/>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#FFF'
	},
	image: {
		width: '100%'
	},
	title: {
		fontFamily: 'Inter_700Bold',
		paddingHorizontal: '2%'
	},
	dotContainer: {
		flexDirection: 'row',
		marginVertical: '7%'
	}
})