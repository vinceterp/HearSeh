/* eslint-disable prettier/prettier */
import {StatusBar, View, Text} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import styles from '../styles/styles';

export interface ExploreProps {
    markers?: Array<Object>,
    favorites?: Array<String>, //Tradesmen ID number app wide
}

const Explore = (props: ExploreProps) : JSX.Element => {
	const isMobile = true;
	
	return (
		<View style = {styles.container}>
			<MapView style={styles.map}/>
		</View>
  	);
};

export default Explore;
