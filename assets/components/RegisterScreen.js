import React from 'react';
import {
	StyleSheet,
	Button,
	Text,
	KeyboardAvoidingView,
	TextInput,
	TextFeld,
	TouchableOpacity,
	View,
	Image,
	KeyboardAvoidingViewComponent,
	Alert
} from 'react-native';

export default function RegisterScreen() {
	return (
		<KeyboardAvoidingView behavior="paddin" style={styles.container}>
			<Image style={styles.imgLogo} source={require('../images/logoapplogin.png')} />

			<Text style={styles.textCadastro} />

			<TextInput style={styles.input} placeholder="Nome Completo" />

			<TextInput style={styles.input} keyboardType="email-address" placeholder="E-mail" />

			<TextInput
				style={styles.input}
				keyboardType="numeric"
				secureTextEntry={true}
				placeholder="Crie uma senha"
			/>

			<TextInput
				style={styles.input}
				keyboardType="numeric"
				secureTextEntry={true}
				placeholder="Confirme a senha"
			/>

			<TouchableOpacity style={styles.btn} onPress={() => Alert.alert('Usuario cadastrado com sucesso')}>
				<Text style={styles.textBtn}>Registrar</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffd931'
	},
	input: {
		color: '#000',
		marginTop: 30,
		padding: 10,
		width: 350,
		height: 50,
		backgroundColor: '#fff',
		fontSize: 16,
		borderRadius: 3
	},
	btn: {
		width: 350,
		height: 50,
		backgroundColor: '#3498db',
		margin: 50,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textBtn: {
		color: '#ffff',
		fontSize: 17,
		fontWeight: 'bold'
	},
	textCadastro: {
		color: '#363636',
		fontSize: 22,
		fontWeight: 'bold'
	},
	imgLogo: {
		width: 150,
		height: 150
	}
});
