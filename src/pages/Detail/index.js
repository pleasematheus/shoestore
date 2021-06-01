import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import * as Font from 'expo-font'

import Dot from '../../component/Dot'
import ShoesSize from '../../component/ShoesSize'
import Button from '../../component/Button'
import Footer from '../../component/Footer'

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

				<View style={{flexDirection: 'row', width: '100%'}}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<ShoesSize bgColor="#17181A" color='#FFF'>44</ShoesSize>
						<ShoesSize>42</ShoesSize>
						<ShoesSize>39</ShoesSize>
						<ShoesSize>37</ShoesSize>
					</ScrollView>
				</View>

				<View style={styles.textContent}>
					<Text style={styles.textTitle}>
						Nike Downshifter 10
					</Text>
					<Text style={styles.textContent}>
						O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético, com mesh no calcanhar, proporciona suporte e circulação de ar, forro acolchoado, entressola em espuma de EVA flexível, garantindo a sensação de amortecimento responsivo durante o treino e solado em borracha para tração durável. O homem que busca resultados e estilo, conta com a Nike para acompanhar nos treinos e no dia a dia.
					</Text>
					<Text style={styles.textList}>
						- Categoria: Amortecimento
					</Text>
					<Text style={styles.textList}>
						- Material: Mesh
					</Text>
				</View>

				<Button />
				
				<View style={styles.line} />
				
				<Footer/>

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
	},
	textContent: {
		fontSize: 16,
		lineHeight: 25,
		fontFamily: 'Inter_500Medium',
		marginVertical: '2%',
		paddingHorizontal: '2%'
	},
	textTitle: {
		fontFamily: 'Inter_500Medium',
		fontSize: 22,
		marginVertical: '2%'
	},
	textList: {
		fontFamily: 'Inter_500Medium',
		fontSize: 16,
		lineHeight: 25
	},
	line: {
		borderWidth: 1,
		borderBottomColor: '#DDD',
		marginVertical: '2%'
	}
})