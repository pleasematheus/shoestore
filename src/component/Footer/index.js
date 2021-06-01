import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Shoes from '../Shoes'

export default function Footer() {
	return (
		<View>
			<Text style={styles.title}>Você também pode gostar</Text>
			<View style={{flexDirection: 'row'}}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View>
						<Shoes img={require('../../assets/1.png')} cost="140,90">
							Nike Air Max
						</Shoes>
					</View>
					<View>
						<Shoes img={require('../../assets/2.png')} cost="280,90">
							Nike Downshifter 10
						</Shoes>
					</View>
					<View>
						<Shoes img={require('../../assets/3.png')} cost="560,90">
							Nike Squidward Tentacles
						</Shoes>
					</View>
				</ScrollView>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontFamily: 'Inter_700Bold',
		marginVertical: '2%',
		paddingHorizontal: '2%'
	}
})