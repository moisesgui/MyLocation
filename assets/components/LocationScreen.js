import React, { useState, useEffect, Component } from 'react';
import { Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import flagImg from '../../assets/flag-blue.png';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';
import * as Location from 'expo-location';

export default function LocationScreen() {
	const [ latitude, setLatitude ] = useState(-3.7645120139186536);
	const [ longitude, setLongitude ] = useState(-38.52673769619791);

	const { width, height } = Dimensions.get('window');
	const ASPECT_RATIO = width / height;
	const LATITUDE = -3.7645120139186536;
	const LONGITUDE = -38.52673769619791;
	const LATITUDE_DELTA = 0.0922;
	const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
	const SPACE = 0.01;

	useEffect(() => {
		let subscriber;
		const startWatching = async () => {
			try {
				const { granted } = await requestPermissionsAsync();
				if (!granted) {
					throw new Error('Permissão para a localização foi negada!');
				}
				subscriber = await watchPositionAsync(
					{
						accuracy: Accuracy.BestForNavigation,
						timeInterval: 1000,
						distanceInterval: 10
					},
					callback
				);
			} catch (e) {
				setErr(e);
				console.log(e);
			}
		};
	});

	const [ location, setLocation ] = useState(null);
	const [ errorMsg, setErrorMsg ] = useState(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLatitude(location.coords.latitude);
			setLongitude(location.coords.longitude);
		})();
	}, []);

	return (
    
		<View style={styles.container}>
			<MapView
				provider={'google'}
				showsUserLocation={true}
				zoomEnabled={true}
				zoomControlEnabled={true}
				pitchEnabled={true}
				showsPointsOfInterest={true}
				style={styles.mapStyle}
				initialRegion={{
					latitude: latitude,
					longitude: longitude,
					latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA
				}}
			>
				<Marker
					description={'TeclaT Location'}
					coordinate={{
						latitude: latitude,
						longitude: longitude,
					}}
					title={'Você está aqui'}
					image={flagImg}
				/>
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffd931'
	},
	mapStyle: {
		width: Dimensions.get('window').width,
		height: '100%'
	}
});
